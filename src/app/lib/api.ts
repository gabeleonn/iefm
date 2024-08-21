import { ApiError } from "./errors";

interface IResponse<T = any> {
  data?: T;
  status: number;
  error?: ApiError;
}

export type Handler = (params: {
  body: Record<string, any>;
  params: Record<string, any>;
  query: Record<string, any>;
}) => Promise<IResponse>;

export function adaptToNextRoute(handler: Handler) {
  return async (req: Request, { params }: { params: Record<string, any> }) => {
    try {
      const url = new URL(req.url);
      const response = await handler({
        body: req.body ? await req.json() : {},
        params: params ?? {},
        query: url.searchParams
          ? Object.fromEntries(url.searchParams.entries())
          : {},
      });

      return Response.json(response, { status: response.status });
    } catch (error: any) {
      if (error instanceof ApiError) {
        return Response.json({ error, status: error.status });
      }

      const err = new ApiError(error.message, error.name, 500);
      return Response.json(
        { error: err, status: err.status },
        { status: err.status },
      );
    }
  };
}
