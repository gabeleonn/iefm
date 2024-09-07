import { ApiError } from "./errors";

type API_STATUSES =
  | 200
  | 201
  | 300
  | 400
  | 401
  | 403
  | 404
  | 500
  | 501
  | 502
  | 503
  | 504;

export type Handler<T = any> = (params: {
  body: Record<string, any>;
  params: Record<string, any>;
  query: Record<string, any>;
}) => Promise<[T, API_STATUSES]>;

export function adaptToNextRoute(handler: Handler) {
  return async (req: Request, { params }: { params: Record<string, any> }) => {
    try {
      const url = new URL(req.url);
      const [data, status] = await handler({
        body: req.body ? await req.json() : {},
        params: params ?? {},
        query: url.searchParams
          ? Object.fromEntries(url.searchParams.entries())
          : {},
      });

      return Response.json(data, { status });
    } catch (error: any) {
      if (error instanceof ApiError) {
        return Response.json({ error, status: error.status });
      }

      const err = new ApiError(error.name, 500, error.message);
      return Response.json(
        { error: err, status: err.status },
        { status: err.status },
      );
    }
  };
}
