import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeMain from "./pages/homePage/HomePage";
import { Layout } from "./component/layout";
import PartyHostList from "./pages/partyhostlist/partyhostlist";
import PackageList from "./pages/packagelist/packagelist";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";

import PickDate from "./pages/pickDate/pickDate";
import { Profile } from "./pages/profile";
import { ServiceList } from "./pages/serviceList";
import PickSpot from "./pages/pickSpot/pickSpot";
import Feedback from "./pages/feedback/feedback";
import PaymentHistory from "./pages/paymenthistory";
import OrderCart from "./pages/orderCart";

import { useDispatch, useSelector } from "react-redux";
import Password from "antd/es/input/Password";
import axios from "axios";
import { login, logout } from "./redux/features/authenSlice";
import Dashboard from "./component/dashboard";
import { Statistic } from "./pages/statistic";

import FaqsMain from "./pages/faqs/FaqsMain";
import { Search } from "./pages/search";
import { ManagePackage } from "./pages/manage-package";
import { ManageOrder } from "./pages/manage-order";
import Wallet from "./pages/wallet";
import Packageregisterlist from "./pages/package-register-list/packageregister";
import { ManageSchedule } from "./pages/manage-schedule";

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
          path: "pickdate",
          element: <PickDate />,
        },
        {
          path: "orderCart",
          element: <OrderCart />,
        },
        {
          path: "pickSpot",
          element: <PickSpot />,
        },
        {
          path: "paymenthistory",
          element: <PaymentHistory />,
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
        {
          path: "wallet",
          element: <Wallet />,
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
        {
          path: "order",
          element: <ManageOrder />,
        },
        {
          path: "package",
          element: <ManagePackage />,
        },
        {
          path: "schedule",
          element: <ManageSchedule />,
        },
        // {
        //   path: "wallet",
        //   element: <Wallet />,
        // },
        // {
        //   path: "feedback",
        //   element: <Feedback />,
        // },
        {
          path: "packageregisterlist",
          element: <Packageregisterlist />,
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
