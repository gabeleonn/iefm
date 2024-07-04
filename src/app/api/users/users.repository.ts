import { getKnex } from "@/database";
import { CreateUserDto, UpdateUserDto, User } from "./users.dto";

export async function getUserByEmail(email: string) {
  const database = getKnex();

  return await database<User>("users").where("email", email).first();
}

export async function createUser(user: CreateUserDto) {
  const database = getKnex();

  return await database<User>("users")
    .insert<CreateUserDto>(user)
    .returning("*");
}

export async function updateUser(id: number, user: UpdateUserDto) {
  const database = getKnex();

  return await database<User>("users")
    .where("id", id)
    .update<UpdateUserDto>(user)
    .returning("*")
    .first();
}

export async function deleteUser(id: number) {
  const database = getKnex();

  return await database<User>("users").where("id", id).del();
}
