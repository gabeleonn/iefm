"use client";
import { useUserQuery } from "@/hooks/use-user-query";
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { user } = useUserQuery();

  return (
    <div>
      <pre>{JSON.stringify(user ?? {}, null, 2)}</pre>
      <br />
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
