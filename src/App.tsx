import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'sonner'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './App.css'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" defaultTitle="pizza.shop" />
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}

export default App
