import { Client } from "../entities/Client";
import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";


@Resolver(Client)
export class ClientResolver {
    @Query(() => [Client])
    clients(@Ctx() { em }: MyContext): Promise<Client[]>{
        return em.find(Client, {})
    }
}