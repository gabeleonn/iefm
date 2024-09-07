"use client";
import Page from "@/components/page-layout";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function Settings() {
  return (
    <Page title="Ajustes">
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Page>
  );
}
