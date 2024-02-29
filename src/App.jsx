import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeMain from "./pages/homePage/HomePage";
import { Layout } from "./component/Layout";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import { Profile } from "./pages/profile";
import { ServiceList } from "./pages/serviceList";
import PickSpot from "./pages/pickSpot/pickSpot";
import Feedback from "./pages/feedback/feedback";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeMain />,
        },
        {
          path: "pickSpot",
          element: <PickSpot />,
        },
        {
          path: "feedback",
          element: <Feedback />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "servicelist",
          element: <ServiceList />,
        },
      ],
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "resetpassword",
      element: <ForgotPassword />,
    },
    {
      path: "register",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
