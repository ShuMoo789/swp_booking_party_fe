import React, { useState } from "react";
import { Form, Input, Tooltip, InputNumber } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd/es";
import { useSelector } from "react-redux";
import { selectPackage } from "../../redux/features/bookingSlice";

export const InfoToRecive = () => {
  return (
    <div>
      <InfoRecive />
    </div>
  );
};

const { TextArea } = Input;
const onChangeText = (e) => {
  console.log("Change:", e.target.value);
};
const onChangeDate = (date, dateString) => {
  console.log(date, dateString);
};
const onChangeNumber = (value) => {
  console.log("changed", value);
  
};

const InfoRecive = () => {
  const data = useSelector(selectPackage);
  const dataPackage = data.payload.booking.package;
  console.log(data);
  return (
    <div style={{ maxWidth: "1600px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 21,
        }}
        style={{
          marginTop: "30px",
        }}
      >
        <Form.Item label="Name">
          <Input
            placeholder="Ex: Gepard Landau Honkai Star Rail"
            suffix={
              <Tooltip title="The name of the person checking in to host the party">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
            showCount
            maxLength={100}
            onChangeText={onChangeText}
          />
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            placeholder="Ex: 0838667899"
            showCount
            maxLength={10}
            onChangeText={onChangeText}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder="Ex: bookingforkidz@online.com"
            showCount
            maxLength={100}
            onChangeText={onChangeText}
          />
        </Form.Item>
        <Form.Item label="Additional Notes">
          <TextArea
            showCount
            maxLength={500}
            onChangeText={onChangeText}
            placeholder="Ex: Name of the main character of the party: taylor, Food should not be spicy"
          />
        </Form.Item>

        <Form.Item label="Package">
          <Row gutter={20}>
            <Col span="8">
              <Image
                src={dataPackage?.img}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  padding: "5px",
                }}
              />
            </Col>
            <Col span="16">
              <h1>{dataPackage?.name}</h1>
              <p>Total Capacity: Slot</p>
              <p>Location: {dataPackage?.venue}</p>
              <p>Description: {dataPackage?.description} </p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <h3>Select Slot Tickets:</h3>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChangeNumber={onChangeNumber}
                style={{ width: "100px", height: "50px", fontSize: "25px" }}
              
              />
            </Col>
            <Col
              span="5"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
                padding: "5px",
                textAlign: "center",
                fontWeight: "2px",
                margin: "0 20px",
              }}
            >
              <h4>Total Price</h4>
              <h1> ${dataPackage?.priceTotal} </h1>
            </Col>
            <Col
              span="5"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
                padding: "5px",
                textAlign: "center",
                fontWeight: "2px",
              }}
            >
              <h4>Slot Left</h4>
              <h1> 40 </h1>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};
