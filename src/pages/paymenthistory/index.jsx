import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button, Form, Modal, Rate, Input } from "antd";
import api from "../../config/axios";
import dayjs from "dayjs";

const paymentHistory = () => {
  const [orders, setOrders] = useState("");
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
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
      title: "Date",
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
      title: "Receiver",
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
          {record.orderedStatus === "COMPLETED" ? (
            <Button
              type="primary"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Feedback
            </Button>
          ) : (
            <>
              <Button style={{ color: "white", backgroundColor: "orange" }}>
                Delete
              </Button>
              <Button style={{ color: "white", backgroundColor: "orange" }}>
                Update
              </Button>
            </>
          )}
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
  const handleFeedback = async (values) => {
    console.log(values);
    const response = await api.post("/create-feedback", {
      updateAt: values.updateAt,
      description: values.feedback,
      rating: values.rating,
    });
    form.resetFields();
    setShowModal(false);
  };

  // const handleDelete = async (record) => {
  //   try {
  //     // Gọi API để xóa đối tượng
  //     await api.delete(`/orders/${record.id}`);
  //     // Làm mới danh sách đơn hàng
  //     fetchOrders();
  //     // Hiển thị thông báo xóa thành công (nếu cần)
  //     console.log("Order deleted successfully!");
  //   } catch (error) {
  //     console.error("Error deleting order:", error);
  //     // Xử lý lỗi (nếu cần)
  //   }
  // };

  return (
    <>
      <Table
        style={{ margin: "100px", height: "90vh" }}
        columns={columns}
        dataSource={orders}
      />
      <Modal
        title="Feedback"
        open={showModal}
        onOk={() => form.submit()}
        onCancel={() => {
          form.resetFields();
          setShowModal(false);
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleFeedback}>
          <Form.Item
            name="rating"
            label="Rate your experience:"
            rules={[
              { required: true, message: "Please rate your experience." },
            ]}
          >
            <Rate />
          </Form.Item>
          <Form.Item
            name="feedback"
            label="Feedback:"
            rules={[{ required: true, message: "Please provide feedback." }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default paymentHistory;
