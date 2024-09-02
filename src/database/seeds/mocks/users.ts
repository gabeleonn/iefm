import { User } from "../../models/users";

export const admin = new User({
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
});
