import React, { useState } from "react";
import { Button, Modal, Row, Table } from "antd";
import { toast } from "react-toastify";

export const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => {
    setPreviewOpen(false);
    setPreviewImage("");
  };

  const handlePlaceOrder = async () => {
    try {
      // Gửi yêu cầu đặt hàng đến máy chủ và nhận lại đơn hàng đã đặt
      const response = await api.post("/place-order", {
        /* Thông tin đặt hàng */
      });
      const newOrder = response.data;

      // Thêm đơn hàng mới vào danh sách đơn hàng
      setOrders([...orders, newOrder]);

      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again later.");
    }
  };

  const columns = [
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
  ];

  return (
    <div>
      <h2>Manage Orders</h2>
      <div style={{ padding: 20 }}>
        <Table dataSource={orders} columns={columns} />

        <Modal title={previewTitle} onCancel={handleCancel} footer={null}>
          <img src={previewImage} alt="Preview" style={{ width: "100%" }} />
        </Modal>
      </div>
    </div>
  );
};
