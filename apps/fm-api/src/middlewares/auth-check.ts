import { Request, Response, NextFunction } from "express";
export function authCheck(req: Request, res: Response, next: NextFunction) {
  next();
}
