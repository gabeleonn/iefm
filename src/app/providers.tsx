"use client";
import { AuthProvider } from "@/auth/auth";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider locale="pt-BR" navigate={router.push}>
        <main className="min-h-screen h-full max-w-screen w-screen">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
