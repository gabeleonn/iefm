import { NextRequest, NextResponse } from "next/server";
import * as service from "./users.service";

async function createNewUser(req: Request) {
  try {
    const body = await req.json();
    const user = await service.createUser(body);

    return Response.json(user, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export { createNewUser as POST };
