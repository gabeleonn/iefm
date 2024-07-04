"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export function SampleComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
