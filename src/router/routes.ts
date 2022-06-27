import { IRouteObjectItem } from "@router/AppRoutes.props";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Random from "../pages/Random";



export const publicRoutes: IRouteObjectItem[] = [
    { title: "Home", path: "/", element: Home },
    { title: "Categories", path: "categories", element: Categories },
    { title: "Random", path: "random", element: Random }
  ];