"use client";
import NextImage from "next/image";
import { Button, Image } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserQuery } from "@/hooks/use-user-query";
import { isObjectEmpty } from "@/helpers";

export default function SignIn() {
  const { user, isAuthenticated, isLoading  } = useUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (!isObjectEmpty(user) && isAuthenticated) {
      router.push("/");
    } else if (isAuthenticated && isObjectEmpty(user)) {
      router.push("/signup");
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="relative w-full h-full min-h-screen bg-[url('./assets/bg.jpg')] bg-center bg-cover flex flex-col md:items-center md:justify-center">
      <section className="absolute bottom-0 w-full h-[50vh] bg-gray-50 rounded-t-[32px] p-4 md:relative md:w-[30vw] md:rounded-b-[32px] md:h-fit md:p-8">
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
        <h2 className="font-bold text-3xl text-center mt-[30%] md:mt-10">
          Seja bem vindo!
        </h2>
        <Button
          isLoading={isLoading}
          className="w-full bg-gray-200 mt-8"
          size="lg"
          startContent={
            !isLoading ? (
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
          onClick={() => signIn("google", { callbackUrl: "/signup" })}
        >
          Entrar com Google
        </Button>
      </section>
    </div>
  );
}
