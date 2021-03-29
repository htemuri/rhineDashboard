"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResolver = void 0;
const Client_1 = require("../entities/Client");
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
let EmailPasswordInput = class EmailPasswordInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EmailPasswordInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EmailPasswordInput.prototype, "password", void 0);
EmailPasswordInput = __decorate([
    type_graphql_1.InputType()
], EmailPasswordInput);
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let ClientResponse = class ClientResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], ClientResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Client_1.Client, { nullable: true }),
    __metadata("design:type", Client_1.Client)
], ClientResponse.prototype, "client", void 0);
ClientResponse = __decorate([
    type_graphql_1.ObjectType()
], ClientResponse);
let ClientResolver = class ClientResolver {
    clients({ em }) {
        return em.find(Client_1.Client, {});
    }
    register(options, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const hashedPassword = yield argon2_1.default.hash(options.password);
            const client = em.create(Client_1.Client, {
                email: options.email,
                password: hashedPassword,
            });
            try {
                yield em.persistAndFlush(client);
            }
            catch (err) {
                if (err.code === "23505") {
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
        });
    }
    login(options, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield em.findOne(Client_1.Client, {
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
            const valid = yield argon2_1.default.verify(client.password, options.password);
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
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Client_1.Client]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "clients", null);
__decorate([
    type_graphql_1.Mutation(() => ClientResponse),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => ClientResponse),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "login", null);
ClientResolver = __decorate([
    type_graphql_1.Resolver(Client_1.Client)
], ClientResolver);
exports.ClientResolver = ClientResolver;
//# sourceMappingURL=client.js.map