import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import "./partyhostlist.scss";
import api from "../../config/axios";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import ScrollToTopOnMount from "../../component/Navigate/BackToTop";

function PartyHost({ name, address, description, img, id }) {
  return (
    <Link to={`/booking/${id}`}>
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
const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#152d32",
  "&:hover": {
    backgroundColor: "#152d32",
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100ch",
    "&:focus": {
      width: "50ch",
    },
  },
}));

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
      <ScrollToTopOnMount />
      <h1>Party Hosts</h1>
      <List
        style={{ marginBottom: "50px", marginTop: "10px" }}
        itemLayout="horizontal"
        dataSource={hosts}
        renderItem={(host) => (
          <PartyHost
            name={host.username}
            address={host.address}
            description={host.information}
            img={host.avatar}
            id={host.id}
          />
        )}
      />
    </div>
  );
}

export default PartyHostList;
