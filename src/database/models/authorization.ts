import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { Model } from "./shared";

class RoleModel extends Model {
  @IsNumber()
  id!: bigint;
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  description!: string;
}

export class Role extends RoleModel {
  constructor(data: Partial<Role>) {
    super(data, Role);
  }
}

class PermissionModel extends Model {
  @IsNumber()
  id!: bigint;
  @IsNotEmpty()
  resource!: string;
  @IsEnum(["READ", "DELETE", "CREATE", "UPDATE"])
  action!: "READ" | "DELETE" | "CREATE" | "UPDATE";
}

export class Permission extends PermissionModel {
  constructor(data: Partial<Permission>) {
    super(data, Permission);
  }
}

class RolePermissionModel extends Model {
  @IsNumber()
  id!: bigint;
  @IsNumber()
  role_id!: bigint;
  @IsNumber()
  permission_id!: bigint;
}

export class RolePermission extends RolePermissionModel {
  constructor(data: Partial<Role>) {
    super(data, RolePermission);
  }
}

class OrganizationRoleModel extends Model {
  @IsNumber()
  id!: bigint;
  @IsNumber()
  organization_id!: string;
  @IsNumber()
  role_id!: bigint;
}

export class OrganizationRole extends OrganizationRoleModel {
  constructor(data: Partial<OrganizationRole>) {
    super(data, OrganizationRole);
  }
}
