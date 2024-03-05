import { Button, CardMedia, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { useRef } from "react";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import images from "../../constant/images";
import "./Navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authenSlice";

export default function Navigation() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const handleHomeClick = () => {
    scrollRef.current = window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const user = useSelector((store) => store.authen);
  const logoutHandler = () => {
    dispatch(logout());
  };
  const items = [
    {
      label: (
        <Link to={"/profile"} style={{ fontSize: "1rem" }}>
          Profile
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/dashboard/statistics"} style={{ fontSize: "1rem" }}>
          Dashboard
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Button onClick={logoutHandler} style={{ color: "red" }}>
          Log out
        </Button>
      ),
      key: "2",
    },
  ];
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item xs={4}>
              <a href="/">
                <CardMedia
                  sx={{ height: 38, width: 38, ml: 1.2 }}
                  image={images.logo_cake}
                />
              </a>
            </Grid>
            <Grid item xs={4} align="center">
              <Link to="/" onClick={handleHomeClick}>
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  Home
                </Button>
              </Link>
              <Link to="/search">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  Book
                </Button>
              </Link>
              <Link to="/faqs">
                <Button sx={{ color: "black", fontWeight: "bolder" }}>
                  FAQs
                </Button>
              </Link>
              s{" "}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              {user ? (
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a className="user_info" onClick={(e) => e.preventDefault()}>
                    <Space
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: "15px",
                        marginTop: "11px",
                      }}
                    >
                      {user.username}
                      <CaretDownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              ) : (
                <Button>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Log In
                  </Link>
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
