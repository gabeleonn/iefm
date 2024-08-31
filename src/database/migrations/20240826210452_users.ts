import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.withSchema("public").createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.timestamps(true, true);

    table.string("fullname").notNullable();
    table.string("cpf").notNullable();
    table.date("birthday").notNullable();
    table.enum("gender", ["male", "female"]).notNullable();

    table.string("email").notNullable().unique();
    table.string("phone").nullable();

    table.enum("baptized", ["yes", "no"]).notNullable();

    table
      .bigint("role_id")
      .references("id")
      .inTable("roles")
      .onDelete("SET NULL")
      .onUpdate("CASCADE")
      .index();

    table
      .uuid("organization_id")
      .references("id")
      .inTable("organizations")
      .onDelete("SET NULL")
      .onUpdate("CASCADE")
      .index();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").dropTable("users");
}
