import { OmitType, PickType } from "@/app/lib/type-utils";

import {
  IsUUID,
  IsDateString,
  Length,
  IsEnum,
  IsNumber,
  IsEmail,
} from "class-validator";
import { Model } from "./shared";

class UserModel extends Model {
  @IsUUID()
  id!: string;

  @Length(2, 255)
  fullname!: string;
  @Length(11, 11)
  cpf!: string;
  @IsDateString(
    {},
    {
      message: "Data de nascimento inválida",
    },
  )
  birthday!: Date;
  @IsEnum(["male", "female"], {
    message: "Gênero inválido",
  })
  gender!: "male" | "female";
  @IsEnum(["yes", "no"])
  baptized!: "yes" | "no";

  @IsEmail()
  email!: string;
  @Length(11, 11)
  phone!: string;

  @IsNumber()
  role_id!: bigint;
  @IsUUID()
  organization_id!: string;
}

export class User extends UserModel {
  constructor(data: Partial<User>) {
    super(data, User);
  }
}

export class CreateUser extends OmitType(User, [
  "id",
  "created_at",
  "updated_at",
]) {
  constructor(data: Partial<User>) {
    super(data);
  }
}

export class UpdateUser extends OmitType(User, [
  "id",
  "cpf",
  "created_at",
  "updated_at",
]) {
  constructor(data: Partial<User>) {
    super(data);
  }
}

export class DeleteUser extends PickType(User, ["id"]) {
  constructor(data: Pick<User, "id">) {
    super(data);
  }
}
