"use client";
import { useUserQuery } from "@/hooks/use-user-query";
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { data: session } = useSession();
  const { data } = useUserQuery();

  return (
    <div>
      Signed in as {JSON.stringify(session, null, 2)} <br />
      {JSON.stringify(data ?? {})}
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
