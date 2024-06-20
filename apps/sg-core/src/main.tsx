import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";

import RouteError from "./components/error";
import { Home } from "./pages/home";
import { SmallGroups } from "./pages/small-groups";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    path: "/celulas",
    element: <SmallGroups />,
  },
  {
    path: "/perfil",
    element: <Profile />,
  },
  {
    path: "/ajustes",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
