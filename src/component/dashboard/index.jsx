import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Dropdown, Button, Row } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  LineChartOutlined,
  FileDoneOutlined,
  CodepenOutlined,
  WalletOutlined,
  LikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const itemsPartyHost = [
  {
    key: "1",
    label: <Link to={"/"}>Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <Link to={"/dashboard/statistics"}>Statistics</Link>,
    icon: <LineChartOutlined />,
  },
  {
    key: "3",
    label: <Link to={"/dashboard/order"}>Manage Order</Link>,
    icon: <FileDoneOutlined />,
  },
  {
    key: "4",
    label: <Link to={"/dashboard/package"}>Manage Package</Link>,
    icon: <CodepenOutlined />,
  },
  {
    key: "5",
    label: <Link to={"/dashboard/wallet"}>Wallet</Link>,
    icon: <WalletOutlined />,
  },
  {
    key: "6",
    label: <Link to={"/dashboard/feedback"}>Feedback</Link>,
    icon: <LikeOutlined />,
  },
];

const itemsAdmin = [
  {
    key: "1",
    label: <Link to={"/dashboard/userlist"}>User list</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: (
      <Link to={"/dashboard/packageregisterlist"}>Package register list</Link>
    ),
    icon: <CodepenOutlined />,
  },
];

const items = [
  { key: "1", label: <a href="/profile">Profile</a> },
  { key: "2", label: <a href="/login">Logout</a> },
];

const onFinish = (values) => {};

const Dashboard = () => {
  const user = useSelector((store) => store.authen);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuClick = ({ key }) => {
    setSelectedItem(key);
  };

  const getMenuItems = () => {
    return user.role === "ADMIN" ? itemsAdmin : itemsPartyHost;
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handleMenuClick}
          selectedKeys={[selectedItem]}
          items={getMenuItems()}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row style={{ height: "100%" }} justify="end">
            <Dropdown menu={{ items }} placement="User">
              <Button style={{ marginTop: 10, marginRight: 50 }}>
                {user.username}
              </Button>
            </Dropdown>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Contact: partykidzbooking@gmail.com | Phone: 0766710603
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
