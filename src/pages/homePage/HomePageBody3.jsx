import {
  Box,
  Button,
  Grid,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { AiFillFacebook } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./HomePageBody3.scss";

export default function HomePageBody3() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#F5F5F5",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
      id="contact"
    >
      <Box className="left-homepagebody4" sx={{ width: 500 }}>
        <Stack spacing={2}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: 38,
              textAlign: "left",
              paddingBottom: "20px",
            }}
          >
            It is our pleasure to exchange information with you!
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <AiTwotoneMail style={{ color: "#626AD1", fontSize: "30px" }} />
            <span style={{ paddingLeft: "10px" }}>
              partykidzbooking@gmail.com
            </span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <AiFillFacebook style={{ color: "#626AD1", fontSize: "30px" }} />{" "}
            <span style={{ paddingLeft: "10px" }}>
              partykidzbooking.facebook.com
            </span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <AiFillTwitterSquare
              style={{ color: "#626AD1", fontSize: "30px" }}
            />{" "}
            <span style={{ paddingLeft: "10px" }}>
              partykidzbooking.twitter.com
            </span>
          </Typography>
        </Stack>
      </Box>
      <Box className="form-homepagebody4">
        <Stack spacing={3}>
          <Typography
            className="contact-title"
            sx={{ fontWeight: "bolder", fontSize: 38 }}
          >
            Contact Us
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <TextField
                  className="textfield__homepagebody4"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  style={{ backgroundColor: "white" }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  className="textfield__homepagebody4"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  style={{ backgroundColor: "white" }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <TextField
            className="textfield-homepagebody4"
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
          <TextField
            className="textfield-homepagebody4"
            id="outlined-basic"
            label="Subject"
            riant="outlined"
            style={{ backgroundColor: "white" }}
          />
          <TextareaAutosize
            className="textauto-homepagebody4"
            placeholder=" Message"
            style={{ width: 500, height: 150 }}
          />
          <Button
            className="home4_button"
            sx={{ color: "white", backgroundColor: "#1976D2", width: "100px" }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
