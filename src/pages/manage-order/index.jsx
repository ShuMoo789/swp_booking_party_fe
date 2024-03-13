import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Table } from "antd";
import { toast } from "react-toastify";
import api from "../../config/axios";
import { formatDistance } from "date-fns";
export const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => {
    setPreviewOpen(false);
    setPreviewImage("");
  };

  const fetchOrder = async () => {
    const response = await api.get("/order-of-host");
    setOrders(response.data);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const columns = [
    {
      title: "Create At",
      dataIndex: "createAt",
      key: "createAt",
      render: (value) =>
        formatDistance(new Date(value), new Date(), { addSuffix: true }),
    },
    {
      title: "Status",
      dataIndex: "orderedStatus",
      key: "orderedStatus",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (value, record) => {
        return (
          <>
            {record.orderedStatus === "PAID" && (
              <Button
                type="primary"
                onClick={async () => {
                  await api.patch(`/complete/${value}`);
                  fetchOrder();
                }}
              >
                Finish
              </Button>
            )}
          </>
        );
      },
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
