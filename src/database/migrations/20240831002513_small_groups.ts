import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema
    .withSchema("public")
    .createTable("small_groups", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.timestamps(true, true);

      table.string("name").notNullable();
      table.jsonb("settings").notNullable().defaultTo("{}");

      table
        .uuid("organization_id")
        .references("id")
        .inTable("organizations")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .index();

      table.unique(["name", "organization_id"]);
    });

  await knex.schema
    .withSchema("public")
    .createTable("small_group_members", (table) => {
      table.bigIncrements("id").primary();
      table.timestamps(true, true);

      table.string("role").notNullable();

      table
        .uuid("small_group_id")
        .references("id")
        .inTable("small_groups")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .index();

      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .index();

      table.unique(["small_group_id", "user_id"]);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").dropTable("small_group_members");
  await knex.schema.withSchema("public").dropTable("small_groups");
}
