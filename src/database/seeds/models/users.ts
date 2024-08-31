export interface User {
  id: string;
  created_at: Date;
  updated_at: Date;

  fullname: string;
  cpf: string;
  birthday: Date;
  gender: "male" | "female";

  email: string;
  phone: string;

  baptized: "yes" | "no";

  role_id: bigint;
  organization_id: string;
}

export const admin = {
  id: "2002b04e-d83d-4885-9ccc-1c3beeb9e355",
  created_at: new Date(),
  updated_at: new Date(),

  fullname: "Admin",
  cpf: "00000000000",
  birthday: new Date(),
  gender: "male",

  email: "gableonn@gmail.com",
  phone: "00000000000",

  baptized: "yes",

  role_id: BigInt(0),
  organization_id: "1e956d32-5ad8-452e-b310-9f9c78fab8b4",
};
