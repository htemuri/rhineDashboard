import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    user: 'harris',
    password: '50193262Kl^',
    entities: [Post],
    dbName: 'server',
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];

