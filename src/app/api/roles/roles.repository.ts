import { getKnex } from "@/database";
import { Role, CreateRole, UpdateRole } from "./roles.dto";

export async function getRoles() {
  const database = getKnex();

  return await database<Role>("roles").select("*");
}

export async function createRole(role: CreateRole) {
  const database = getKnex();

  return await database<Role>("roles").insert<CreateRole>(role).returning("*");
}

export async function updateRole(id: number, role: UpdateRole) {
  const database = getKnex();

  return await database<Role>("roles")
    .where("id", id)
    .update<UpdateRole>(role)
    .returning("*");
}

export async function deleteRole(id: number) {
  const database = getKnex();

  return await database<Role>("roles").where("id", id).del();
}
