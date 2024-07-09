"use client";
import { Spinner } from "@nextui-org/react";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

function Provider({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const publicRoutes = useMemo(
    () => [
      "/signin",
      "/signup",
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

  if (status === "unauthenticated" && !isPublicRoute) {
    router.push("/signin");
    return null;
  }

  if (status === "authenticated" || isPublicRoute) return <>{children}</>;

  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center">
      <Spinner />
    </div>
  );
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
