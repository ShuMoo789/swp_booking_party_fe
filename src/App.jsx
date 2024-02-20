import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeMain from "./pages/homePage/HomePage";

import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import { Layout } from "./component/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <SignUp />,
        },
        {
          // path: "",
          // element: < />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
