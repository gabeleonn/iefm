import { Knex } from "knex";

import { Organization, organizations } from "./models/organizations";

export async function seed(knex: Knex): Promise<void> {
  const [sede, fazenda] = organizations;
  await knex<Organization>("organizations")
    .insert([sede, fazenda])
    .onConflict("id")
    .merge();

  await knex("organization_branches")
    .insert({
      id: "6a3e63f8-b3fe-4e35-a98c-ccbeffe974ac",
      organization_id: sede.id,
      branch_id: fazenda.id,
    })
    .onConflict("id")
    .merge();
}
