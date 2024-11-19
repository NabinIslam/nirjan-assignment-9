import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StartLearning from "../pages/StartLearning";
import AboutUs from "../pages/AboutUs";
import Tutorials from "../pages/Tutorials";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/start-learning",
        element: (
          <PrivateRoute>
            <StartLearning />,
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
