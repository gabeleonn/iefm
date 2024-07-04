import { Knex } from "knex";

const config: Record<string, Knex.Config> = {
  test: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  development: {
    client: "postgresql",
    connection: "postgresql://postgres:postgres@localhost:5432/fm-api",
    searchPath: ["knex", "public"],
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};

export default config;
