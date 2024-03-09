import { Box, IconButton } from "@mui/material";
// import { useSelector } from "react-redux";

import HomePageBody1 from "./HomePageBody1";
import HomePageBody2 from "./HomePageBody2";
import HomePageBody3 from "./HomePageBody3";
import HomePageBody4 from "./HomePageBody4";
import HomePageBody5 from "./HomePageBody5";
import { useEffect, useState } from "react";

export default function HomeMain() {
  //   const accessToken = useSelector((state) => state.user);
  //   console.log("accessToken:", accessToken);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = pageHeight / 15;
      setShowBackToTop(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className="main-container">
      <main style={{ backgroundColor: "#c7eef2" }}>
        <HomePageBody1 />
        <HomePageBody5 />
        <HomePageBody2 />
        <HomePageBody3 />
        <HomePageBody4 />

        {/* Back to Top Button */}
        <div
          style={{
            opacity: showBackToTop ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            position: "fixed",
            bottom: 20,
            right: 20,
            width: "60px", // Độ rộng của nút
            height: "60px", // Chiều cao của nút
          }}
        >
          <IconButton
            onClick={scrollToTop}
            style={{
              backgroundColor: "#ffcc00",
              color: "#fff",
              width: "100%", // Độ rộng của biểu tượng
              height: "100%", // Chiều cao của biểu tượng
            }}
          >
            {/* <KeyboardArrowUpIcon /> */}
          </IconButton>
        </div>
      </main>
    </Box>
  );
}
