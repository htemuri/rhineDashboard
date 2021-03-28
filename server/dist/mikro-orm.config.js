"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const Client_1 = require("./entities/Client");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    user: 'harris',
    password: '50193262Kl^',
    entities: [Post_1.Post, Client_1.Client],
    dbName: 'server',
    type: 'postgresql',
    debug: !constants_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map