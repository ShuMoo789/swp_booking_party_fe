import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Data from "./Data.json";

export default function ContentPage2() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{
            marginTop: "30px",
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
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          No pre-booking is required to have fun at The Booking Party For Kids.
          Visit us anytime during operation hours and buy tickets in-store. You
          can also purchase tickets online now!
        </Typography>

        <Grid container spacing={5}>
          {Data.map((result, index) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <Link to={result.link} style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 400 }} style={{ borderRadius: "5px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={result.img}
                      alt="green iguana"
                      style={{ borderRadius: "5px" }}
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
                        minHeight={150}
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
      </Container>
    </div>
  );
}
