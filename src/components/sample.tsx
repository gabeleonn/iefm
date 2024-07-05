"use client";
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          Signed in as {session.user.email} <br />
          <Button color="primary" onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          Not signed in <br />
          <Button color="primary" onClick={() => signIn()}>Sign in</Button>
        </>
      )}
    </div>
  );
}
