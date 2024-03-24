import {
  Button,
  Grid,
  AppBar,
  Toolbar,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authenSlice";
import images from "../../constant/images";

import "./Navigation.scss";

export default function Navigation() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.authen);
  const logoutHandler = () => {
    dispatch(logout());
  };
  const generateItem = () => {
    if (user?.role === "PARTY_HOST") {
      return [
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
            <Link to={"/dashboard/package"} style={{ fontSize: "1rem" }}>
              Dashboard
            </Link>
          ),
          key: "1",
        },
        {
          label: (
            <Button onClick={logoutHandler} style={{ color: "green" }}>
              <Link to={"/login"}>Log out</Link>
            </Button>
          ),
          key: "2",
        },
      ];
    }

    if (user?.role === "CUSTOMER") {
      return [
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
            <Link to={"/paymenthistory"} style={{ fontSize: "1rem" }}>
              Payment History
            </Link>
          ),
          key: "2",
        },
        {
          label: (
            <Link to={"/wallet"} style={{ fontSize: "1rem" }}>
              Wallet
            </Link>
          ),
          key: "3",
        },
        {
          label: (
            <Button onClick={logoutHandler} style={{ color: "green" }}>
              <Link to={"/login"}>Log out</Link>
            </Button>
          ),
          key: "3",
        },
      ];
    }

    return [];
  };
  const items = generateItem();
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#CCFBFF",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={4}>
              <Grid container alignItems="center">
                <Grid item>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <CardMedia
                      sx={{ height: 38, width: 38, borderRadius: "50%" }}
                      image={images.birthday_logo}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      marginLeft: "10px",
                      fontWeight: "bold",
                      color: "#AF6480",
                    }}
                  >
                    Booking Party For Kids
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button component={Link} to="/" sx={{ fontWeight: "bold" }}>
                  HOME
                </Button>

                <Button
                  component={Link}
                  to="/partyhostlist"
                  sx={{ fontWeight: "bold" }}
                >
                  BOOKING
                </Button>
                <Button component={Link} to="/faqs" sx={{ fontWeight: "bold" }}>
                  FAQs
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              {user ? (
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Button
                    className="user_info"
                    onClick={(e) => e.preventDefault()}
                  >
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
                  </Button>
                </Dropdown>
              ) : (
                <Button>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "gold",
                    }}
                  >
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
