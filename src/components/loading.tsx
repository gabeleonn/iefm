import { Spinner } from "@nextui-org/react";

export function Loading() {
  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center">
      <Spinner />
    </div>
  );
}
