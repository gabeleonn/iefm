import * as service from "./users.service";

export async function singupHandler(request: any, response: any) {
  const user = request.body;
  const createdUser = await service.createUser(user);

  return response.status(201).json(createdUser);
}
