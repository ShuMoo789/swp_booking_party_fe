import React from "react";
import { Avatar, List } from "antd";
import "./partyhostlist.scss";
import { Link } from "react-router-dom";

function PartyHost({ name, address, description, img }) {
  return (
    <Link to="/serviceList">
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
            <p>Address: {address}</p>
            <p>Description: {description}</p>
          </>
        }
      />
    </List.Item>
    </Link>
  );
}

function PartyHostList() {
  const hosts = [
    {
      name: "Chuck E. Cheese's",
      address: "Long Thanh My Ward, District 9, HCM City",
      description: "Chuck E. Cheese's is a chain of restaurants and entertainment centers specializing in fun and unique children\'s birthday parties. Here, kids can enjoy tasty snacks and delicious pizza while playing electronic games, arcade games, and engaging in various entertainment activities. Chuck E. Cheese\'s provides a safe and exciting space for birthday parties, offering flexible and diverse party packages along with attentive customer service to ensure every child has a memorable birthday celebration.",
      img: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/a1inz7tbojwhjkkfmv6l"
    },
    {
      name: "Kidville",
      address: "Long Thanh My Ward, District 9, HCM City",
      description: "Kidville is a renowned destination for children's birthday parties, offering a dynamic and creative space for celebrations. With a focus on interactive play and imaginative activities, Kidville provides a unique setting where kids can engage in themed games, crafts, and music sessions. Their birthday party packages are customizable and include everything from decorations to entertainment, ensuring a stress-free and memorable experience for both children and parents. With a commitment to providing a fun and safe environment, Kidville is a top choice for families looking to host unforgettable birthday celebrations for their little ones.",
      img: "https://www.secondchancetoys.org/sites/default/files/kidville-new-logo1.jpg",
    },
    {
      name: "The Little Gym",
      address: "Long Thanh My Ward, District 9, HCM City",
      description: "The Little Gym is a premier venue for hosting children's birthday parties, offering a fun and active environment for kids to celebrate. With a focus on physical activity and skill-building, The Little Gym provides exciting party packages that include supervised gymnastics or sports activities, games, and music. Their expert staff ensures that each party is tailored to the birthday child's interests and abilities, creating a memorable experience for everyone involved. Parents can relax knowing that their child's birthday celebration at The Little Gym will be both entertaining and enriching, fostering confidence and camaraderie among young guests.",
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZQF9MCuN31SZie0EQfjyPi-YTQ44TxRplDFWEJ41A=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Build-A-Bear Workshop",
      address: "Long Thanh My Ward, District 9, HCM City",
      description: "Build-A-Bear Workshop offers a unique and interactive birthday party experience for children. At Build-A-Bear, kids have the opportunity to create their own stuffed animals from start to finish, including selecting the animal, stuffing it, adding special touches like clothing and accessories, and even giving it a heart filled with wishes. Birthday party packages at Build-A-Bear Workshop typically include a dedicated party leader to guide the children through the bear-making process, as well as fun activities and games. It's a hands-on and memorable way for kids to celebrate their special day while creating a lifelong friend to cherish.",
      img: "https://logowik.com/content/uploads/images/build-a-bear-workshop-badge5501.logowik.com.webp",
    },
    {
      name: "BounceU",
      address: "Long Thanh My Ward, District 9, HCM City",
      description: "BounceU offers an exhilarating birthday party experience for children, specializing in inflatable bounce houses and interactive play areas. With colorful and exciting inflatable structures, BounceU provides a dynamic environment where kids can jump, slide, and bounce to their heart's content. Their birthday party packages include private access to the bounce facilities, along with dedicated party hosts to ensure a fun and safe celebration. BounceU offers customizable party options, allowing parents to tailor the experience to their child's preferences, whether it's themed decorations, party favors, or catering. It's the perfect destination for a high-energy and unforgettable birthday bash for kids of all ages.",
      img: "https://pbs.twimg.com/profile_images/464820957903732736/_4uYh8uy_400x400.jpeg",
    },
  ];

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
