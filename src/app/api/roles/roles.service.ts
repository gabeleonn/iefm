import { ApiError, BadRequest } from "@/app/lib/errors";
import { CreateRole, UpdateRole } from "./roles.dto";
import * as repository from "./roles.repository";
import z from "zod";

function validate(role?: CreateRole) {
  const validator = z.object({
    name: z.string(),
    description: z.string(),
    type: z.enum(["ORGANIZATION", "SMALL_GROUP"]),
  });

  try {
    return validator.parse(role);
  } catch (error) {
    throw new BadRequest();
  }
}

export async function create(role?: CreateRole) {
  const validated = validate(role);

  const [created] = await repository.createRole(validated);

  return created;
}

export async function update(id: number, role: UpdateRole) {
  const [updated] = await repository.updateRole(id, role);

  return updated;
}

export async function remove(id: number) {
  return await repository.deleteRole(id);
}

export async function list() {
  return await repository.getRoles();
}
