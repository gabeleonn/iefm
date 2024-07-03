import knex from "knex";
import config from "../../knexfile.js";

export const database = knex(config[process.env.NODE_ENV || "development"]);
