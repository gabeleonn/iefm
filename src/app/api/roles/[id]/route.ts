import { adaptToNextRoute, Handler } from "@/app/lib/api";
import * as service from "../roles.service";

export const deleteRole: Handler = async ({ params }) => {
  const id = parseInt(params.id);
  await service.remove(id);

  return {
    data: null,
    status: 200,
  };
};

export const patchRole: Handler = async ({ params, body }) => {
  const id = parseInt(params.id);
  const role = await service.update(id, body);

  return {
    data: role,
    status: 200,
  };
};

export const DELETE = adaptToNextRoute(deleteRole);
export const PATCH = adaptToNextRoute(patchRole);
