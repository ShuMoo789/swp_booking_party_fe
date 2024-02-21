import React from "react";
import "./packagelist.scss";
import { Button, Card, Col, Row, Typography } from "antd";

// Component để hiển thị một gói phần mềm
function PackageItem(props) {
  return (
    <Card
      hoverable
      style={{ width: "100%", marginBottom: "20px" }}
      cover={<img alt={props.name} src={props.img} style={{ maxHeight: "250px", objectFit: "cover" }} />}
    >
      <div style={{ padding: "20px" }}>
        <Typography.Title level={3}>{props.name}</Typography.Title>
        <p><strong>Theme:</strong> {props.theme}</p>
        <p><strong>Venue:</strong> {props.venue}</p>
        <p>{props.description}</p>
        <p><strong>Food Option:</strong> {props.foodOption}</p>
        <p><strong>Price:</strong> {props.price}</p>
        <Button type="primary" href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Get Started
        </Button>
      </div>
    </Card>
  );
}

// Component chính để hiển thị danh sách các gói phần mềm
function PackageList() {
  const packages = [
    {
      id: 1,
      name: "Superhero Package",
      theme: "Superheroes",
      venue: "Grand Hall",
      img: "https://cdn.cherishx.com/uploads/1562151788_large.jpg",
      description:
        "Kids love dressing up as their favorite superheroes like Spiderman, Batman, Wonder Woman, etc. You can decorate the venue with superhero-themed decorations and have games and activities centered around superhero challenges.",
      foodOption: "Buffet",
      price: "$500",
    },
    {
      id: 2,
      name: "Beach Package",
      theme: "Beach",
      venue: "Beach",
      img: "https://cdn.greenvelope.com/blog/wp-content/uploads/decorations-for-beach-party.jpg",
      description:
        "The Beach theme for a birthday party creates a relaxed atmosphere with sand and sea decorations. Activities include beach volleyball, sandcastle building, and water games.",
      foodOption: "Plated Dinner",
      price: "$1000",
    },
    {
      id: 3,
      name: "Princess Package",
      theme: "Princess",
      venue: "Conference Center",
      img: "https://www.paperlesspost.com/blog/wp-content/uploads/Blog_2-23_Princess-Themed-Birthday-Party_01-hero.png",
      description:
        "For children who enjoy fairy tales and royalty, a princess or prince-themed party can be magical. Decorate with tiaras, wands, and royal colors like pink and purple. You can also organize a royal ball with dancing and crafts like making crowns or magic wands.",
      foodOption: "Catering",
      price: "$800",
    },
  ];

  return (
    <div className="package-list">
      <Typography.Title level={1} style={{ textAlign: "center", marginBottom: "30px" }}>Package List</Typography.Title>
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
