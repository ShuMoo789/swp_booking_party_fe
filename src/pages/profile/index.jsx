import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Avatar, Button, Form, Input } from "antd";
export const Profile = () => {
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
          <Avatar
            size={150}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="information">
          <h4>Your photo</h4>
          <p>This will be displayed on your profile</p>
          <Button
            style={{
              marginRight: 10,
            }}
          >
            Upload New
          </Button>

          <Button type="primary">Save</Button>
        </div>
      </div>

      <div className="box box-2">
        <h2>Personal Information</h2>
        <Form
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Fullname">
            <Input placeholder="*John Wick" />
          </Form.Item>
        </Form>
        <Form
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Email address">
            <Input placeholder="*johnwick@gmail.com" />
          </Form.Item>
        </Form>
        <Form
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Mobile number">
            <Input placeholder="*0919010111" />
          </Form.Item>
        </Form>
        <Form
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Role">
            <Input placeholder="*Admin" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
