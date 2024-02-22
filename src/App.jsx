import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeMain from "./pages/homePage/HomePage";
import { Layout } from "./component/Layout";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import PackageList from "./pages/packagelist/packagelist";
import PartyHostList from "./pages/partyhostlist/partyhostlist";
import PartyHostList from "./pages/partyhostlist/partyhostlist";
import PackageList from "./pages/packagelist/packagelist";

function App() {
  const router = createBrowserRouter([
    {
      path: "partyhostlist",
      element: <PartyHostList />,
    },
    
    {
      path: "packagelist",
      element: <PackageList />,
    },

    {
      path: "",
      element: <HomeMain />,
      children: [
        {
          path: "partyhostlist",
          element: <PartyHostList />,
        },

        {
          path: "packagelist",
          element: <PackageList />,
        },

      ],
    },

    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeMain />,
        },

        {
          path: "partyhostlist",
          element: <PartyHostList />,
        },
        {
          path: "packagelist",
          element: <PackageList />,
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
