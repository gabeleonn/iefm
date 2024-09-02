import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").createTable("roles", (table) => {
    table.string("name").notNullable().unique();
    table.string("description").notNullable();

    table.timestamps(true, true);
    table.bigIncrements("id").primary();
  });

  await knex.schema.withSchema("public").createTable("permissions", (table) => {
    table.string("resource").notNullable().index();
    table.enum("action", ["READ", "DELETE", "CREATE", "UPDATE"]).notNullable();

    table.timestamps(true, true);
    table.bigIncrements("id").primary();
    table.unique(["resource", "action"]);
  });

  await knex.schema
    .withSchema("public")
    .createTable("role_permissions", (table) => {
      table
        .bigint("role_id")
        .references("id")
        .inTable("roles")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .bigint("permission_id")
        .references("id")
        .inTable("permissions")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.timestamps(true, true);
      table.bigIncrements("id").primary();
    });

  await knex.schema
    .withSchema("public")
    .createTable("organization_roles", (table) => {
      table.bigIncrements("id").primary();

      table
        .uuid("organization_id")
        .references("id")
        .inTable("organizations")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .bigint("role_id")
        .references("id")
        .inTable("roles")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.timestamps(true, true);

      table.unique(["organization_id", "role_id"]);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("organization_roles");
  await knex.schema.dropTable("role_permissions");
  await knex.schema.dropTable("permissions");
  await knex.schema.dropTable("roles");
}
