import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

import "./HomePageBody1.scss";
import images from "../../Constant/images";

export default function Home1() {
  return (
    <div className="main_container" id="#">
      <Box className="homepagebody1__right-site" sx={{ width: "500px" }}>
        <Stack spacing={4}>
          <Typography sx={{ fontSize: 45, fontWeight: "bolder" }}>
            New <span style={{ color: "#626AD1" }}>offers</span> are waiting for
            you
          </Typography>
          <Typography sx={{ fontSize: 25 }}>
            You are looking for a job with high salary and stability. A
            professional and creative working environment.
          </Typography>
          <a href="#jobs">
            <Button
              className="home1_button"
              sx={{
                backgroundColor: "#626AD1",
                color: "white",
                fontWeight: "bolder",
                width: "90px",
              }}
            >
              Let's go!
            </Button>
          </a>
        </Stack>
      </Box>

      <Box>
        <CardMedia
          className="image-homepagebody1"
          component="img"
          src={images.right_home_img}
          alt="images"
        />
      </Box>
    </div>
  );
}
