import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export function Brand() {
  return (
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
  );
}
