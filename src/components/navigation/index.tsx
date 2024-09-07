"use client";
import { MobileNavigation } from "./mobile";
import { DesktopNavigation } from "./desktop";

export function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative">
      <DesktopNavigation />
      {children}
      <MobileNavigation />
    </div>
  );
}
