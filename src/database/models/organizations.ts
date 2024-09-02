import { OmitType, PickType } from "@/app/lib/type-utils";

import {
  IsUUID,
  Length,
  IsEnum,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsNotEmptyObject,
} from "class-validator";
import { Model } from "./shared";

class OrganizationModel extends Model {
  @IsUUID()
  id!: string;
  @IsEnum(["active", "inactive"])
  status!: "active" | "inactive";
  @IsEnum(["headquarters", "branch"])
  type!: "headquarters" | "branch";

  @Length(2, 255)
  name!: string;
  @Length(2, 255)
  shortname!: string;
  @Length(14, 14)
  cnpj!: string;

  @IsEmail()
  email!: string;
  @Length(11, 11)
  phone!: string;
  @IsUrl()
  website!: string;

  @IsNotEmpty()
  address!: string;
  @IsNotEmpty()
  number!: string;
  @IsNotEmpty()
  city!: string;
  @IsNotEmpty()
  state!: string;
  @IsNotEmpty()
  cep!: string;

  @IsNotEmptyObject()
  settings!: Record<string, any>;
}

export class Organization extends OrganizationModel {
  constructor(data: Partial<Organization>) {
    super(data, Organization);
  }
}

export class CreateOrganization extends OmitType(Organization, [
  "id",
  "created_at",
  "updated_at",
]) {
  constructor(data: Partial<Organization>) {
    super(data);
  }
}

class OrganizationBranchModel extends Model {
  @IsUUID()
  id!: string;
  @IsUUID()
  organization_id!: string;
  @IsUUID()
  branch_id!: string;
}

export class OrganizationBranch extends PickType(OrganizationBranchModel, [
  "organization_id",
  "branch_id",
]) {
  constructor(data: Partial<OrganizationBranch>) {
    super(data, OrganizationBranch);
  }
}
