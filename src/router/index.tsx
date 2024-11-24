import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/home";
import PrivateRoute from "../components/protected-route";
import DashboardPage from "../pages/dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
]);
