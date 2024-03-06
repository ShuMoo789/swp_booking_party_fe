import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
import HomePageBody1 from "./HomePageBody1";
import HomePageBody2 from "./HomePageBody2";
import HomePageBody3 from "./HomePageBody3";
import HomePageBody4 from "./HomePageBody4";

export default function HomeMain() {
  //   const accessToken = useSelector((state) => state.user);
  //   console.log("accessToken:", accessToken);
  return (
    <Box className="main-container">
      <main>
        <HomePageBody1 />
        <HomePageBody2 />
        <HomePageBody3 />
        <HomePageBody4 />
      </main>
    </Box>
  );
}
