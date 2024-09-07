export interface ApiError {
  name: string;
  message: string;
  status: number;
}

export class ApiError extends Error {
  constructor(name: string, status: number, message: string) {
    super(message);
    this.name = name;
    this.status = status;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      stack: this.stack,
    };
  }
}

export const BadRequest = ApiError.bind(null, "BadRequest", 400);
export const Unauthorized = ApiError.bind(null, "Unauthorized", 401);
export const Forbidden = ApiError.bind(null, "Forbidden", 403);
export const NotFound = ApiError.bind(null, "NotFound", 404);
export const MethodNotAllowed = ApiError.bind(null, "MethodNotAllowed", 405);
export const InternalServerError = ApiError.bind(
  null,
  "InternalServerError",
  500,
  "Internal Server Error",
);
