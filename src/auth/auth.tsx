"use client";
import { useMemo } from "react";
import { SessionProvider } from "next-auth/react";
import { useIsFetching } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

import { useUserQuery } from "@/hooks/use-user-query";
import Loading from "@/app/loading";

interface AuthProviderProps {
  publicRoutes: string[];
  children: React.ReactNode;
}

function Provider({ publicRoutes, children }: AuthProviderProps) {
  const isLoading = useIsFetching();
  const { status, isAuthenticated } = useUserQuery();
  const pathname = usePathname();
  const router = useRouter();

  const isPublicRoute = useMemo(
    () => publicRoutes.includes(pathname),
    [pathname, publicRoutes],
  );

  if (isLoading && status !== "success") {
    return <Loading />;
  }

  if (!isAuthenticated && !isPublicRoute) {
    router.push("/signin");
    return <Loading />;
  }

  return <>{children}</>;
}

function withSessionProvider(Component: React.ComponentType<any>) {
  return function WithSessionProvider(props: AuthProviderProps) {
    return (
      <SessionProvider>
        <Component {...props} />
      </SessionProvider>
    );
  };
}

export const AuthProvider = withSessionProvider(Provider);
