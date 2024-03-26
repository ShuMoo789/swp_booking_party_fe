import { Button, Col, Image, InputNumber, Row } from "antd/es";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Card } from "antd";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteService,
  selectService,
} from "../../redux/features/bookingSlice";
import { DeleteOutlined } from "@ant-design/icons";
export const ChooseService = () => {
  return (
    <div>
      <Service />
    </div>
  );
};

const Service = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const booking = useSelector((store) => store.booking);
  const [current, setCurrent] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const onChangeNumber = (value) => {
    setQuantity(value);
  };

  const checkSelected = (service) => {
    const index = booking.services?.findIndex((item) => item.id === service.id);
    return index >= 0;
  };

  const showModal = (record) => {
    setIsModalOpen(true);
    setCurrent(record);
    const index = booking.services.findIndex((item) => item.id === record.id);
    console.log(booking.services[index].quantity);
    if (index >= 0) {
      setQuantity(booking.services[index].quantity);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchService = async () => {
    const response = await api.get(
      `/serviceUploadByPackage/${booking.package.id}`
    );
    setServices(response.data);
  };

  useEffect(() => {
    fetchService();
  }, []);

  const calcTotal = () => {
    let total = 0;
    booking?.services?.forEach((item) => (total += item.quantity * item.price));
    return total + booking.package.priceTotal + ((booking.information.slot - booking.package.slot)*booking.package.pricePerChild);
  };

  const addService = (record) => {
    dispatch(
      selectService({
        ...record,
        quantity,
      })
    );
    setQuantity(1);
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: "flex", minHeight: 700 }}>
      <div className="choose-service">
        <div className="choose-service__left">
          <Row gutter={[30, 30]}>
            {services?.map((item) => {
              return (
                <Col span="4">
                  <Card
                    className={`service-item ${
                      checkSelected(item) ? "selected" : ""
                    }`}
                    onClick={() => {
                      showModal(item);
                    }}
                    hoverable
                    style={{
                      // width: "300px",
                      textAlign: "center",
                      // height: "29vh",
                    }}
                  >
                    <img
                      src={item.img}
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ddd",
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        padding: 10,
                      }}
                    >
                      <h4 style={{ color: "orange" }}>
                        {item?.name} ${item?.price}
                      </h4>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="choose-service__right">
          <h1>Summary</h1>

          <table>
            <thead>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </thead>
            <tbody>
              {booking?.services?.map((item, index) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td
                      className="delete"
                      onClick={() => {
                        dispatch(deleteService(index));
                      }}
                    >
                      x
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>Total</td>
                <td></td>
                <td>${calcTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title={current?.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ width: "100%" }}
            type="primary"
            onClick={() => {
              addService(current);
            }}
          >
            Add
          </Button>,
        ]}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <Image
            src={current?.img}
            style={{
              borderRadius: "10px",
              border: "1px solid #ddd",
              margin: "0 0",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <h4 style={{ color: "orange" }}>Cat</h4> */}
            <h5 style={{ color: "orange" }}>${current?.price}</h5>
            <h5 style={{ color: "orange" }}>{current?.description}</h5>
            <InputNumber
              value={quantity}
              min={1}
              max={10}
              defaultValue={1}
              onChange={onChangeNumber}
              style={{
                width: "100px",
                height: "50px",
                fontSize: "25px",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
