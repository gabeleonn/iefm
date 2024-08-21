import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").createTable("roles", (table) => {
    table.increments("id").primary();

    table.string("name").notNullable();
    table.string("description").notNullable();

    table.timestamps(true, true);
  });

  await knex.schema.withSchema("public").createTable("permissions", (table) => {
    table.increments("id").primary();

    table.string("resource").notNullable();
    table.enum("action", ["READ", "DELETE", "CREATE", "UPDATE"]).notNullable();

    table.timestamps(true, true);
  });

  await knex.schema
    .withSchema("public")
    .createTable("role_permissions", (table) => {
      table.increments("id").primary();

      table
        .bigInteger("role_id")
        .unsigned()
        .references("id")
        .inTable("roles")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .bigInteger("permission_id")
        .unsigned()
        .references("id")
        .inTable("permissions")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.timestamps(true, true);
    });

  await knex.schema.withSchema("public").alterTable("users", (table) => {
    table
      .bigInteger("role_id")
      .unsigned()
      .references("id")
      .inTable("roles")
      .onDelete("SET NULL")
      .onUpdate("CASCADE")
      .defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").alterTable("users", (table) => {
    table.dropColumn("role_id");
  });

  await knex.schema.dropTable("role_permissions");

  await knex.schema.dropTable("roles");

  await knex.schema.dropTable("permissions");
}
