/* eslint-disable prettier/prettier */
import { Route, Routes, useLocation } from "react-router-dom"
import { Base } from "@/layouts/base"
import { Home } from "@/pages/home"
import { SmallGroup } from "@/pages/small-groups/details"
import { MySmallGroups } from "@/pages/small-groups/mine"
import { SmallGroupsList } from "@/pages/small-groups/list"
import { CreateSmallGroup } from "@/pages/small-groups/create"
import { SmallGroupMembers } from "@/pages/small-groups/members"
import { SmallGroupGuests } from "@/pages/small-groups/guests"
import { SmallGroupConfigs } from "@/pages/small-groups/config"
import { SmallGroupReports } from "@/pages/small-groups/reports"
import { Profile } from "@/pages/profile"
import { Register } from "@/pages/register"
import { Login } from "@/pages/login"
import { NotFound } from "@/pages/404"
import { Configs } from "@/pages/configs"

export function Application() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Base />}>
        <Route index element={<Home />} />

        <Route path="celulas">
          <Route index element={<MySmallGroups />} />
          <Route path="visitar" element={<SmallGroupsList />} />
          <Route path="criar" element={<CreateSmallGroup />} />
          <Route path=":celulaId">
            <Route index element={<SmallGroup />} />
            <Route path="membros" element={<SmallGroupMembers />} />
            <Route path="visitantes" element={<SmallGroupGuests />} />
            <Route path="relatorios" element={<SmallGroupReports />} />
            <Route path="ajustes" element={<SmallGroupConfigs />} />
          </Route>
        </Route>

        <Route path="perfil" element={<Profile />} />
        <Route path="configuracoes" element={<Configs />} />
      </Route>

      <Route element={<Base publicRoute />}>
        <Route path="cadastro" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
