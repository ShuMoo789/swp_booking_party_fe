import { Box } from "@mui/material";
// import { useSelector } from "react-redux";

import HomePageBody1 from "./HomePageBody1";
import HomePageBody2 from "./HomePageBody2";
import Navigation from "../../component/Navigate/Navigation";
import Footer from "../../component/Navigate/Footer";

export default function HomeMain() {
  //   const accessToken = useSelector((state) => state.user);
  //   console.log("accessToken:", accessToken);
  return (
    <Box className="main-container">
      <main>
        <Navigation />
        <HomePageBody1 />
        <HomePageBody2 />
        <Footer />
      </main>
    </Box>
  );
}
