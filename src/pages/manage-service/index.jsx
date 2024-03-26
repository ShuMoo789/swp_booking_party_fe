import {
  Button,
  Col,
  Collapse,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Table,
  Tag,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import uploadFile from "../../utils/upload";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { data } from "../statistic";
import { useSelector } from "react-redux";

export const ManageService = () => {
  const user = useSelector((store) => store.authen);
  const [services, setServices] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [form] = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [activeKey, setActiveKey] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [render, setRender] = useState(0);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const fetchService = async () => {
    const response = await api.get(`/serviceUpload/${user.id}`);
    console.log(response.data.serviceUploads);
    setServices(
      response.data.serviceUploads
        ?.filter((item) => item.serviceULStatus != "UNAVAILABLE")
        .map((item, index) => {
          return {
            key: index,
            label: <ServiceDetail data={item} fetchService={fetchService} />,
            children: (
              <ServiceList list={item.serviceUploads} services={item} />
            ),
          };
        })
    );
  };

  useEffect(() => {
    fetchService();
  }, [render]);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const onFinish = async (values) => {
    if (values.img.file) {
      const url = await uploadFile(values.img.file.originFileObj);
      values.img = url;
    }
    console.log(values);
    const response = await api.post("/create-serviceUpload", values);
    console.log(response);
    toast.success("Successfully create a new service!");
    fetchService();
    form.resetFields();
    setShowModalAdd(false);
  };
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div>
      <h2>Manage Service</h2>
      <div
        style={{
          padding: 20,
        }}
      >
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
          activeKey={activeKey}
          onChange={(keys) => setActiveKey(keys)}
          // onChange={onChange}
        />

        {/* Modal add */}
        <Modal
          title="Add a new service"
          open={showModalAdd}
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

            <Row gutter={12}>
              <Col span={12}>
                {" "}
                <Form.Item
                  label="Price"
                  name={"Price"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter the price!",
                    },
                  ]}
                >
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                    //   onChange={onChange}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                {" "}
                <Form.Item
                  label="Quantity"
                  name={"Quantity"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Quantity!",
                    },
                  ]}
                >
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                    //   onChange={onChange}
                  />
                </Form.Item>
              </Col>
            </Row>

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
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item label="Image about your service" name={"img"}>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
      </div>
    </div>
  );
};

function ServiceList({ list, services }) {
  // const [services, setServices] = useState([]);
  console.log(list);
  console.log(services);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/serviceUpload");
        console.log("test 2:", response.data.serviceUploads);
      } catch (e) {
        console(e);
      }
    };
  }, []);

  return (
    <div style={{ margin: "10px 0" }}>
      <Row>
        <Col span={12} style={{ marginBottom: "8px" }}>
          <strong>Quantity:</strong> {services.quantity}
        </Col>
        <Col span={12} style={{ marginBottom: "8px" }}>
          <strong>Price:</strong> {services.price}
        </Col>
        <Col span={24} style={{ marginBottom: "8px" }}>
          <strong>Description:</strong> {services.description}
        </Col>
      </Row>
    </div>
  );
}

const ServiceDetail = ({ data, fetchService }) => {
  const handleDelete = async () => {
    await api.delete(`/delete-serviceUpload/${data.id}`);
    fetchService(); // Cập nhật dữ liệu sau khi xóa thành công
    toast.success("Successfully delete service!");
  };
  return (
    <Row>
      <Col span={2}>
        <Image width={40} src={data.img} />
      </Col>
      <Col span={18}>
        <strong>{data.name}</strong>
        <Tag
          style={{
            marginLeft: 10,
          }}
          color={data.serviceULStatus === "PENDING" ? "warning" : ""}
        >
          {data.serviceULStatus}
        </Tag>
      </Col>
      <Col span={4}>
        <Button type="primary" danger onClick={handleDelete}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
