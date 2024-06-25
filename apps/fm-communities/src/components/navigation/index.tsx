import { NavLink as Link } from "react-router-dom"
import { UsersIcon } from "@/components/icons/users"
import { HomeIcon } from "@/components/icons/home"
import { CogIcon } from "@/components/icons/cog"
import { UserIcon } from "@/components/icons/user"

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  function handleClassName({ isActive }: { isActive: boolean }) {
    const baseClassName = "flex flex-col gap-[6px] items-center"
    return isActive ? `${baseClassName} text-zinc-50` : `${baseClassName} text-zinc-500`
  }
  return (
    <Link to={to} className={handleClassName}>
      {children}
    </Link>
  )
}

export function Navigation() {
  return (
    <nav className="bottom-0 left-0 fixed w-full flex h-[64px] items-center justify-around bg-zinc-800">
      <NavLink to="/">
        <HomeIcon className="w-6 h-6" />
        <span className="font-bold text-xs">Início</span>
      </NavLink>
      <NavLink to="/celulas">
        <UsersIcon className="w-6 h-6" />
        <span className="font-bold text-xs">Células</span>
      </NavLink>
      <NavLink to="/perfil">
        <UserIcon className="w-6 h-6" />
        <span className="font-bold text-xs">Perfil</span>
      </NavLink>
      <NavLink to="/configuracoes">
        <CogIcon className="w-6 h-6" />
        <span className="font-bold text-xs">Ajustes</span>
      </NavLink>
    </nav>
  )
}
