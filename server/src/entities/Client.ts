import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Client {
  @Field()
  @PrimaryKey()
  client_id!: number;

  @Field()
  @Property({type: "text", unique: true })
  username!: string;

  @Property({type: "text" })
  password!: string;
  
  @Field()
  @Property({type: "text" })
  first_name!: string;

  @Field()
  @Property({type: "text" })
  last_name!: string;

  @Field()
  @Property({type: "text", unique: true })
  email!: string;


  @Field()
  @Property()
  age!: number;

  @Field(() => String)
  @Property({type: "date"})
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date()

}