import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import "./partyhostlist.scss";
import { Link } from "react-router-dom";
import api from "../../config/axios";
import { Link } from "react-router-dom";

function PartyHost({ name, address, description, img, id }) {
  return (
    <Link to={`/packagelist/${id}`}>

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
    </Link>
  );
}

function PartyHostList() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/party-host");
        setHosts(response.data);
      } catch (e) {
        console(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="party-host-list">
      <h1>Party Hosts</h1>
      <List
        itemLayout="horizontal"
        dataSource={hosts}
        renderItem={(host) => (
          <PartyHost
            name={host.username}
            address={host.address}
            description={host.description}
            img={host.avatar}
            id={host.id}
          />
        )}
      />
    </div>
  );
}

export default PartyHostList;
