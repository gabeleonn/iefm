import { Spacer } from "@nextui-org/react";
import { Brand } from "../brand";
import { NavigationItem } from "./item";
import { HomeIcon } from "../icons/home";
import { SearchIcon } from "../icons/search";
import { UserGroupsIcon } from "../icons/user-groups";
import UserProfile from "../user-profile";

export function DesktopNavigation() {
  return (
    <nav className="hidden md:flex justify-start flex-col w-[20%] min-w-[250px] gap-2 bg-gray-100 py-[60px] px-8">
      <Brand />
      <Spacer y={20} />
      <NavigationItem href="/" startContent={<HomeIcon />}>
        Início
      </NavigationItem>
      <NavigationItem href="/celulas" startContent={<UserGroupsIcon />}>
        Minhas Células
      </NavigationItem>
      <NavigationItem href="/celulas/buscar" startContent={<SearchIcon />}>
        Buscar Células
      </NavigationItem>
      <UserProfile className="mt-auto" />
    </nav>
  );
}
