import { Application } from "express";
import { signinHandler, singupHandler } from "./user.controller";

export function setupUsersController(app: Application) {
  app.use("/api/v1/auth/signup", singupHandler);
  app.use("/api/v1/auth/signin", signinHandler);
}
