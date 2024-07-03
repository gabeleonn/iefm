import type { Application, Request, Response, NextFunction } from "express";
import { setupUsersController } from "./domains";

export function start(app: Application) {
  setupUsersController(app);

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({
      ...err,
    });
  });
}
