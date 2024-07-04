import { singupHandler } from "./user.controller";

export function setupUsersController(app: any) {
  app.post("/api/v1/auth/signup", singupHandler);
}
