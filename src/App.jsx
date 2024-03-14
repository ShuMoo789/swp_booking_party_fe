import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeMain from "./pages/homePage/HomePage";
import { Layout } from "./component/layout";
import PartyHostList from "./pages/partyhostlist/partyhostlist";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import { Profile } from "./pages/profile";
import Feedback from "./pages/feedback/feedback";

import ServiceUploadDashboard from "./pages/serviceUploadDashboard";
import AdminDashboard from "./pages/admindashboard";

import { useDispatch, useSelector } from "react-redux";
import Password from "antd/es/input/Password";
import axios from "axios";
import { login, logout } from "./redux/features/authenSlice";
import Dashboard from "./component/dashboard";
import { Statistic } from "./pages/statistic";

import FaqsMain from "./pages/faqs/FaqsMain";
import { ManagePackage } from "./pages/manage-package";
import { ManageOrder } from "./pages/manage-order";
import Wallet from "./pages/walletCustomer";
import WalletPH from "./pages/walletPH";
import Packageregisterlist from "./pages/package-register-list/packageregister";
import { ManageSchedule } from "./pages/manage-schedule";

import FeedbackList from "./pages/feedbackList/FeedbackList";
import ManageService from "./pages/manage-service";
import { BookingPage } from "./pages/booking";
import SuccessPage from "./pages/checkout";
import BasicTable from "./pages/paymenthistory";

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
          path: "booking/:hostId",
          element: <BookingPage />,
        },
        {
          path: "partyhostlist",
          element: <PartyHostList />,
        },
        {
          path: "paymenthistory",
          element: <BasicTable />,
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
          path: "admindashboard",
          element: <AdminDashboard />,
        },
        {
          path: "serviceuploaddashboard",
          element: <ServiceUploadDashboard />,
        },
        // {
        //   path: "useraccount",
        //   element: <UserAccount />,
        // },
        {
          path: "partyhostlist",
          element: <PartyHostList />,
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
      path: "/success",
      element: <SuccessPage />,
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
          path: "service",
          element: <ManageService />,
        },
        {
          path: "schedule",
          element: <ManageSchedule />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
        {
          path: "feedbacklist",
          element: <FeedbackList />,
        },
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
