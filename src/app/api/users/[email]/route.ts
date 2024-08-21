import { adaptToNextRoute, Handler } from "@/app/lib/api";
import * as service from "../users.service";

const getUserByEmail: Handler = async ({ params }) => {
  return {
    data: await service.getUserByEmail(params.email),
    status: 200,
  };
};

export const GET = adaptToNextRoute(getUserByEmail);
