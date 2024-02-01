import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

import "./HomePageBody2.scss";
import Carousels from "../Carousel/Carousel";

function Home2() {
  return (
    <div className="bg_homepagebody2" id="work-evironment">
      <Typography
        className="title-homepagebody2"
        sx={{
          fontSize: 38,
          fontWeight: "bolder",
          textAlign: "center",
          // pt: "5rem",
        }}
      ></Typography>
      <Box
        className="home-body"
        sx={{ pt: "2rem", ml: "auto", mr: "auto", maxWidth: 1200, flexGrow: 1 }}
      >
        <Carousels />
      </Box>
    </div>
  );
}

export default Home2;
