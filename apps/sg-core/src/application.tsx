import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteError from "./components/error";
import { Home } from "./pages/home";
import { SmallGroups } from "./pages/small-groups";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";
import { SmallGroup } from "./pages/small-group";
import { Navigation } from "./components/navigation";

export function Application() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celulas" element={<SmallGroups />} />
        <Route path="/celulas/:id" element={<SmallGroup />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/ajustes" element={<Settings />} />
        <Route path="*" element={<RouteError />} />
      </Routes>
    </BrowserRouter>
  );
}
