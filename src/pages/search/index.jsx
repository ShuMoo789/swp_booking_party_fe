import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Card, Button } from "antd";
import Meta from "antd/es/card/Meta";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

// Styling the search bar component
const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#152d32", // Light pink color
  "&:hover": {
    backgroundColor: "#152d32", // Light pink color
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

export const Search = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#152d32", borderRadius: "40px" }}
      >
        {" "}
        {/* Change background color here */}
        <Toolbar style={{ paddingTop: "70px" }}>
          {" "}
          {/* Adding padding to move the search bar downward */}
          <h1
            style={{
              fontSize: "28px",
              flexGrow: 1,
              marginRight: "8px",
              marginBottom: "8px",
              color: "#f2f2f2",
            }}
          >
            Search
          </h1>
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput placeholder="Search…" />
          </SearchContainer>
        </Toolbar>
      </AppBar>
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
                src="https://images.unsplash.com/photo-1542488246-1390a9a99a30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Party Host"
              description="Choosing your suppliers here"
            />
            <Link to="/partyhostlist">
              <Button
                type="primary"
                style={{ marginTop: "10px", marginRight: "12px" }}
              >
                View
              </Button>
            </Link>
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
                src="https://images.unsplash.com/photo-1600854109241-46990389fb97?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta
              title="Package List"
              description="Explore our package list by clicking View"
            />
            <Link to="/packagelist">
              <Button
                type="primary"
                style={{ marginTop: "10px", marginRight: "12px" }}
              >
                View
              </Button>
            </Link>
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
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            }
          >
            <Meta title="Service List" description="Others" />

            <Link to="/serviceList">
              <Button
                type="primary"
                style={{ marginTop: "10px", marginRight: "12px" }}
              >
                View
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};
