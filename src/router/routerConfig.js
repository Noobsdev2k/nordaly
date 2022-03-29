import { lazy } from "react";
import { Navigate } from "react-router-dom";

const PATH_NAMES = {
  ROOT: "/",
  HOME: "/home",
  LOGIN: "/login",
  SHOP: "/shop",
  DETAIL: "/shop/:name/:id",
  BLOG: "/blog",
  CART: "/cart",
};

// modules
const Home = lazy(() => import("../features/Home"));
const Login = lazy(() => import("../features/Login"));
const Shop = lazy(() => import("../features/Shop"));
const Detail = lazy(() => import("../features/Detail"));
const Blog = lazy(() => import("../features/Blog"));
const Notfound = lazy(() => import("../components/Notfound"));
const Cart = lazy(() => import("../components/Cart"));

const routesConfig = [
  {
    path: PATH_NAMES.ROOT,
    element: <Navigate to={PATH_NAMES.HOME} replace />,
  },
  {
    path: PATH_NAMES.HOME,
    element: <Home />,
  },

  {
    path: PATH_NAMES.SHOP,
    element: <Shop />,
  },
  {
    path: PATH_NAMES.DETAIL,
    element: <Detail />,
  },
  {
    path: PATH_NAMES.BLOG,
    element: <Blog />,
  },
  {
    path: PATH_NAMES.LOGIN,
    element: <Login />,
  },
  {
    path: PATH_NAMES.CART,
    element: <Cart />,
  },
  {
    element: <Notfound />,
  },
];

export default routesConfig;
