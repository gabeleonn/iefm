"use client";
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { data: session } = useSession();

  return (
    <div>
      Signed in as {session?.user?.email} <br />
    </div>
  );
}
