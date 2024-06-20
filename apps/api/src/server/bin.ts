import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { createServer } from "http";
import { logger as loggerMiddleware } from "express-winston";

import { start } from "@app/main";
import { logger } from "@app/server/logger";

const app = express();

app.use(
  loggerMiddleware({
    winstonInstance: logger,
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  }),
);

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

start(app);

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  logger.error(err);
  res.status(500).send("Something broke!");
});

const port = process.env.PORT || 3000;

createServer(app).listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
