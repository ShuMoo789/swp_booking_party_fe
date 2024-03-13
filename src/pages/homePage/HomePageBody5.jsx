import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Data from "./Data.json";

export default function HomePageBody5() {
  return (
    <div
      style={{
        backgroundColor: "#fae6fa",
        paddingBottom: "40px",
        paddingTop: "30px",
      }}
      id="tools"
    >
      <Typography
        variant="h4"
        align="center"
        style={{
          color: "black",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        HOW DOES IT WORK?
      </Typography>
      <Typography
        fontSize={17}
        align="center"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "200px",
          marginRight: "200px",
        }}
      >
        We provide detailed and clear instructions on ordering steps for users.
        From choosing a service to payment and order confirmation, this guide
        makes it easy for anyone to navigate and complete the ordering process
        in a coherent and convenient way.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {Data.map((result, index) => (
          <Grid
            item
            md={2}
            sm={3}
            xs={12}
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "40px",
            }}
          >
            <Link
              to={result.link}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Card
                sx={{
                  minWidth: 280,
                  height: "100%",
                  backgroundColor: "cornsilk",
                  marginBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={result.img}
                    alt="green iguana"
                    style={{
                      objectFit: "cover",
                      margin: "0",
                      height: "200px",
                      width: "100%",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"left"}
                      fontWeight={"bold"}
                    >
                      {result.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"left"}
                      style={{ color: "black" }}
                    >
                      {result.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
