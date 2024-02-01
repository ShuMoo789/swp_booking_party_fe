import React, { useState } from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { dataImg } from "./slider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardOutlinedIcon style={{ color: "black" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackOutlinedIcon style={{ color: "black" }} />
    </div>
  );
}
function Carousels() {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {dataImg.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Slider>
  );
}

export default Carousels;
