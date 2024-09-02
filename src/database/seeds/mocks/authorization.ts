import { Permission, Role } from "@/database/models/authorization";

const ADMIN = new Role({ name: "ADMIN", description: "Administrador" });
const COORDENADOR = new Role({
  name: "COORDINATOR",
  description: "Coordenador de redes de grupos pequenos",
});
const SUPERVISOR = new Role({
  name: "SUPERVISOR",
  description: "Supervisor de grupos pequenos",
});
const LIDER = new Role({
  name: "LEADER",
  description: "Líder de um grupo pequeno",
});
const MEMBRO = new Role({
  name: "MEMBER",
  description: "Membro de um grupo pequeno",
});
const VISITANTE = new Role({
  name: "GUEST",
  description: "Visitante de um grupo pequeno",
});

export const roles: Role[] = [
  ADMIN,
  COORDENADOR,
  SUPERVISOR,
  LIDER,
  MEMBRO,
  VISITANTE,
].map((role, idx) => {
  role.id = BigInt(idx);
  return role;
});

function createPermissionWithAllActions(
  resource: string,
): Partial<Permission>[] {
  return [
    new Permission({ resource, action: "READ" }),
    new Permission({ resource, action: "DELETE" }),
    new Permission({ resource, action: "CREATE" }),
    new Permission({ resource, action: "UPDATE" }),
  ];
}

export const permissions = [
  createPermissionWithAllActions("organization.settings"),
  createPermissionWithAllActions("organization.roles"),
  createPermissionWithAllActions("organization.roles.permissions"),
  createPermissionWithAllActions("organization.users"),
]
  .flatMap((permissions) => permissions)
  .map((permission, idx) => {
    permission.id = BigInt(idx);
    return permission;
  });
