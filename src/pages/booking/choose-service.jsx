import { Button, Col, Image, InputNumber, Row } from "antd/es";
import React, { useState } from "react";
import { Modal } from "antd";
import { Card } from "antd";

export const ChooseService = () => {
  return (
    <div>
      <Service />
    </div>
  );
};
const onChangeNumber = (value) => {
  console.log("changed", value);
};
const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Row gutter={30}>
          <Col span="6">
            <Card
              onClick={showModal}
              hoverable
              style={{
                // width: "300px",
                textAlign: "center",
                // height: "29vh",
              }}
            >
              <img
                src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  width: "100%",
                }}
              />
              <h4 style={{ color: "orange" }}>
                Cat Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt, exercitationem nemo!
              </h4>
              <h5 style={{ color: "orange" }}>$100</h5>
            </Card>
            <Modal
              title="name of service"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  onClick={handleOk}
                >
                  Add
                </Button>,
              ]}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    margin: "0 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h4 style={{ color: "orange" }}>Cat</h4>
                  <h5 style={{ color: "orange" }}>$100</h5>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChangeNumber={onChangeNumber}
                    style={{ width: "100px", height: "50px", fontSize: "25px" }}
                  />
                </div>
              </div>
            </Modal>
          </Col>
          <Col span="6">
            <Card
              onClick={showModal}
              hoverable
              style={{
                // width: "300px",
                textAlign: "center",
                // height: "29vh",
              }}
            >
              <img
                src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  width: "100%",
                }}
              />
              <h4 style={{ color: "orange" }}>
                Cat Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt, exercitationem nemo!
              </h4>
              <h5 style={{ color: "orange" }}>$100</h5>
            </Card>
            <Modal
              title="name of service"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  onClick={handleOk}
                >
                  Add
                </Button>,
              ]}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    margin: "0 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h4 style={{ color: "orange" }}>Cat</h4>
                  <h5 style={{ color: "orange" }}>$100</h5>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChangeNumber={onChangeNumber}
                    style={{ width: "100px", height: "50px", fontSize: "25px" }}
                  />
                </div>
              </div>
            </Modal>
          </Col>
          <Col span="6">
            <Card
              onClick={showModal}
              hoverable
              style={{
                // width: "300px",
                textAlign: "center",
                // height: "29vh",
              }}
            >
              <img
                src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  width: "100%",
                }}
              />
              <h4 style={{ color: "orange" }}>
                Cat Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt, exercitationem nemo!
              </h4>
              <h5 style={{ color: "orange" }}>$100</h5>
            </Card>
            <Modal
              title="name of service"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  onClick={handleOk}
                >
                  Add
                </Button>,
              ]}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    margin: "0 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h4 style={{ color: "orange" }}>Cat</h4>
                  <h5 style={{ color: "orange" }}>$100</h5>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChangeNumber={onChangeNumber}
                    style={{ width: "100px", height: "50px", fontSize: "25px" }}
                  />
                </div>
              </div>
            </Modal>
          </Col>
          <Col span="6">
            <Card
              onClick={showModal}
              hoverable
              style={{
                // width: "300px",
                textAlign: "center",
                // height: "29vh",
              }}
            >
              <img
                src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  width: "100%",
                 
                }}
              />
              <h4 style={{ color: "orange" }}>
                Cat Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt, exercitationem nemo!
              </h4>
              <h5 style={{ color: "orange" }}>$100</h5>
            </Card>
            <Modal
              title="name of service"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  onClick={handleOk}
                >
                  Add
                </Button>,
              ]}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    margin: "0 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h4 style={{ color: "orange" }}>Cat</h4>
                  <h5 style={{ color: "orange" }}>$100</h5>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChangeNumber={onChangeNumber}
                    style={{ width: "100px", height: "50px", fontSize: "25px" }}
                  />
                </div>
              </div>
            </Modal>
          </Col>
        </Row>
        <div></div>
      </div>
      <Image
        src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
        style={{
          borderRadius: "10px",
          border: "1px solid #ddd",
          padding: "5px",
        }}
      />
    </div>
  );
};
