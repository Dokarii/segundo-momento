import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { enrutador } from './Router/Enrutador'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(enrutador)} />
  </StrictMode>,
)
