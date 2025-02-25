import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { SuperSEO } from "react-super-seo";


import "./App.css";
function App() {
  return (
    <>
      <SuperSEO title="Pizza-shop | Home" description="Hi!" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
