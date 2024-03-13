import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./HomePageBody2.scss";
import Carousels from "../../component/Carousel/Carousels";

function Home2() {
  return (
    <div
      className="bg_homepagebody2"
      id="work-evironment"
      style={{
        backgroundColor: "#fae6fa",
        paddingTop: "50px",
        paddingBottom: "70px",
      }}
    >
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
        sx={{
          pt: "2.5rem",
          pb: "2.5rem",
          ml: "auto",
          mr: "auto",
          maxWidth: 1200,
          flexGrow: 1,
          // mb: "40px",
        }}
      >
        <Carousels />
      </Box>
    </div>
  );
}

export default Home2;
