import { Box, CardMedia, Stack, Typography } from "@mui/material";

import "./HomePageBody3.scss";
import images from "../../constant/images";

export default function HomePageBody4() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#FFE4B5",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
      id="contact"
    >
      <Box className="form-homepagebody4">
        <CardMedia
          className="image-homepagebody3"
          component="img"
          src={images.gift_card}
          alt="images"
          style={{ height: "30rem", width: "40rem", paddingRight: "-20px" }}
        />
      </Box>
      <Box className="left-homepagebody4" sx={{ width: 500 }}>
        <Stack spacing={2}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: 40,
              textAlign: "left",
              paddingBottom: "20px",
            }}
          >
            GIFT CARDS
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              textAlign: "left",
              paddingBottom: "20px",
            }}
          >
            Get the best gift to your little one and loved ones by giving the
            gift of amusement and great memories! Click here to buy online now.
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}
