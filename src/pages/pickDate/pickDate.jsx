import React from "react";
import { DatePicker, Space, Button } from "antd";
import "./pickDate.scss";

const PickDate = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical" size={12} className="pick-date-container">
      <DatePicker onChange={onChange} className="pick-date" />
      <DatePicker
        onChange={onChange}
        className="pick-date"
        showTime={{ format: "HH:mm" }}
      />
      <div className="custom-footer">
        <Button type="primary">Custom Action</Button>
      </div>
    </Space>
  );
};

export default PickDate;
