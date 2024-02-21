import { Box, Typography } from "@mui/material";
import { AiFillFacebook } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./Footer.scss";

export default function Footer() {
  return (
    <div
      id="footer123"
      style={{
        height: "150px",
        backgroundColor: "#D6DDFF",
        // marginTop: "2rem",
      }}
    >
      <Box sx={{ textAlign: "center", paddingTop: "2rem" }}>
        <Typography sx={{ color: "#9CA3AF" }}>
          Made by <span style={{ fontWeight: "bolder" }}>ME</span>
        </Typography>
        <Typography sx={{ color: "#9CA3AF" }}>
          © 2024 <span style={{ fontWeight: "bolder" }}>SWP391</span>. All
          rights reserved
        </Typography>
      </Box>
      <Box className="footer-icon">
        <AiFillFacebook
          style={{ margin: "1rem", color: "#9CA3AF", fontSize: "25px" }}
        />

        <AiTwotoneMail
          style={{ margin: "1rem", color: "#9CA3AF", fontSize: "25px" }}
        />

        <AiFillTwitterSquare
          style={{ margin: "1rem", color: "#9CA3AF", fontSize: "25px" }}
        />
      </Box>
    </div>
  );
}
