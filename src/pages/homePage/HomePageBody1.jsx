import { Box, CardMedia, Stack, Typography } from "@mui/material";

import "./HomePageBody1.scss";
import images from "../../Constant/images";

export default function Home1() {
  return (
    <div className="main_container" id="#">
      <Box className="homepagebody1__right-site" sx={{ width: "650px" }}>
        <Stack spacing={4}>
          <Typography
            sx={{ fontSize: 45, fontWeight: "bolder", color: "#EE7600" }}
          >
            BOOK A BIRTHDAY PARTY!
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Book your child’s birthday party or special event at The Booking
            Party For Kids and you will be amazed by the memories you will make!
          </Typography>
        </Stack>
      </Box>

      <Box>
        <CardMedia
          className="image-homepagebody1"
          component="img"
          src={images.right_birthday}
          alt="images"
        />
      </Box>
    </div>
  );
}
