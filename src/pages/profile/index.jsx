import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Avatar, Image, Button, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import api from "../../config/axios";
import uploadFile from "../../utils/upload";
export const Profile = () => {
  const [avatar, setAvatar] = useState("");
  const [form] = Form.useForm();
  const [profile, setProfile] = useState();
  const fetchProfile = async () => {
    const response = await api.get("/profile");
    setProfile(response.data);
    console.log(response.data.email);
    // form.setFieldsValue({
    //   fullname: response.data.firstName,
    //   email: response.data.email,
    //   phone: response.data.phone,
    //   role: response.data.role,
    // });
    form.setFieldValue("fullname", response.data.firstName);
    form.setFieldValue("email", response.data.email);
    form.setFieldValue("phone", response.data.phone);
    form.setFieldValue("role", response.data.role);
    setAvatar(response.data.avatar);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile">
      <h1>User Profile</h1>

      <div className="box">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1708282604702-99bae7574ff0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="avatar">
          <Image
            width={140}
            src={
              avatar
                ? avatar
                : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            }
          />
          {/* <Avatar
            size={150}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> */}
        </div>
        <div className="information">
          <h4>Your photo</h4>
          <p>This will be displayed on your profile</p>
          <Upload
            showUploadList={false}
            onChange={async ({ fileList }) => {
              console.log(fileList);
              const url = await uploadFile(fileList[0].originFileObj);
              setAvatar(url);
            }}
          >
            <Button icon={<PlusOutlined />}>Upload</Button>
          </Upload>

          <Button
            type="primary"
            onClick={() => {
              api.put("/profile", {
                ...profile,
                avatar: avatar,
              });
            }}
          >
            Save
          </Button>
        </div>
      </div>

      <div className="box box-2">
        <h2>Personal Information</h2>
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Fullname" name={"fullname"}>
            <Input placeholder="*John Wick" />
          </Form.Item>
          <Form.Item label="Email address" name={"email"}>
            <Input placeholder="*johnwick@gmail.com" />
          </Form.Item>
          <Form.Item label="Mobile number" name={"phone"}>
            <Input placeholder="*0919010111" />
          </Form.Item>
          <Form.Item label="Role" name={"role"}>
            <Input placeholder="*Admin" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
