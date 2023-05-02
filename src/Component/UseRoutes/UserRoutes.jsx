import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./PrivateRoutes";

const AuthPage = lazy(() => import("../../Pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const Statistics = lazy(() =>
  import("../../Pages/StatisticsPage/StatisticsPage")
);
const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<h3>Loading page...</h3>}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
