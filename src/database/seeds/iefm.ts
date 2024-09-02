import { Knex } from "knex";
import { seed as seedUsers } from "./use-cases/user";
import { seed as seedAuth } from "./use-cases/authorization";
import { seed as seedOrgs } from "./use-cases/organizations";

export async function seed(knex: Knex): Promise<void> {
  await seedOrgs(knex);
  await seedAuth(knex);
  await seedUsers(knex);
}
