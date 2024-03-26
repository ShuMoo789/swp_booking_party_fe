import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Upload,
  Grid,
  Popconfirm,
} from "antd";
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { toast } from "react-toastify";
import uploadFile from "../../utils/upload";

const { useBreakpoint } = Grid;

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [form] = useForm();
  const [render, setRender] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const screens = useBreakpoint();

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const fetchServices = async () => {
    try {
      const response = await api.get("/serviceUpload");
      setServices(
        response.data.filter((item) => item.serviceULStatus !== "UNAVAILABLE")
      );
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [render]);

  const onFinish = async (values) => {
    if (values.img) {
      const url = await uploadFile(values.img.file.originFileObj);
      values.img = url;
    }
    try {
      const response = await api.post("/create-serviceUpload", values);
      toast.success("Successfully created a new service!");
      fetchServices();
      form.resetFields();
      setShowModalAdd(false);
    } catch (error) {
      console.error("Error creating service:", error);
      toast.error("Failed to create service!");
    }
  };

  const handleDeleteService = async () => {
    try {
      if (serviceToDelete) {
        await api.delete(`/delete-serviceUpload/${serviceToDelete.id}`);
        toast.success("Successfully deleted service!");
        fetchServices();
        setDeleteModalVisible(false);
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Failed to delete service!");
    }
  };

  const handleConfirmDelete = (service) => {
    setServiceToDelete(service);
    setDeleteModalVisible(true);
  };

  return (
    <div>
      <h2>Manage Service</h2>
      <div style={{ padding: 20 }}>
        <Row justify="end" style={{ marginBottom: 20 }}>
          <Button type="primary" onClick={() => setShowModalAdd(true)}>
            Add a new service
          </Button>
        </Row>

        <Collapse
          items={services.map((service) => ({
            header: service.name,
            key: service.id,
            panel: (
              <div>
                <p>Price: {service.price}</p>
                <p>Quantity: {service.quantity}</p>
                <p>Description: {service.description}</p>
                <Button
                  type="danger"
                  onClick={() => handleConfirmDelete(service)}
                >
                  Delete
                </Button>
              </div>
            ),
          }))}
        />
      </div>

      <Modal
        title="Add a new service"
        open={showModalAdd}
        onOk={() => form.submit()}
        onCancel={() => setShowModalAdd(false)}
      >
        <Form form={form} onFinish={onFinish} labelCol={{ span: 24 }}>
          <Form.Item
            label="Name of the service"
            name="name"
            rules={[
              { required: true, message: "Please enter name of the service!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Price of the service"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please enter price of the service!",
                  },
                ]}
              >
                <InputNumber suffix="$" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Please enter quantity of the service!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please enter the description!" },
            ]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>

          {/* Form.Item for uploading image */}
          <Form.Item label="Image about your service" name="img">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Service"
        open={deleteModalVisible}
        onOk={handleDeleteService}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this service?</p>
      </Modal>
    </div>
  );
};

export default ManageService;
