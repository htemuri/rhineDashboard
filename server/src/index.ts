import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
//import { Client } from "./entities/Client";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  // const post = orm.em.create(Post, { title: "my second post"});
  // await orm.em.persistAndFlush(post);

//   const user = orm.em.create(User, {
//     email: "sdf@ga.com",
//     first_name: "harris",
//     last_name: "temuri",
//     age: "18",
//     cert_id: "2321351",
//     password: "123testing",
//   });
//   await orm.em.persistAndFlush(user);

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
