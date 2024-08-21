import { adaptToNextRoute, Handler } from "@/app/lib/api";
import * as service from "./roles.service";
import { CreateRole } from "./roles.dto";

const getRoles: Handler = async () => {
  return {
    data: await service.list(),
    status: 200,
  };
};

const addRole: Handler = async ({ body }) => {
  return {
    data: await service.create(body as CreateRole),
    status: 201,
  };
};

export const GET = adaptToNextRoute(getRoles);
export const POST = adaptToNextRoute(addRole);
