"use client";
import NextImage from "next/image";
import { Button, Image } from "@nextui-org/react";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div
      className={`relative w-full h-full min-h-screen bg-[url('./assets/bg.jpg')] bg-center bg-cover pt-[50vh] flex flex-col`}
    >
      <section className="w-full h-[50vh] bg-gray-50 rounded-t-[32px] p-4">
        <div className="flex justify-center items-center">
          <Image
            as={NextImage}
            src="/brand-red.svg"
            alt="Brand"
            width={40}
            height={40}
            removeWrapper
          />
          <h3 className="font-bold mt-4">Família Missionária</h3>
        </div>
        <h2 className="font-bold text-3xl text-center mt-[30%]">
          Seja bem vindo!
        </h2>
        <Button
          isLoading={status === "loading"}
          className="w-full bg-gray-200 mt-8"
          size="lg"
          startContent={
            status !== "loading" ? (
              <Image
                as={NextImage}
                className="text-blue-600"
                src="/google.svg"
                alt="Google Icon"
                width={20}
                height={20}
              />
            ) : null
          }
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Entrar com Google
        </Button>
      </section>
    </div>
  );
}
