import { Application } from "express";
import { signinHandler, singupHandler } from "./user.controller";

export function setupUsersController(app: Application) {
  app.post("/api/v1/auth/signup", singupHandler);
  app.post("/api/v1/auth/signin", signinHandler);
}
