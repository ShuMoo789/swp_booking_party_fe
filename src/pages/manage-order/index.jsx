import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Empty } from "antd";
import api from "../../config/axios";
import { toast } from "react-toastify";

export const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handlePreview = (image, title) => {
    setPreviewImage(image);
    setPreviewTitle(title);
    setPreviewVisible(true);
  };

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handlePreview(record.image, record.title)}>
          Preview
        </Button>
      ),
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handleAcceptOrder(record)}>Accept</Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Orders</h2>
      <div style={{ padding: 20 }}>
        {orders.length > 0 ? (
          <Table dataSource={orders} columns={columns} />
        ) : (
          <Empty description="No orders" />
        )}
      </div>
    </div>
  );
};
