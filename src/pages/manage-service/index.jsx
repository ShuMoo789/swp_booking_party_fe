import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  Modal,
  Row,
  Table,
  Tag,
} from "antd";
import React, { useState, useEffect } from "react";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import api from "../../config/axios";
import { toast } from "react-toastify";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [form] = useForm();
  const [render, setRender] = useState(0);

  const fetchServices = async () => {
    const response = await api.get("/serviceUpload");
    console.log(response.data);
    setServices(
      response.data.filter((item) => item.serviceULStatus !== "UNAVAILABLE")
    );
  };

  useEffect(() => {
    fetchServices();
  }, [render]);

  const onFinish = async (values) => {
    console.log(values);
    const response = await api.post("/create-serviceUpload", values);
    console.log(response);
    toast.success("Successfully created a new service!");
    fetchServices();
    form.resetFields();
    setShowModalAdd(false);
  };

  return (
    <div>
      <h2>Manage Service</h2>
      <div style={{ padding: 20 }}>
        <Row
          justify={"end"}
          style={{
            marginBottom: 20,
          }}
        >
          <Button type="primary" onClick={() => setShowModalAdd(true)}>
            Add a new service
          </Button>
        </Row>

        <Collapse
          expandIcon={({ isActive }) =>
            isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />
          }
          items={services}
          defaultActiveKey={["1"]}
        />
      </div>

      {/* Modal add */}
      <Modal
        title="Add a new service"
        visible={showModalAdd}
        onOk={() => form.submit()}
        onCancel={() => setShowModalAdd(false)}
      >
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item
            label="Name of the service"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please enter name of the service!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price of the service"
            name={"price"}
            rules={[
              {
                required: true,
                message: "Please enter price of the service!",
              },
            ]}
          >
            <Input suffix="$" />
          </Form.Item>
          <Form.Item
            label="Description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please enter the description!",
              },
            ]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please enter quantity of the service!",
              },
            ]}
          ></Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageService;
