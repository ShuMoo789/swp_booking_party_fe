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
        <Typography sx={{ color: "" }}>
          Made by <span style={{ fontWeight: "bolder" }}>ME</span>
        </Typography>
        <Typography sx={{ color: "" }}>
          © 2024 <span style={{ fontWeight: "bolder" }}>SWP391</span>. All
          rights reserved
        </Typography>
      </Box>
      <Box className="footer-icon">
        <a href="https://www.facebook.com/phanngoc2213">
          <AiFillFacebook
            style={{ margin: "1rem", color: "black", fontSize: "25px" }}
          />
        </a>

        <a href="https://www.facebook.com/phanngoc2213">
          <AiTwotoneMail
            style={{ margin: "1rem", color: "black", fontSize: "25px" }}
          />
        </a>

        <a href="https://www.facebook.com/phanngoc2213">
          <AiFillTwitterSquare
            style={{ margin: "1rem", color: "black", fontSize: "25px" }}
          />
        </a>
      </Box>
    </div>
  );
}
