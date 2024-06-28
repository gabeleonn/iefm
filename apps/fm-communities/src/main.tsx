import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "@/index.css"
import { Application } from "./application"
import { Flowbite, CustomFlowbiteTheme } from "flowbite-react"

const theme: CustomFlowbiteTheme = {}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>,
)
