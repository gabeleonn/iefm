import { ReactNode } from "react";

export function Heading({
  children,
  theme = "text",
}: {
  children: ReactNode;
  theme?: "text" | "secondary";
}) {
  return <h2 className={`text-sm text-${theme} mb-4`}>{children}</h2>;
}
