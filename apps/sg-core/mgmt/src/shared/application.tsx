"use client";

import { ReactNode, useSyncExternalStore } from "react";
import { Navigation } from "./navigation";

export function Application({ children }: { children: ReactNode }) {
  const loaded = useSyncExternalStore(
    () => () => true,
    () => true,
    () => false,
  );

  if (!loaded) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="h-screen w-screen flex justify-center items-center">
        {children}
      </main>
    </>
  );
}