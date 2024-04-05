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
export const InfoToReceive = ({ form, onSubmitInfo, current }) => {
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

const InfoReceive = ({ form, onSubmitInfo, current }) => {
  const information = useSelector((store) => store.booking.information);
  const [slot, setSlot] = useState(1);
  const data = useSelector(selectPackage);
  const params = useParams();
  const dataPackage = data.payload.booking.package;
  const [schedule, setSchedule] = useState([]);
  const [bookingDate, setBookingDate] = useState();
  const onChangeNumber = (value) => {
    setSlot(value);
    console.log("changed", value);
  };
  function disabledPreviousDate(current) {
    const currentDatePlusFiveDays = dayjs().add(5, "day");
    // Can not select days before today
    return current && current < currentDatePlusFiveDays.startOf("day");
  }
  const fetchSchedule = async () => {
    console.log(bookingDate ? bookingDate : dayjs().format("YYYY/MM/DD"));
    const response = await api.get(
      `/input-day?hostId=${params.hostId}&dateStr=${
        bookingDate ? bookingDate : dayjs().add(5, "day").format("YYYY/MM/DD")
      }`
    );
    setSchedule(response.data);
  };

  useEffect(() => {
    fetchSchedule();
  }, [bookingDate, current]);

  useEffect(() => {
    if (information) {
      form.setFieldsValue(information);
    }
  }, [information]);

  useEffect(() => {
    if (information) {
      const info = { ...information };
      info.date = dayjs(info.date);
      console.log(info);
      form.setFieldsValue(info);
      if (info?.slot) {
        setSlot(info?.slot);
      } else {
        setSlot(0);
      }
    } else {
      form.setFieldValue("date", dayjs().add(5, "day"));
    }
  }, [information]);
  console.log(data);
  return (
    <div style={{ maxWidth: "1600px", padding: 20 }}>
      <Form
        onFinish={(values) => {
          values.slot = slot;
          values.timeString = schedule.filter(
            (item) => item.id === values.time
          )[0].time;
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
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
                {
                  pattern: /^[a-zA-Z\s]*$/,
                  message: "Please enter alphabetic characters only!",
                },
              ]}
            >
              <Input
                placeholder="Ex: Nguyen Van A"
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
                  message: "Please enter your phone number!",
                },
                {
                  pattern: /^(0)[0-9]{9,11}$/,
                  message:
                    "Please enter a valid phone number starting with 0 and between 10 to 12 digits!",
                },
                {
                  validator: (_, value) => {
                    if (
                      value &&
                      (value.length === 10 || value.length === 12) &&
                      /^0+$/.test(value)
                    ) {
                      return Promise.reject("Please don't enter full 0!");
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input
                placeholder="Ex: 0838667899"
                showCount
                maxLength={12}
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
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
                {
                  validator: (_, value) => {
                    if (value && !value.includes("@")) {
                      return Promise.reject(
                        "Please enter a valid email address containing @!"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input
                placeholder="Ex: nguyenvana@gmail.com"
                showCount
                maxLength={100}
                onChangeText={onChangeText}
              />
            </Form.Item>
            <Form.Item
              label="Notes:"
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
                placeholder="Ex: Name of the main character of the party: Ben. The food should not be spicy or should not have too much sugar."
              />
            </Form.Item>
            <Form.Item
              label="Pick a date"
              name="date"
              initialValue={dayjs().add(5, "day")}
              rules={[
                {
                  required: true,
                  message: "Please pick a date!",
                },
              ]}
            >
              <DatePicker
                onChange={(value) => {
                  setBookingDate(dayjs(value.$d).format("YYYY/MM/DD"));
                }}
                disabledDate={disabledPreviousDate}
              />
            </Form.Item>
            <Form.Item
              label="Pick a Time"
              name={"time"}
              rules={[
                {
                  required: true,
                  message: "Please pick your time!",
                },
              ]}
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
                      <Radio.Button disabled={!item.available} value={item.id}>
                        {item.time}
                      </Radio.Button>
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
                  <p>Price Per Child: ${dataPackage?.pricePerChild}</p>
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
                    // max={dataPackage?.slot}
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
                  {slot <= dataPackage?.slot ? (
                    <h1> ${dataPackage?.priceTotal} </h1>
                  ) : (
                    <h1>
                      {" "}
                      $
                      {dataPackage?.priceTotal +
                        (dataPackage?.slot - slot) *
                          -dataPackage?.pricePerChild}{" "}
                    </h1>
                  )}
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
                  {dataPackage?.slot - slot <= 0 ? (
                    <h1> 0</h1>
                  ) : (
                    <h1> {dataPackage?.slot - slot} </h1>
                  )}
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
