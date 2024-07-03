import { Request, Response } from "express";
import * as service from "./users.service.js";

export async function singupHandler(request: Request, response: Response) {
  const user = request.body;
  const createdUser = await service.createUser(user);

  return response.status(201).json(createdUser);
}

export async function signinHandler(request: Request, response: Response) {
  const user = request.body;
  const signedUser = await service.signin(user);

  return response.json(signedUser);
}
