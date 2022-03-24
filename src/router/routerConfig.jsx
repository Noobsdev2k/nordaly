import { Navigate } from "react-router-dom";
import Home from "../features/Home";
import Shop from "../features/Shop";
import Detail from "../features/Detail";
import Notfound from "../components/Notfound";
import Blog from "../features/Blog"
import Login from "../features/Login";
import Cart from "../components/Cart"


export const PATH_NAMES = {
    ROOT: "/",
    HOME: "/home",
    LOGIN: "/login",
    SHOP: "/shop",
    DETAIL: "/shop/:name/:id",
    BLOG: "/blog",
    CART: "/cart",
  };

const routesConfig = [
  {
    path: PATH_NAMES.ROOT,
    element:<Navigate  to={PATH_NAMES.HOME} replace/>,
  },
  {
    path: PATH_NAMES.HOME,
    element: <Home/>,
  },

  {
    path: PATH_NAMES.SHOP,
    element: <Shop/>,
  },
  {

    path: PATH_NAMES.DETAIL,
    element: <Detail/>,
  },
  {
 
    path: PATH_NAMES.BLOG,
    element: <Blog/>,
  },
  {
    path: PATH_NAMES.LOGIN,
    element: <Login />,
  },
  {
    path: PATH_NAMES.CART,
    element: <Cart/>,
  },
  {
    element: <Notfound/> ,
  },
];

export default routesConfig;
