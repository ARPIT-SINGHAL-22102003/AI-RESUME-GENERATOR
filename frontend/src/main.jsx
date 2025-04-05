import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import SigninPage from './auth/sign-in'
import { Home } from 'lucide-react'


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <div>Dashboard</div>
      }
    ]
  },
  {
    path: '/auth/signin',
    element:<SigninPage />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
