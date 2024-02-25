import React from "react";
import "./packagelist.scss";
import { Button, Card, Col, Row, Typography } from "antd";

function PackageItem(props) {
  return (
    <Card
      hoverable
      style={{ width: "100%", height: "700px", marginBottom: "20px" }}
      cover={
        <div style={{ height: "250px", overflow: "hidden" }}>
        <img
          alt={props.name}
          src={props.img}
          style={{ width: "100%", objectFit: "cover" }}
        />
        </div>
      }
    >
      <div style={{ height: "calc(100% - 250px)", overflow: "auto", padding: "20px" }}>
        <Typography.Title level={3}>{props.name}</Typography.Title>
        <p>
          <strong>Theme:</strong> {props.theme}
        </p>
        <p>
          <strong>Venue:</strong> {props.venue}
        </p>
        <p>{props.description}</p>
        <p>
          <strong>Food Option:</strong> {props.foodOption}
        </p>
        <p>
          <strong>Price:</strong> {props.price}
        </p>
        <Button className="btn-get-started">Book Now</Button>
      </div>
    </Card>
  );
}

// Component chính để hiển thị danh sách các gói phần mềm
function PackageList() {
  const packages = [
    {
      id: 1,
      name: "Adventure Land Birthday Bash",
      theme: "Game & Entertainment",
      venue: "Outdoor Grass Field",
      img: "https://www.one-stop-party-ideas.com/images/Birthday-Pinata.jpg",
      description:
        "After a round of blindfolded piñata fun, where children take turns trying to bust open a colorful piñata filled with candies hanging from above, guests can enjoy a delightful spread of picnic delights. From tasty sandwiches to refreshing fruit skewers, this option brings the joy of outdoor dining to your celebration.",
      foodOption: "Picnic Delights",
      price: "$8 per child",
    },
    {
      id: 2,
      name: "Artistic Extravaganza Birthday Celebration",
      theme: "Art and Creativity",
      venue: "Indoor Art Studio",
      img: "https://crockadoodle.com/wp-content/uploads/2023/03/Miles-Eden-Jules-2.jpg",
      description:
        "Let your child's creativity soar with our Art and Creativity Package! Hosted in a vibrant indoor art studio, this birthday party offers a plethora of artistic activities designed to inspire and entertain young imaginations. From colorful canvas painting to imaginative craft projects, every moment is a chance for your little ones to explore their artistic talents and create unforgettable memories.",
      foodOption: "Decorate Your Own Cupcakes",
      price: "$12 per child",
    },
    {
      id: 3,
      name: "Sports Spectacular Birthday Bonanza",
      theme: "Sports and Exercise",
      venue: "Outdoor Park",
      img: "https://www.leapfrogs.com.au/wp-content/uploads/2023/04/balssss.jpeg",
      description:
        "Gear up for an unforgettable day of fun and fitness with our Sports and Exercise Package! Set amidst the sprawling greenery of an outdoor park or field, this birthday party extravaganza offers a dynamic blend of exhilarating games and activities designed to ignite the spirit of competition and camaraderie. From friendly matches to team challenges, it's a celebration that celebrates the joy of sportsmanship and outdoor adventure.",
      foodOption: "Athletic Appetizer Platter",
      price: "$10 per child",
    },
    {
      id: 4,
      name: "Adventure Quest Birthday Expedition",
      theme: "Place and Adventure",
      venue: "Outdoor Adventure Park",
      img: "https://adelady.com.au/wp-content/uploads/2023/07/305455409_509038321221424_9027451673577384761_n.jpg",
      description:
        "Prepare for an unforgettable outdoor adventure with our Place and Adventure Package! Hosted in the expansive grounds of an outdoor adventure park, this birthday celebration invites young explorers to embark on a thrilling journey of discovery and excitement. From exhilarating zip lines to challenging obstacle courses nestled within lush greenery, every moment is an opportunity for adventure, exploration, and unforgettable memories in the great outdoors.",
      foodOption: "Trailblazer Tacos",
      price: "$12 per child",
    },
    {
      id: 5,
      name: "Dance Delights Birthday Soiree",
      theme: "Music and Dancing",
      venue: "Indoor Dance Studio",
      img: "https://images.squarespace-cdn.com/content/v1/5aa1c5ec96e76fa94d96044b/1581605000582-SRGJ3QWVFKL87NGQ210L/8J0A0434.jpg",
      description:
        "Step into a world of rhythm and movement with our Dance Delights Birthday Soiree! Hosted in the dynamic setting of an indoor dance studio, this birthday celebration invites young dancers to express themselves through music, movement, and joyful expression. With mirrored walls, sprung floors, and a state-of-the-art sound system, it's the perfect place to let your inner dancer shine and create unforgettable memories with friends.",
      foodOption: "Ballet Barre Bites",
      price: "$10 per child",
    },
    {
      id: 6,
      name: "Foodie Fiesta Birthday Bash",
      theme: "Eating and Food",
      venue: "Outdoor Picnic Area",
      img: "https://lanecove.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2017/03/04231143/Untitled-design-31.jpg",
      description:
        "Savor the flavors of fun and festivity at our Foodie Fiesta Birthday Bash! Hosted in the scenic surroundings of an outdoor picnic area or park, this birthday celebration invites young food enthusiasts to indulge in a culinary adventure filled with delicious delights and tasty treats. With the fresh air as your backdrop, it's the perfect setting to enjoy good food, great company, and unforgettable memories under the open sky.",
      foodOption: "Sweet Treats Picnic Parade",
      price: "$12 per child",
    },
  ];

  return (
    <div className="package-list">
      <Typography.Title
        level={1}
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        Package List
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {packages.map((pkg) => (
          <Col key={pkg.id} xs={24} sm={12} md={8}>
            <PackageItem
              id={pkg.id}
              name={pkg.name}
              theme={pkg.theme}
              venue={pkg.venue}
              img={pkg.img}
              description={pkg.description}
              foodOption={pkg.foodOption}
              price={pkg.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PackageList;
