import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  InputNumber,
  DatePicker,
  Select,
  Radio,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd/es";
import { useSelector } from "react-redux";
import { selectPackage } from "../../redux/features/bookingSlice";
import moment from "moment";
import dayjs from "dayjs";
import api from "../../config/axios";
import { useParams } from "react-router-dom";
export const InfoToReceive = ({ form, onSubmitInfo }) => {
  return (
    <div>
      <InfoReceive form={form} onSubmitInfo={onSubmitInfo} />
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

const InfoReceive = ({ form, onSubmitInfo }) => {
  const information = useSelector((store) => store.booking.information);
  const [slot, setSlot] = useState(0);
  const data = useSelector(selectPackage);
  const params = useParams();
  const dataPackage = data.payload.booking.package;
  const [schedule, setSchedule] = useState([]);
  const onChangeNumber = (value) => {
    setSlot(value);
    console.log("changed", value);
  };
  function disabledPreviousDate(current) {
    // Can not select days before today
    return current && current < moment().startOf("day");
  }
  const fetchSchedule = async () => {
    const response = await api.get(`schedule-by-host-id/${params.hostId}`);
    setSchedule(response.data);
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  useEffect(() => {
    const info = { ...information };
    // console.log(info.date);
    // console.log(`${info.date.$D}-${info.date.$M + 1}-${info.date.$y}`);
    info.date = dayjs(info.date);
    form.setFieldsValue(info);
    if (info?.slot) {
      setSlot(info?.slot);
    } else {
      setSlot(0);
    }
  }, [information]);
  console.log(data);
  return (
    <div style={{ maxWidth: "1600px", padding: 20 }}>
      <Form
        onFinish={(values) => {
          values.slot = slot;
          onSubmitInfo(values);
        }}
        form={form}
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
        <Row>
          <Col span={12}>
            <Form.Item
              label="Name"
              name={"name"}
              rules={[
                {
                  required: true,
                  message: "Please enter name!",
                },
              ]}
            >
              <Input
                placeholder="Ex: Phan Thanh Danh"
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
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone!",
                },
              ]}
            >
              <Input
                placeholder="Ex: 0838667899"
                showCount
                maxLength={10}
                onChangeText={onChangeText}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input
                placeholder="Ex: bookingforkidz@online.com"
                showCount
                maxLength={100}
                onChangeText={onChangeText}
              />
            </Form.Item>
            <Form.Item
              label="Additional Notes"
              name="note"
              rules={[
                {
                  required: true,
                  message: "Please enter some additional notes!",
                },
              ]}
            >
              <TextArea
                showCount
                maxLength={500}
                onChangeText={onChangeText}
                placeholder="Ex: Name of the main character of the party: Taylor, The food should not be spicy."
              />
            </Form.Item>
            <Form.Item
              label="Pick a date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please pick your date",
                },
              ]}
            >
              <DatePicker disabledDate={disabledPreviousDate} />
            </Form.Item>
            <Form.Item
              label="Pick a Time"
              name={"time"}
              // name="time"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please pick your date",
              //   },
              // ]}
            >
              <Radio.Group
                onChange={(e) => {
                  form.setFieldValue("timeString", e);
                }}
                buttonStyle="solid"
              >
                {schedule
                  .filter((item) => !item.deleted)
                  .map((item) => {
                    return (
                      <Radio.Button value={item.id}>{item.time}</Radio.Button>
                    );
                  })}
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
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
                  <p>Total Capacity: {dataPackage?.slot} Slot</p>
                  <p>Location: {dataPackage?.venue}</p>
                  <p>Description: {dataPackage?.description} </p>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                  <h3>Select Slot Tickets:</h3>
                  <InputNumber
                    value={slot}
                    min={1}
                    max={dataPackage?.slot}
                    defaultValue={1}
                    onChange={onChangeNumber}
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
                  <h1> {dataPackage?.slot - slot} </h1>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
