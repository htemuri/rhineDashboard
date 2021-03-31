import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { EntityManager } from "@mikro-orm/postgresql";
import argon2 from "argon2";

@InputType()
class LoginInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@InputType()
class TrainerSignUpInput {
  @Field()
  email: string;
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field()
  password: string;
  @Field()
  cert_id: string;
}

@InputType()
class ClientSignUpInput {
  @Field()
  email: string;
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { em, req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Query(() => [User])
  users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User, {});
  }

  @Mutation(() => UserResponse)
  async registerTrainer(
    @Arg("options") options: TrainerSignUpInput,
    @Ctx() { em, req }: MyContext
  ) {
    if (options.password.length <= 8) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be longer than 8 characters",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      const result = await (em as EntityManager)
        .createQueryBuilder(User)
        .getKnexQuery()
        .insert({
          email: options.email,
          first_name: options.first_name,
          last_name: options.last_name,
          cert_id: options.cert_id,
          is_client: false,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .returning("*");
      user = result[0];
    } catch (err) {
      if (err.code === "23505") {
        // duplicate email error
        return {
          errors: [
            {
              field: "email",
              message: "That e-mail already exists",
            },
          ],
        };
      }
      console.log("message", err.message);
    }

    // store user id session
    // this will set a cookie
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async registerClient(
    @Arg("options") options: ClientSignUpInput,
    @Ctx() { em, req }: MyContext
  ) {
    if (options.password.length <= 8) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be longer than 8 characters",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      email: options.email,
      first_name: options.first_name,
      last_name: options.last_name,
      isClient: true,
      cert_id: null,
      password: hashedPassword,
    });

    try {
      await em.persistAndFlush(user);
    } catch (err) {
      if (err.code === "23505") {
        // duplicate email error
        return {
          errors: [
            {
              field: "email",
              message: "That e-mail already exists",
            },
          ],
        };
      }
      console.log("message", err.message);
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: LoginInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, {
      email: options.email,
    });
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message: "That e-mail address doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);

    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "That password is incorrect",
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }
}
