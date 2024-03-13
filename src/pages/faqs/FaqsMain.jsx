import { Box, Typography, IconButton } from "@mui/material";
import ContentPage1 from "./ContentPage1";
import ContentPage2 from "./ContentPage2";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";
import ScrollToTopOnMount from "../../component/Navigate/BackToTop";

function FaqsMain() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = pageHeight / 10;
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
      <ScrollToTopOnMount />
      <main style={{ backgroundColor: "#fae6fa" }}>
        <div>
          <Typography
            style={{
              fontSize: "60px",
              textAlign: "center",
              fontWeight: "bolder",
              color: "gold",
              paddingBottom: "20px",
              paddingTop: "20px",
              marginTop: "65px",
            }}
          >
            PLAN YOUR VISIT
          </Typography>
        </div>
        <ContentPage2 />
        <ContentPage1 />
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
            <KeyboardArrowUpIcon />
          </IconButton>
        </div>
      </main>
    </Box>
  );
}

export default FaqsMain;
