import { adaptToNextRoute, Handler } from "@/app/lib/api";
import { validate } from "@/app/lib/validator";
import { getKnex } from "@/database";
import { CreateUser, User } from "@/database/models/users";

const createNewUser: Handler = async ({ body }) => {
  const raw = new CreateUser(body);

  await raw.validate();

  const [user] = await getKnex()<User>("users")
    .insert<CreateUser>(raw)
    .returning("*");

  return [user, 201];
};

export const POST = adaptToNextRoute(createNewUser);
