"use client";
import { AuthProvider } from "@/auth/auth";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <main className="min-h-screen h-full max-w-screen w-screen">
        <AuthProvider>{children}</AuthProvider>
      </main>
    </NextUIProvider>
  );
}
