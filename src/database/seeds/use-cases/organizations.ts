import { Knex } from "knex";

import { organizations } from "../mocks/organizations";
import { OrganizationBranch } from "../../models/organizations";

export async function seed(knex: Knex): Promise<void> {
  const [sede, fazenda] = organizations;
  await knex("organizations").insert([sede, fazenda]).onConflict("id").merge();

  await knex("organization_branches")
    .insert(
      new OrganizationBranch({
        id: "6a3e63f8-b3fe-4e35-a98c-ccbeffe974ac",
        organization_id: sede.id,
        branch_id: fazenda.id,
      }),
    )
    .onConflict("id")
    .merge()
    .onConflict(["organization_id", "branch_id"])
    .merge();
}
