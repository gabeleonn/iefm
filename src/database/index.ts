import knex from "knex";
import knexConfig from "../../knexfile";

let cached = global.db;

if (!cached) cached = global.db = {};

export function getKnex() {
  const config = knexConfig[process.env.NODE_ENV ?? "development"];

  if (!config) {
    throw new Error(
      `No database configuration found for environment '${process.env.NODE_ENV ?? "development"}'`,
    );
  }

  if (!cached.instance) cached.instance = knex(config);

  return cached.instance;
}
