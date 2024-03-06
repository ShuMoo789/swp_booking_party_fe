import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Avatar, Image, Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import api from "../../config/axios";
import uploadFile from "../../utils/upload";

export const Profile = () => {
  const [avatar, setAvatar] = useState("");
  const [form] = Form.useForm();
  const [profile, setProfile] = useState();
  const [userName, setUserName] = useState("");

  const fetchProfile = async () => {
    const response = await api.get("/profile");
    setProfile(response.data);
    setUserName(response.data.username);
    form.setFieldsValue({
      fullname: response.data.firstName,
      email: response.data.email,
      phone: response.data.phone,
      role: response.data.role,
    });
    setAvatar(response.data.avatar);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpload = async ({ fileList }) => {
    const url = await uploadFile(fileList[0].originFileObj);
    setAvatar(url);
    api.put("/profile", {
      ...profile,
      avatar: url,
    });
    toast.success("Avatar updated successfully!");
  };

  return (
    <div className="profile">
      <h1>Profile</h1>

      <div className="box">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="avatar">
          <Image
            width={140}
            src={
              avatar
                ? avatar
                : "https://media.istockphoto.com/id/1131164548/vi/vec-to/th%E1%BA%BF-th%E1%BA%A7n-5.jpg?s=612x612&w=0&k=20&c=4qLeuiEXy8mR2r_M81wB9-FTSxaV5aoOBnYkGqHZnUw="
            }
          />
        </div>
        <div className="information">
          <h4>{userName}</h4>
          <Upload showUploadList={false} onChange={handleUpload}>
            <Button icon={<UploadOutlined />} type="default">
              Update avatar
            </Button>
          </Upload>
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
          <Form.Item label="Full name" name={"fullname"}>
            <Input placeholder="*John Wick" />
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="*johnwick@gmail.com" />
          </Form.Item>
          <Form.Item label="Phone number" name={"phone"}>
            <Input placeholder="*0919010111" />
          </Form.Item>
          <Form.Item label="Position" name={"role"}>
            <Input placeholder="*Admin" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
