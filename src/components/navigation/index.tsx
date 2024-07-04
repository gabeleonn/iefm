// import { NavLink as Link } from "react-router-dom";
// import { UsersIcon } from "@/components/icons/users";
// import { HomeIcon } from "@/components/icons/home";
// import { CogIcon } from "@/components/icons/cog";
// import { UserIcon } from "@/components/icons/user";

// function NavLink({
//   to,
//   children,
// }: {
//   readonly to: string;
//   readonly children: React.ReactNode;
// }) {
//   function handleClassName({ isActive }: { isActive: boolean }) {
//     const baseClassName = "flex flex-col gap-[6px] items-center";
//     return isActive
//       ? `${baseClassName} text-zinc-50`
//       : `${baseClassName} text-zinc-500`;
//   }
//   return (
//     <Link className={handleClassName} to={to}>
//       {children}
//     </Link>
//   );
// }

// export function Navigation() {
//   return (
//     <nav className="fixed bottom-0 left-0 flex h-[64px] w-full items-center justify-around bg-zinc-800 lg:top-0 lg:h-full lg:w-[64px] lg:flex-col lg:justify-center lg:gap-8 lg:pt-8">
//       <NavLink to="/">
//         <HomeIcon className="size-6" />
//         <span className="text-xs font-bold">Início</span>
//       </NavLink>
//       <NavLink to="/celulas">
//         <UsersIcon className="size-6" />
//         <span className="text-xs font-bold">Células</span>
//       </NavLink>
//       <NavLink to="/perfil">
//         <UserIcon className="size-6" />
//         <span className="text-xs font-bold">Perfil</span>
//       </NavLink>
//       <NavLink to="/configuracoes">
//         <CogIcon className="size-6" />
//         <span className="text-xs font-bold">Ajustes</span>
//       </NavLink>
//     </nav>
//   );
// }
