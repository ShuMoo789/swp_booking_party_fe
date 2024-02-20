import { Button, CardMedia, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";

import { Link } from "react-router-dom";

import images from "../../Constant/images";
import "./Navigation.scss";

export default function Navigation() {
  const scrollRef = useRef(null);

  const handleHomeClick = () => {
    scrollRef.current = window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item xs={4}>
              <CardMedia
                sx={{ height: 38, width: 38, ml: 1.2 }}
                image={images.logo_rework_home}
              />
            </Grid>
            <Grid item xs={4} align="center">
              <Link to="/" onClick={handleHomeClick}>
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  Home
                </Button>
              </Link>
              <HashLink smooth to="/#work-evironment">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  Content
                </Button>
              </HashLink>
              <HashLink smooth to="/#footer123">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  footer
                </Button>
              </HashLink>

              {/* <a href="#work-evironment">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  next
                </Button>
              </a> */}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <Button>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Log In
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
