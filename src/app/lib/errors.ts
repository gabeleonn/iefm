export interface ApiError {
  name: string;
  message: string;
  status: number;
}

export class ApiError extends Error {
  constructor(message: string, name: string, status: number) {
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

export const BadRequest = ApiError.bind(null, "Bad Request", "BadRequest", 400);
export const Unauthorized = ApiError.bind(
  null,
  "Unauthorized",
  "Unauthorized",
  401,
);
export const Forbidden = ApiError.bind(null, "Forbidden", "Forbidden", 403);
export const NotFound = ApiError.bind(null, "Not Found", "NotFound", 404);
export const MethodNotAllowed = ApiError.bind(
  null,
  "Method Not Allowed",
  "MethodNotAllowed",
  405,
);
export const InternalServerError = ApiError.bind(
  null,
  "Internal Server Error",
  "InternalServerError",
  500,
);
