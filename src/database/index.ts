import knex from "knex";
import config from "../../knexfile";

export const database = knex(config[process.env.NODE_ENV || "development"]);
