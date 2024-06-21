import React from "react";
import ReactDOM from "react-dom/client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

import "./globals.css";
import { Application } from "./application";

const theme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "text-white bg-red-600 hover:bg-red-700",
      secondary: "text-gray-500 bg-gray-50 border hover:bg-gray-100",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme }}>
      <Application />
    </Flowbite>
  </React.StrictMode>,
);
