import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@layouts/LayoutWithHeaderAndFooter";
import { IRouteObjectItem } from "@router/AppRoutes.props";
import { publicRoutes } from "@router/routes";

const AppRoutes = (): JSX.Element => {
  let location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map(
          (item: IRouteObjectItem): JSX.Element => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          )
        )}
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" state={{ from: location }} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
