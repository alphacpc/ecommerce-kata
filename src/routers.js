import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Panier from "./pages/Panier";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  { 
    path : "/",
    element : <Layout />,
    errorElement : <Error/>,
    children : [
      { path : "", element : <Home/> },
      { path : "/panier", element : <Panier/> },
      { path : "/detail/:id", element : <Detail/> },
      { path : "/commande", element : <Checkout/> },
    ]
  },
]);