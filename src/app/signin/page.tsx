"use client";
import NextImage from "next/image";
import { Button, Image } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserQuery } from "@/hooks/use-user-query";
import { isObjectEmpty } from "@/helpers";
import { Brand } from "@/components/brand";

export default function SignIn() {
  const { user, isAuthenticated, isLoading } = useUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (!isObjectEmpty(user) && isAuthenticated) {
      router.push("/");
    } else if (isAuthenticated && isObjectEmpty(user)) {
      router.push("/signup");
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col lg:items-center lg:justify-center">
      <section className="absolute bottom-0 w-full h-[50vh] bg-gray-50 rounded-t-[32px] p-4 lg:relative lg:w-[30vw] lg:rounded-b-[32px] lg:h-fit lg:p-8">
        <Brand />
        <h2 className="font-bold text-3xl text-center mt-[30%] lg:mt-10">
          Seja bem vindo!
        </h2>
        <Button
          isLoading={isLoading}
          className="w-full mt-8"
          color="primary"
          size="lg"
          startContent={
            !isLoading ? (
              <Image
                as={NextImage}
                className="text-blue-600 p-[3px] bg-gray-200"
                src="/google.svg"
                alt="Google Icon"
                width={24}
                height={24}
              />
            ) : null
          }
          onClick={() => signIn("google", { callbackUrl: "/signup" })}
        >
          Entrar com Google
        </Button>
      </section>
    </div>
  );
}
