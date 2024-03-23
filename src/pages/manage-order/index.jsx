import React, { useState, useEffect } from "react";

import { Button, Modal, Table, Empty } from "antd";
import api from "../../config/axios";
<<<<<<< Updated upstream
=======
import { toast } from "react-toastify";
import { formatDistance } from "date-fns";
import dayjs from "dayjs";
>>>>>>> Stashed changes

import { toast } from "react-toastify";
import { formatDistance } from "date-fns";
export const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

<<<<<<< Updated upstream
  const fetchOrder = async () => {
    const response = await api.get("/order-of-host");
    setOrders(response.data);
=======
  const fetchOrders = async () => {
    try {
      const response = await api.get("/order-of-host");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
>>>>>>> Stashed changes
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  //   const fetchOrders = async () => {
  //     try {
  //       const response = await api.get("/orders");
  //       setOrders(response.data);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   };

  //   const handlePreview = (image, title) => {
  //     setPreviewImage(image);
  //     setPreviewTitle(title);
  //     setPreviewVisible(true);
  //   };

  const handleAcceptOrder = async (record) => {
    const response = await api.patch(`/complete/${record.id}`);
    console.log(response.data);
    toast.success("Complete success!");
    fetchOrders();
  };

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => setBooking(record)}>Preview</Button>
      ),
    },
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
<<<<<<< Updated upstream

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

      //       dataIndex: "action",
      //       key: "action",
      //       render: (_, record) => (
      //         <Button onClick={() => handleAcceptOrder(record)}>Accept</Button>
      //       ),
=======
      dataIndex: "action",
      key: "action",
      render: (_, record) =>
        record.orderedStatus !== "COMPLETED" && (
          <Button onClick={() => handleAcceptOrder(record)}>Accept</Button>
        ),
>>>>>>> Stashed changes
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

      <Modal
        title="Booking Details"
        open={booking}
        onOk={() => setBooking(null)}
        onCancel={() => setBooking(null)}
      >
        <p>ID: {booking?.id}</p>
        <p>
          Booking Date:{" "}
          {`${dayjs(booking?.bookingDate).format(
            "DD/MM/YYYY"
          )} ${booking?.schedule?.time.substring(0, 5)}`}
        </p>
        <p>Total Price: {booking?.totalPrice}</p>
        <p>Name Receiver: {booking?.nameReceiver}</p>
        <p>Email: {booking?.email}</p>
        {/* Render other booking details here */}
      </Modal>
    </div>
  );
};
