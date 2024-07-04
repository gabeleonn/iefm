import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").createTable("users", (table) => {
    table.bigIncrements("id").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("fullname").notNullable();
    table.string("phone").nullable();
    table.string("cpf").notNullable();
    table.date("birthday").notNullable();
    table.enum("gender", ["male", "female"]).notNullable();
    table.enum("baptized", ["yes", "no"]).notNullable();
    table.enum("church_code", ["FRG", "SEDE"]).notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("public").dropTable("users");
}
