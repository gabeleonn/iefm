import { Outlet } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Fragment } from "react/jsx-runtime"

export function Base({ publicRoute = false }: { publicRoute?: boolean }) {
  if (publicRoute) return <Outlet />

  return (
    <Fragment>
      <Outlet />
      <Navigation />
    </Fragment>
  )
}
