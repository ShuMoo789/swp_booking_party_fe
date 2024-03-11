import { Box, CardMedia, Stack, Typography } from "@mui/material";
import "./HomePageBody1.scss";
import images from "../../constant/images";

export default function Home1() {
  return (
    <div className="main_container" id="#">
      <Box
        className="homepagebody1__right-site"
        sx={{ width: "650px", position: "relative", marginTop: "-300px" }}
      >
        <Stack spacing={4}>
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: "bold",
              color: "#EF96C5",
            }}
          >
            BOOK A BIRTHDAY PARTY!
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              backgroundColor: "rgba(250, 230, 250, 0.5)",
              borderRadius: "10px",
              padding: "10px",
              color: "black",
            }}
          >
            Elevate the joy for your little one's birthday extravaganza or
            special celebration at The Booking Party For Kids, where
            unforgettable memories await!
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ position: "relative", top: "-40px" }}>
        <CardMedia
          className="image-homepagebody1"
          component="img"
          src={images.bg_home2}
          alt="images"
        />
      </Box>
    </div>
  );
}
