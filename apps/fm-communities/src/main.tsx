import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/index.css'
import { Button } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex h-screen w-screen justify-center items-center'>
      <Button color="blue">Hello</Button>
    </div>
  </React.StrictMode>,
)
