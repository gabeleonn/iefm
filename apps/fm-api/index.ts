import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { logger as loggerMiddleware } from "express-winston";

import { start } from "@app/bin/start.js";
import { logger } from "@app/bin/logger.js";

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

const port = process.env.PORT || 3000;

createServer(app).listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
