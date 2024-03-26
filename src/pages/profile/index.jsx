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
  const [profile, setProfile] = useState(null);
  const [userName, setUserName] = useState("");

  const fetchProfile = async () => {
    try {
      const response = await api.get("profile");
      if (response.data) {
        setProfile(response.data);
        setUserName(response.data.firstName);
        form.setFieldsValue({
          fullname: response.data.firstName,
          email: response.data.email,
          phone: response.data.phone,
          role: response.data.role,
        });
        setAvatar(response.data.avatar);
      } else {
        console.error("No data available in profile response");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpload = async ({ fileList }) => {
    try {
      const url = await uploadFile(fileList[0].originFileObj);
      setAvatar(url);
      const updatedProfile = { ...profile, avatar: url };
      await api.put("/profile", updatedProfile);
      toast.success("Avatar updated successfully!");

      setProfile(updatedProfile);
    } catch (error) {
      console.error("Error updating avatar:", error);

      toast.error("Failed to update avatar");
    }
  };

  return (
    <div className="profile">
      <h1
        style={{
          margin: "60px 0 0 0",
          textAlign: "center",
          borderColor: "pink",
          color: "yellow",
        }}
      >
        Profile
      </h1>

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
              avatar ||
              "https://sipr.mojokertokab.go.id/images/avatar/no-image.jpg"
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
          <Form.Item label="Name" name={"fullname"}>
            <p>
              {profile?.firstName} {profile?.lastName}
            </p>
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <p>{profile?.email}</p>
          </Form.Item>
          <Form.Item label="Phone number" name={"phone"}>
            <p>{profile?.phone}</p>
          </Form.Item>
          <Form.Item label="Address" name={"address"}>
            <p>{profile?.address}</p>
          </Form.Item>
          <Form.Item label="Infomation" name={"information"}>
            <p>{profile?.information}</p>
          </Form.Item>
          <Form.Item label="Role" name={"role"}>
            <p>{profile?.role}</p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
