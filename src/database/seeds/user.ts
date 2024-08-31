import { Knex } from "knex";
import { admin } from "./models/users";

export async function seed(knex: Knex): Promise<void> {
  await knex("users")
    .insert(admin)
    .onConflict("email")
    .merge()
    .onConflict("id")
    .merge();
}
