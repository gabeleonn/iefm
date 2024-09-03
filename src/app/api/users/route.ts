import { adaptToNextRoute, Handler } from "@/app/lib/api";
import { BadRequest } from "@/app/lib/errors";
import { getKnex } from "@/database";
import { CreateUser, User } from "@/database/models/users";
import { validate } from "class-validator";

const createNewUser: Handler = async ({ body }) => {
  const raw = new CreateUser(body);

  const err = await validate(raw);

  if (err.length) {
    throw new BadRequest(
      `Invalid properties: ${err.map((e) => e.property).join(", ")}`,
    );
  }

  const [user] = await getKnex()<User>("users")
    .insert<CreateUser>(raw)
    .returning("*");

  return [user, 201];
};

export const POST = adaptToNextRoute(createNewUser);
