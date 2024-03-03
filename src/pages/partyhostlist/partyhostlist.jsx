import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import "./partyhostlist.scss";
import api from "../../config/axios";

function PartyHost({ name, address, description, img }) {
  return (
    <List.Item className="party-host">
      <List.Item.Meta
        avatar={
          <Avatar
            shape="square"
            src={img}
            size={160}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />
        }
        title={<h2>{name}</h2>}
        description={
          <>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </>
        }
      />
    </List.Item>
  );
}

function PartyHostList() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/profile");
        setHosts(response.data.data);
      } catch (e) {
        console(e);
      }
    };

    fetchData();
  }, []);
  //   {
  //     name: "Kidville",
  //     address: "Long Thanh My Ward, District 9, HCM City",
  //     description:
  //       "Kidville is a renowned destination for children's birthday parties, offering a dynamic and creative space for celebrations. With a focus on interactive play and imaginative activities, Kidville provides a unique setting where kids can engage in themed games, crafts, and music sessions. Their birthday party packages are customizable and include everything from decorations to entertainment, ensuring a stress-free and memorable experience for both children and parents. With a commitment to providing a fun and safe environment, Kidville is a top choice for families looking to host unforgettable birthday celebrations for their little ones.",
  //     img: "https://www.secondchancetoys.org/sites/default/files/kidville-new-logo1.jpg",
  //   },
  //   {
  //     name: "Build-A-Bear",
  //     address: "Long Thanh My Ward, District 9, HCM City",
  //     description:
  //       "Build-A-Bear Workshop offers a unique and interactive birthday party experience for children. At Build-A-Bear, kids have the opportunity to create their own stuffed animals from start to finish, including selecting the animal, stuffing it, adding special touches like clothing and accessories, and even giving it a heart filled with wishes. Birthday party packages at Build-A-Bear Workshop typically include a dedicated party leader to guide the children through the bear-making process, as well as fun activities and games. It's a hands-on and memorable way for kids to celebrate their special day while creating a lifelong friend to cherish.",
  //     img: "https://logowik.com/content/uploads/images/build-a-bear-workshop-badge5501.logowik.com.webp",
  //   },
  //   {
  //     name: "KizCiti",
  //     address: "Long Thanh My Ward, District 9, HCM City",
  //     description:
  //       "KizCiti in Ho Chi Minh City provides an interactive learning experience for kids through role-playing activities, allowing them to explore various professions while having fun. With themed birthday party packages, it offers a memorable celebration option. Here's to more happy moments at KizCiti!",
  //     img: "https://i.pinimg.com/originals/96/59/d8/9659d8c1a4f9c1a200d10a121aeff95d.jpg",
  //   },
  //   {
  //     name: "BounceU",
  //     address: "Long Thanh My Ward, District 9, HCM City",
  //     description:
  //       "BounceU offers an exhilarating birthday party experience for children, specializing in inflatable bounce houses and interactive play areas. With colorful and exciting inflatable structures, BounceU provides a dynamic environment where kids can jump, slide, and bounce to their heart's content. Their birthday party packages include private access to the bounce facilities, along with dedicated party hosts to ensure a fun and safe celebration. BounceU offers customizable party options, allowing parents to tailor the experience to their child's preferences, whether it's themed decorations, party favors, or catering. It's the perfect destination for a high-energy and unforgettable birthday bash for kids of all ages.",
  //     img: "https://pbs.twimg.com/profile_images/464820957903732736/_4uYh8uy_400x400.jpeg",
  //   },
  //   {
  //     name: "Kidzone",
  //     address: "Long Thanh My Ward, District 9, HCM City",
  //     description:
  //       "Kidzone in Ho Chi Minh City offers a variety of activities for kids, from climbing structures to ball pits. They also host themed birthday parties with entertainment options, providing a fun and memorable experience for children.",
  //     img: "https://cdn.dribbble.com/users/6083066/screenshots/14505393/kidzonelogo_4x.jpg",
  //   },
  // ];

  return (
    <div className="party-host-list">
      <h1>Party Hosts</h1>
      <List
        itemLayout="horizontal"
        dataSource={hosts}
        renderItem={(host) => (
          <PartyHost
            name={host.name}
            address={host.address}
            description={host.description}
            img={host.img}
          />
        )}
      />
    </div>
  );
}

export default PartyHostList;
