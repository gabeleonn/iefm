export interface Role {
  id: bigint;
  name: string;
  description: string;

  created_at: Date;
  updated_at: Date;
}

export interface Permission {
  id: bigint;
  resource: string;
  action: "READ" | "DELETE" | "CREATE" | "UPDATE";

  created_at: Date;
  updated_at: Date;
}

export interface RolePermission {
  id: bigint;
  role_name: string;
  permission_resource: string;

  created_at: Date;
  updated_at: Date;
}

export interface OrganizationRole {
  id: bigint;
  organization_id: string;
  role_name: string;
}

const ADMIN = { name: "ADMIN", description: "Administrador" };
const COORDENADOR = {
  name: "COORDINATOR",
  description: "Coordenador de redes de grupos pequenos",
};
const SUPERVISOR = {
  name: "SUPERVISOR",
  description: "Supervisor de grupos pequenos",
};
const LIDER = { name: "LEADER", description: "Líder de um grupo pequeno" };
const MEMBRO = { name: "MEMBER", description: "Membro de um grupo pequeno" };
const VISITANTE = {
  name: "GUEST",
  description: "Visitante de um grupo pequeno",
};

export const roles: Omit<Role, "created_at" | "updated_at">[] = [
  ADMIN,
  COORDENADOR,
  SUPERVISOR,
  LIDER,
  MEMBRO,
  VISITANTE,
].map((role, idx) => ({ ...role, id: BigInt(idx) }));

function createPermissionWithAllActions(
  resource: string,
): Partial<Permission>[] {
  return [
    { resource, action: "READ" },
    { resource, action: "DELETE" },
    { resource, action: "CREATE" },
    { resource, action: "UPDATE" },
  ];
}

export const permissions = [
  createPermissionWithAllActions("organization.settings"),
  createPermissionWithAllActions("organization.roles"),
  createPermissionWithAllActions("organization.roles.permissions"),
  createPermissionWithAllActions("organization.users"),
]
  .flatMap((permissions) => permissions)
  .map((permission, idx) => ({ ...permission, id: idx }));
