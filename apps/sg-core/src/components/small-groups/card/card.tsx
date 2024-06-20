import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col p-3 w-[calc(100vw-40px)] bg-background text-text rounded-[20px]">
      {children}
    </div>
  );
}
