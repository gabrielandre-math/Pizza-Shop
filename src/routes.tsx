import { createBrowserRouter } from 'react-router-dom'
import { SignUp } from './pages/auth/sign-up'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Orders } from './pages/app/orders/orders'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { NotFound } from './pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Dashboard /> },
      { index: true, path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
