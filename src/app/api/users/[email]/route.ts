import { adaptToNextRoute, Handler } from "@/app/lib/api";
import { getKnex } from "@/database";
import { NotFound } from "@/app/lib/errors";
import { User } from "@/database/models/users";

const getUserByEmail: Handler = async ({ params: { email } }) => {
  const user = await getKnex()<User>("users").where("email", email).first();

  if (!user) {
    throw new NotFound();
  }

  return [user, 200];
};

export const GET = adaptToNextRoute(getUserByEmail);
