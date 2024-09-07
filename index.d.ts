import { Knex } from "knex";

declare global {
  var db: { instance?: Knex };
}
