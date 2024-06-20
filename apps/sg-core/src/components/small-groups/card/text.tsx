import { ReactNode } from "react";

export function Text({
  children,
  theme = "text",
}: {
  children: ReactNode;
  theme?: "text" | "secondary";
}) {
  return <p className={`text-sm text-${theme} mb-4`}>{children}</p>;
}
