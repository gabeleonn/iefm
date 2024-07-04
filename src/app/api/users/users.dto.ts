export interface User {
  id: number;
  email: string;
  fullname: string;
  phone: string;
  cpf: string;
  birthday: Date;
  gender: "male" | "female";
  baptized: "yes" | "no";
  church_code: "FRG" | "SEDE";

  created_at: Date;
  updated_at: Date;
}

export type CreateUserDto = Omit<User, "id" | "created_at" | "updated_at">;
export type UpdateUserDto = Partial<CreateUserDto>;
export type UpsertUserDto = CreateUserDto | UpdateUserDto;
