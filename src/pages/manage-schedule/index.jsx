import { Button, Col, Form, Modal, Row, Table, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const ManageSchedule = () => {
  const [data, setData] = useState([]);
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchSchedule = async () => {
    const response = await api.get("/schedule");
    setData(response.data.filter((item) => !item.deleted));
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (value) => {
        return value.substring(0, 5);
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (value) => {
        return (
          <Row gutter={12}>
            {/* <Col>
              <Button type="primary">Update</Button>
            </Col> */}
            <Col>
              <Button
                type="primary"
                danger
                onClick={() => {
                  handleDelete(value);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];

  const handleAdd = async (values) => {
    const response = await api.post("schedule", {
      time: formatTime(values.time.$d),
    });

    console.log(response.data);
    toast.success("Successfully create new schedule!");
    form.resetFields();
    handleCancel();
    fetchSchedule();
  };

  const handleDelete = async (id) => {
    const response = await api.delete("schedule/" + id);
    console.log(response.data);
    fetchSchedule();
    toast.success("Successfully deleted schedule!");
  };

  function formatTime(input) {
    // Tạo một đối tượng Date từ đầu vào
    const date = new Date(input);

    // Lấy giờ, phút và giây từ đối tượng Date
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    // Trả về thời gian đã được định dạng
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTime2(input) {
    // Tạo một đối tượng Date từ đầu vào
    const date = new Date(input);

    // Lấy giờ, phút và giây từ đối tượng Date
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    // Trả về thời gian đã được định dạng
    return `${hours}:${minutes}`;
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new Schedule
      </Button>
      <Table dataSource={data} columns={columns} />
      <Modal
        title="Create new schedule"
        open={isModalOpen}
        onOk={() => {
          console.log(123);
          form.submit();
        }}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={handleAdd}
        >
          <Form.Item
            name={"time"}
            label="Time"
            style={{
              width: "100%",
            }}
            rules={[
              {
                required: true,
                message: "Please enter time!",
              },
            ]}
          >
            <TimePicker />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
