import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "sonner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";


function App() {
  
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" defaultTitle="pizza.shop" />
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>        
      </HelmetProvider>
      
    </>
  );
}

export default App;
