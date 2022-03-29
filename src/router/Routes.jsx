import React, { Suspense } from "react";
import { Routes as Router, Route } from "react-router-dom";
import routesConfig from "./routerConfig";
export default function Routes() {
  return (
    <Suspense fallback={<div>Loading ... 🍔🍔🍔</div>}>
      <Router>
        {routesConfig.map(({ path, element }, index) => (
          <Route key={`route-${index}`} path={path} element={element} />
        ))}
      </Router>
    </Suspense>
  );
}
