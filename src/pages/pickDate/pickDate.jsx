import React from "react";
import { DatePicker, Space } from "antd";
import "./pickDate.scss";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PickDate = () => (
  <Space direction="vertical" size={12} className="pick-date-container">
    <DatePicker onChange={onChange} className="pick-date" needConfirm />
    <DatePicker
      onChange={onChange}
      className="pick-date"
      showTime
      needConfirm={false}
    />
  </Space>
);

export default PickDate;
