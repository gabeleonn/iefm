import {
  IsUUID,
  IsDateString,
  Length,
  IsEnum,
  IsNumber,
  IsEmail,
} from "class-validator";
import { Timestamps } from "./shared";
import { Transform } from "class-transformer";

export class User extends Timestamps {
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

  constructor(data: any) {
    super();
    Object.assign(this, data);
  }
}

export class CreateUser {
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

  @Transform(({ value }) => value || 6)
  @IsNumber()
  role_id!: bigint;
  @IsUUID()
  organization_id!: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
