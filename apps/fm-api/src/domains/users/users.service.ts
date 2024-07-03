import bcrypt from "bcrypt";
import { CreateUserDto, LoginDto } from "./users.dto";
import * as repository from "./users.repository";
import z from "zod";

const validateUserCreation = z.object({
  email: z.string().email(),
  password: z.string(),
  fullname: z.string(),
  phone: z.string().min(11).max(11),
  cpf: z.string().min(11).max(11),
  birthday: z.coerce.date(),
  gender: z.enum(["male", "female"]),
  baptized: z.enum(["yes", "no"]),
  church_code: z.enum(["FRG", "SEDE"]),
});

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function comparePasswords(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function createUser(user: CreateUserDto) {
  const validatedUser = validateUserCreation.parse(user);
  validatedUser.password = await hashPassword(validatedUser.password);

  return await repository.createUser(validatedUser);
}

export async function signin(user: LoginDto) {
  const dbUser = await repository.getUserByEmail(user.email);

  if (!dbUser) {
    throw new Error("Could not login");
  }

  const { password, ...userToReturn } = dbUser;

  const isPasswordValid = await comparePasswords(user.password, password);

  if (!isPasswordValid) {
    throw new Error("Could not login");
  }

  return userToReturn;
}
