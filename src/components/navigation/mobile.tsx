import { Button, ButtonGroup, Link } from "@nextui-org/react";
import { HomeIcon } from "../icons/home";
import { UserGroupsIcon } from "../icons/user-groups";
import { SearchIcon } from "../icons/search";
import { UserIcon } from "../icons/user";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function MobileNavigation() {
  const pathname = usePathname();

  const routes: {
    href: string;
    icon: React.ReactNode;
    isActive: boolean;
  }[] = useMemo(
    () => [
      { href: "/", icon: <HomeIcon />, isActive: pathname === "/" },
      {
        href: "/celulas",
        icon: <UserGroupsIcon />,
        isActive: pathname === "/celulas",
      },
      {
        href: "/celulas/buscar",
        icon: <SearchIcon />,
        isActive: pathname === "/celulas/buscar",
      },
      {
        href: "/ajustes",
        icon: <UserIcon />,
        isActive: pathname === "/ajustes",
      },
    ],
    [pathname],
  );

  return (
    <ButtonGroup className="md:hidden w-full fixed bottom-0 bg-gray-100">
      {routes.map(({ href, icon, isActive }) => (
        <Button
          key={href}
          className={`h-[80px] w-full bg-gray-100 ${isActive ? "text-red-500" : ""}`}
          as={Link}
          href={href}
        >
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
}
