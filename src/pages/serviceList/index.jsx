import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Card } from "antd";
import { Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import Slider from "react-slick";

export const ServiceList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };
  return (
    <div className="service-list">
      <h1 style={{ marginTop: "10%", marginLeft: "40%" }}>The Service List</h1>

      {/* First row of pictures */}
      <div className="row">
        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1523754569648-43ccb845c9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Full-joy Combo"
              description="a funny clown + water ballon fight + KFC party"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>109$</span>}
              description=""
            />
          </Card>
        </div>

        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1533222535026-754c501569dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Traditional Combo"
              description="Party with snack and fun quiz"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>45$</span>}
              description=""
            />
          </Card>
        </div>

        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Kingdom Combo"
              description="Costume party which allows kids to be princess and prince + snack"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>69$</span>}
              description=""
            />
          </Card>
        </div>
      </div>
      {/* Second row of pictures */}
      <div className="row">
        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://plus.unsplash.com/premium_photo-1686920245950-58617c8a602e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Learning Combo"
              description="Allows kids going on a pic-nic trip + provide lessons and meal"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>99$</span>}
              description=""
            />
          </Card>
        </div>

        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1509666537727-9154b6962292?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Surprise Combo"
              description="Make the host kid to be surprised by a party with KFC meal and fun"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>59$</span>}
              description=""
            />
          </Card>
        </div>

        <div className="box">
          <Card
            hoverable
            style={{
              width: "100%", // Set card width to fill the container
            }}
            cover={
              <img
                alt="example"
                src="https://plus.unsplash.com/premium_photo-1681841169642-2fb7ace5c4ae?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Memory Combo"
              description="Cake + KFC party + MC leading party"
            />
            <Card.Meta
              title={<span style={{ color: "red" }}>79$</span>}
              description=""
            />
          </Card>
        </div>
      </div>
      <h2 style={{ marginTop: "30px", marginLeft: "47%" }}>Gallery</h2>
      <div style={{ marginTop: "5px" }}>
        <Slider {...settings} style={{ marginBottom: "20px" }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1527821468487-b724210d296a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1469406396016-013bfae5d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
              style={{ width: "100%" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
