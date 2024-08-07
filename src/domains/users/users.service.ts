import { CreateUserDto } from "./users.dto";
import * as repository from "./users.repository";
import z from "zod";

const validateUserCreation = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.string().min(11).max(11),
  cpf: z.string().min(11).max(11),
  birthday: z.coerce.date(),
  gender: z.enum(["male", "female"]),
  baptized: z.enum(["yes", "no"]),
  church_code: z.enum(["FRG", "SEDE"]),
});

export async function createUser(user: CreateUserDto) {
  const validatedUser = validateUserCreation.parse(user);

  return await repository.createUser(validatedUser);
}
