import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema
    .withSchema("public")
    .createTable("organizations", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.timestamps(true, true);
      table
        .enum("status", ["active", "inactive"])
        .notNullable()
        .defaultTo("active");
      table
        .enum("type", ["headquarters", "branch"])
        .notNullable()
        .defaultTo("active");

      table.string("name").notNullable();
      table.string("short_name").notNullable();
      table.string("cnpj").notNullable();

      table.string("email").notNullable();
      table.string("phone").notNullable();
      table.string("website").notNullable();

      table.string("address").notNullable();
      table.string("number").notNullable();
      table.string("city").notNullable();
      table.string("state").notNullable();
      table.string("cep").notNullable();

      table.jsonb("settings").notNullable().defaultTo("{}");
    });

  await knex.schema
    .withSchema("public")
    .createTable("organization_branches", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.timestamps(true, true);

      table
        .uuid("organization_id")
        .references("id")
        .inTable("organizations")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .uuid("branch_id")
        .references("id")
        .inTable("organizations")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").dropTable("organization_branches");
  await knex.schema.withSchema("public").dropTable("organizations");
}
