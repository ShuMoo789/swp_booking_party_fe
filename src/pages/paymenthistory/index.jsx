import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Button, Form, Modal, Rate, Input } from "antd";
import api from "../../config/axios";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

const paymentHistory = () => {
  const [orders, setOrders] = useState("");
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Bạn có muốn xóa này không?");
      if (confirmDelete) {
        await api.patch(`/cancel/${id}`);
        fetchOrders();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calcTotal = (filterOrder) => {
    let total = 0;
    filterOrder?.services?.forEach(
      (item) => (total += item.quantity * item.price)
    );
    return total + filterOrder.apackage.priceTotal;
  };

  const handlePaymeny = async (id) => {
    const filterOrder = orders?.filter((order) => order.id === id)[0];
    const response = await api.post("/create-payment", {
      totalPrice: 10,
      nameReceiver: filterOrder?.nameReceiver,
      phone: filterOrder?.phone,
      email: filterOrder?.email,
      slot: filterOrder?.slot,
      additionalNotes: filterOrder?.additionalNotes,
      scheduleId: filterOrder?.scheduleId,
      date: filterOrder?.date,
      packageUploadId: filterOrder?.packageUploadId,
      services: filterOrder?.services.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        };
      }),
    });

    window.open(response.data, "_self");
  };
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
              {record.orderedStatus === "PAID" && (
                <Button
                  style={{ color: "white", backgroundColor: "orange" }}
                  onClick={() => handleDelete(record?.id)}
                >
                  Delete
                </Button>
              )}
              {record.orderedStatus === "ODERED" && (
                <>
                  <Button
                    style={{ color: "white", backgroundColor: "orange" }}
                    onClick={() => handleDelete(record?.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ color: "white", backgroundColor: "orange" }}
                    onClick={() => handlePaymeny(record?.id)}
                  >
                    Payment
                  </Button>
                </>
              )}
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
