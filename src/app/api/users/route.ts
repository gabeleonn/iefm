import { adaptToNextRoute, Handler } from "@/app/lib/api";
import * as service from "./users.service";
import { CreateUserDto } from "./users.dto";

const createNewUser: Handler = async ({ body }) => {
  return {
    data: await service.createUser(body as CreateUserDto),
    status: 201,
  };
};

export const POST = adaptToNextRoute(createNewUser);
