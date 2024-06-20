import winston, { format } from "winston";

const { combine, prettyPrint, colorize, timestamp, simple } = format;

const transports = [
  // new winston.transports.File({ filename: 'error.log', level: 'error' }),
  // new winston.transports.File({ filename: 'combined.log' }),
  new winston.transports.Console(),
];

export const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({
      all: true,
    }),
    prettyPrint(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    simple(),
  ),
  defaultMeta: { service: "monolith" },
  transports,
});
