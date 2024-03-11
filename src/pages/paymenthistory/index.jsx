import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button} from "antd";
import api from "../../config/axios";
import dayjs from "dayjs";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const paymentHistory = () => {
  const [orders, setOrders] = useState("");
  const columns = [
    {
      title: "Package Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <a>{record.apackage.name}</a>,
    },
    {
      title: "Address",
      dataIndex: "venue",
      key: "venue",
      render: (text, record) => <a>{record.apackage.venue}</a>,
    },
    {
      title: "Day",
      dataIndex: "bookingDate",
      key: "bookingDate",
      render: (value) => {
        return <>{dayjs(value).format("DD/MM/YYYY")}</>;
      },
    },
    {
      title: "Check-in time",
      dataIndex: "schedule",
      key: "schedule",
      render: (value) => {
        return <>{value?.time.substring(0, 5)}</>;
      },
    },
    {
      title: "Reciever",
      dataIndex: "nameReceiver",
      key: "nameReceiver",
    },
    {
      title: "Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Status",
      key: "orderedStatus",
      dataIndex: "orderedStatus",
      render: (value) => {
        let color;
        switch (value) {
          case "ODERED":
            color = "#108ee9";
            break;
          case "CANCELLED":
            color = "#f50";
            break;
          case "PAID":
            color = "#87d068";
            break;
          default:
            color = "default";
        }
        return <Tag color={color}>{value}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button style={{color:"white", backgroundColor:"orange"}}>Delete</Button>
          <Button style={{color:"white", backgroundColor:"orange"}}>Update</Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    const reponse = await api.get("/order-history");
    console.log(reponse.data);
    setOrders(reponse.data);
  };
  return (
    <Table style={{ margin: "100px" }} columns={columns} dataSource={orders} />
  );
};
export default paymentHistory;
