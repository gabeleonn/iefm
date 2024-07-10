"use client";
import { useUserQuery } from "@/hooks/use-user-query";
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { data: session } = useSession();
  const { data } = useUserQuery();

  return (
    <div>
      <pre>{JSON.stringify(data ?? {}, null, 2)}</pre>
      <br />
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
