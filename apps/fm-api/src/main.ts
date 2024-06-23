import type { Application } from "express";

export function start(app: Application) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}
