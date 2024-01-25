import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/layout";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "",
          element: <Home />,
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
