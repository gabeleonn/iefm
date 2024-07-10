import * as service from "../users.service";

async function getUserByEmail(
  { credentials, headers, ...req }: Request,
  { params }: { params: { email: string } },
) {
  try {
    const user = await service.getUserByEmail(params.email);

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json(user, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export { getUserByEmail as GET };
