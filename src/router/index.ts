import { IRouteObjectItems } from "@router/AppRoutes.props";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Random from "../pages/Random";




export const publicRoutes: IRouteObjectItems[] = [
    { path: "home", element: Home },
    { path: "categories", element: Categories },
    { path: "random", element: Random }
  ];