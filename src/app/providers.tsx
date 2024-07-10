"use client";
import { AuthProvider } from "@/auth/auth";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/navigation";
import React from "react";

const client = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider locale="pt-BR" navigate={router.push}>
        <main className="min-h-screen h-full max-w-screen w-screen">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </NextUIProvider>
      <ReactQueryDevtools />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}
