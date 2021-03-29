import { Client } from "../entities/Client";
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
import argon2 from "argon2";

@InputType()
class EmailPasswordInput {
  @Field()
  email: string;
  @Field()
  password: string;
  // @Field()
  // first_name: string;
  // @Field()
  // last_name: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class ClientResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => Client, { nullable: true })
  client?: Client;
}

@Resolver(Client)
export class ClientResolver {
  @Query(() => [Client])
  clients(@Ctx() { em }: MyContext): Promise<Client[]> {
    return em.find(Client, {});
  }

  @Mutation(() => ClientResponse)
  async register(
    @Arg("options") options: EmailPasswordInput,
    @Ctx() { em }: MyContext
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
    const client = em.create(Client, {
      email: options.email,
      // first_name: options.first_name,
      // last_name: options.last_name,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(client);
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
    return { client };
  }

  @Mutation(() => ClientResponse)
  async login(
    @Arg("options") options: EmailPasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<ClientResponse> {
    const client = await em.findOne(Client, {
      email: options.email,
    });
    if (!client) {
      return {
        errors: [
          {
            field: "email",
            message: "That e-mail address doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(client.password, options.password);

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

    return {
      client,
    };
  }
}
