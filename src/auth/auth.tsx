"use client";
import { useMemo } from "react";
import { SessionProvider } from "next-auth/react";
import { useIsFetching } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

import { useUserQuery } from "@/hooks/use-user-query";
import Loading from "@/app/loading";

function Provider({ children }: { children: React.ReactNode }) {
  const isLoading = useIsFetching();
  const { status, isAuthenticated } = useUserQuery();
  const pathname = usePathname();
  const router = useRouter();

  const publicRoutes = useMemo(
    () => [
      "/signin",
      "/termos-de-uso",
      "/politica-de-privacidade",
      "/celulas/buscar",
    ],
    [],
  );

  const isPublicRoute = useMemo(
    () => publicRoutes.includes(pathname),
    [pathname, publicRoutes],
  );

  if (isLoading && status !== 'success') {
    return <Loading />;
  }

  if (!isAuthenticated && !isPublicRoute) {
    router.push("/signin");
    return <Loading />;
  }

  return <>{children}</>;
}

function withSessionProvider(Component: React.ComponentType<any>) {
  return function WithSessionProvider(props: any) {
    return (
      <SessionProvider>
        <Component {...props} />
      </SessionProvider>
    );
  };
}

export const AuthProvider = withSessionProvider(Provider);
