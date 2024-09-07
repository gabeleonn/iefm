import { Divider } from "@nextui-org/react";
import { Navigation } from "./navigation";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <Navigation>
      <section className="w-full m-8 bg-gray-100 h-[calc(100vh-64px)] p-8 rounded-md mb-[112px] md:mb-8">
        <h1 className="font-medium text-2xl">{title}</h1>
        <Divider className="my-4" />
        {children}
      </section>
    </Navigation>
  );
}
