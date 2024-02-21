import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeMain from "./pages/homePage/HomePage";
import Search from "./pages/search/Search";
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import { Layout } from "./component/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "Search",
      element: <Search/>,
    },
    {
      path: "",
      element: <HomeMain/>,
      children: [
        {
          path: "search",
          element: <Search/>,
        }
      ]
    },
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