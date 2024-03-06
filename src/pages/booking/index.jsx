import React, { useState } from "react";
import "./index.scss";
import { Button, Steps } from "antd/es";
import { ChooseService } from "./choose-service";
import { ChoosePackage } from "./choose-package";
import { InfoToRecive } from "./info-to-recive";
export const BookingPage = () => {
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "Choose Package",
      content: <ChoosePackage />,
    },
    {
      title: "Info To Recive",
      content: <InfoToRecive />,
    },
    {
      title: "Choose Service",
      content: <ChooseService />,
    },
    {
      title: "Comfirm",
      content: "Last-content",
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // color: token.colorTextTertiary,
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    borderRadius: "10px",
    border: `1px dashed rgb(217, 217, 217)`,
    marginTop: 16,
  };
  return (
    <div className="booking">
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
