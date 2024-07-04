import { database } from "../../database/index";
import { CreateUserDto, UpdateUserDto, User } from "./users.dto";

export async function getUserByEmail(email: string) {
  return await database<User>("users").where("email", email).first();
}

export async function createUser(user: CreateUserDto) {
  return await database<User>("users")
    .insert<CreateUserDto>(user)
    .returning("*")
    .first();
}

export async function updateUser(id: number, user: UpdateUserDto) {
  return await database<User>("users")
    .where("id", id)
    .update<UpdateUserDto>(user)
    .returning("*")
    .first();
}

export async function deleteUser(id: number) {
  return await database<User>("users").where("id", id).del();
}
