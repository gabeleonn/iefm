"use client";
import {
  UserGroupIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "./nav-link";

export function Navigation() {
  return (
    <nav className="fixed bottom-4 left-4 bg-text rounded-xl h-[72px] w-[calc(100%-32px)] flex flex-row shadow-2xl p-2">
      <NavLink icon={HomeIcon} text="Inicio" href="/" />
      <NavLink icon={UserGroupIcon} text="Celulas" href="/celulas" />
      <NavLink icon={UserIcon} text="Perfil" href="/perfil" />
      <NavLink
        icon={AdjustmentsHorizontalIcon}
        text="Ajustes"
        href="/ajustes"
      />
    </nav>
  );
}
