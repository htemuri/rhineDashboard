import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { ClientResolver } from "./resolvers/client";
//import { Client } from "./entities/Client";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();

    const post = orm.em.create(Post, { title: "my second post"});
    await orm.em.persistAndFlush(post);

    // const client = orm.em.create(Client, { username: "htemuri", first_name: "harris", last_name: "temuri", 
    //     email: "aangtemuri@gmail.com", age: "18", password: "123testing" });
    // await orm.em.persistAndFlush(client);

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, ClientResolver],
            validate: false
        }),
        context: () => ({ em: orm.em })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    })
}

main().catch(err => {
    console.log(err)
});
