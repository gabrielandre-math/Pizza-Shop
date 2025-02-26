import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "sonner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";


function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
      
    </>
  );
}

export default App;
