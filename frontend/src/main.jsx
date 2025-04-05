import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import SigninPage from './auth/sign-in'
import { Home } from 'lucide-react'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} /> 
    </ClerkProvider>
  </StrictMode>,
)
