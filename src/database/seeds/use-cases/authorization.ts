import { Knex } from "knex";
import { roles, permissions } from "../mocks/authorization";
import { OrganizationRole, RolePermission } from "../../models/authorization";

export async function seed(knex: Knex): Promise<void> {
  await knex("roles").insert(roles).onConflict("id").merge();

  await knex("permissions")
    .insert(permissions)
    .onConflict(["resource", "action"])
    .merge()
    .onConflict("id")
    .merge();

  const rolePermissions = permissions.map(
    (permission, idx) =>
      new RolePermission({
        id: BigInt(idx),
        role_id: BigInt(0),
        permission_id: permission.id,
      }),
  );

  await knex("role_permissions")
    .insert(rolePermissions)
    .onConflict("id")
    .merge();

  await knex("organization_roles")
    .insert(
      roles.map(
        (role, idx) =>
          new OrganizationRole({
            id: BigInt(idx),
            role_id: BigInt(role.id),
            organization_id: "1e956d32-5ad8-452e-b310-9f9c78fab8b4",
          }),
      ),
    )
    .onConflict("id")
    .merge()
    .onConflict(["organization_id", "role_id"])
    .merge();
}
