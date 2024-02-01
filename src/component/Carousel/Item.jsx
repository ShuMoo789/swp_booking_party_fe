import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Item({ item }) {
  return (
    <Paper
      sx={{
        // mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${item.image})`,
        height: { lg: "400px", xs: "200px" },
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={item.image}
          alt={item.imageText}
        />
      }
    </Paper>
  );
}
export default Item;
