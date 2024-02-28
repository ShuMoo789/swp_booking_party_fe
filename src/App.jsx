import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeMain from "./pages/homePage/HomePage";
import { Layout } from "./component/Layout";
import PartyHostList from "./pages/partyhostlist/partyhostlist";
import PackageList from "./pages/packagelist/packagelist";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

import PickDate from "./pages/pickDate/pickDate";
import { Profile } from "./pages/profile";
import { ServiceList } from "./pages/serviceList";
import PickSlot from "./pages/pickSlot/pickSlot";

import OrderCart from "./pages/orderCart";

import { useDispatch, useSelector } from "react-redux";
import Password from "antd/es/input/Password";
import axios from "axios";
import { login, logout } from "./redux/features/authenSlice";
import Dashboard from "./component/dashboard";
import { Statistic } from "./pages/statistic";

import FaqsMain from "./pages/faqs/FaqsMain";
import { Search } from "./pages/search";


function App() {
  const router = createBrowserRouter([
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
        {
          path: "pickDate",
          element: <PickDate />,
        },
        {
          path: "orderCart",
          element: <OrderCart />,
        },
        {
          path: "pickSlot",
          element: <PickSlot />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "partyhostlist",
          element: <PartyHostList />,
        },
        {
          path: "packagelist",
          element: <PackageList />,
        },
        {
          path: "servicelist",
          element: <ServiceList />,
        },
        {
          path: "faqs",
          element: <FaqsMain />,
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
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "statistics",
          element: <Statistic />,
        },
      ],
    },
  ]);

  // lấy giá trị trên store => useSelector

  // const dispatch = useDispatch();
  //tương tác với giá trị trên store => dispatch action
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;