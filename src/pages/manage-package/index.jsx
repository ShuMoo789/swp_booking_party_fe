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

export const ManagePackage = () => {
  const [packages, setPakages] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [form] = useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
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
  const fetchPackage = async () => {
    const response = await api.get("/packageUpload");
    setPakages(
      response.data.map((item, index) => {
        return {
          key: index,
          label: <PackageDetail data={item} />,
          children: <ServiceList />,
        };
      })
    );
  };

  useEffect(() => {
    fetchPackage();
  }, []);

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

  const items = [
    {
      key: "1",
      label: <PackageDetail />,
      children: <ServiceList />,
    },
    {
      key: "2",
      label: <PackageDetail />,
      children: <ServiceList />,
    },
    {
      key: "3",
      label: <PackageDetail />,
      children: <ServiceList />,
    },
  ];

  const onFinish = async (values) => {
    if (values.img.file) {
      const url = await uploadFile(values.img.file.originFileObj);
      values.img = url;
    }
    console.log(values);
    const response = await api.post("/create-packageUpload", values);
    console.log(response);
    toast.success("Successfully create new package");
    fetchPackage();
    form.resetFields();
    setShowModalAdd(false);
  };

  return (
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
          Add new package
        </Button>
      </Row>

      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />
        }
        items={packages}
        defaultActiveKey={["1"]}
        // onChange={onChange}
      />

      {/* Modal add */}
      <Modal
        title="Add new package"
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
            label="Combo name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please enter name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row gutter={12}>
            <Col span={12}>
              {" "}
              <Form.Item
                label="Theme"
                name={"theme"}
                rules={[
                  {
                    required: true,
                    message: "Please enter theme!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                label="Venue"
                name={"venue"}
                rules={[
                  {
                    required: true,
                    message: "Please enter venue!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              {" "}
              <Form.Item
                label="Price per child"
                name={"pricePerChild"}
                rules={[
                  {
                    required: true,
                    message: "Please enter theme!",
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
                label="Price total"
                name={"priceTotal"}
                rules={[
                  {
                    required: true,
                    message: "Please enter venue!",
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
                message: "Please enter name!",
              },
            ]}
          >
            <TextArea rows={5} />
          </Form.Item>
          <Form.Item label="Image" name={"img"}>
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
  );
};

const ServiceList = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <Row
        justify={"start"}
        style={{
          marginBottom: 20,
        }}
      >
        <Button type="primary">Add new service</Button>
      </Row>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

const PackageDetail = ({ data }) => {
  return (
    <Row>
      <Col span={2}>
        <Image width={40} src={data.img} />
      </Col>
      <Col span={18}>
        <strong>{data.name}</strong>
      </Col>
      <Col span={4}>
        <Button
          style={{
            marginRight: 10,
          }}
          type="primary"
        >
          Update
        </Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
