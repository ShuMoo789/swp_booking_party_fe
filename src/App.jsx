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

import OrderCart from "./pages/orderCart";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import Password from "antd/es/input/Password";
import axios from "axios";
import { login, logout } from "./redux/features/authenSlice";
import Dashboard from "./component/dashboard";
import { Statistic } from "./pages/statistic";

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
  const counter = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  //tương tác với giá trị trên store => dispatch action

  const loginHandler = async () => {
    const response = await axios.post("http://4rent.tech:8081/login", {
      username: "string",
      password: "string",
    });
    dispatch(login(response.data));
  };
  const logoutHandler = async () => {
    dispatch(logout());
  };

  return (
    // <>
    //   <RouterProvider router={router} />
    // </>
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
