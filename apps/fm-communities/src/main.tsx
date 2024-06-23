import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/index.css'
import { Application } from './application'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
  </React.StrictMode>,
)
