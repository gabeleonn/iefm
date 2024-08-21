import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("roles").del();

  // Inserts seed entries
  await knex("roles").insert([
    { name: "Admin", description: "Organization Owner", type: "ORGANIZATION" },
    {
      name: "Editor",
      description: "Organization Editor",
      type: "ORGANIZATION",
    },
    {
      name: "Supervisor",
      description: "Small Group Network Supervisor",
      type: "SMALL_GROUP",
    },
    { name: "Leader", description: "Small Group Leader", type: "SMALL_GROUP" },
    { name: "Member", description: "Small Group Leader", type: "SMALL_GROUP" },
    { name: "Guest", description: "Small Group Leader", type: "SMALL_GROUP" },
  ]);
}
