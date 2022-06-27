import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@layouts/Layout";
import { publicRoutes } from ".";
import { IRouteObjectItems } from "@router/AppRoutes.props";

const AppRoutes = () => {
  let location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Navigate to="home" state={{ from: location }} replace />}
        />
        {publicRoutes.map(
          (item: IRouteObjectItems): JSX.Element => (
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
        element={
          <Navigate to="home" state={{ from: location }} replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
