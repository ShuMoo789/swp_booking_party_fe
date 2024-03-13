import React, { useState } from "react";
import "./index.scss";
import { Button, Steps } from "antd/es";
import { ChooseService } from "./choose-service";
import { ChoosePackage } from "./choose-package";
import { InfoToReceive } from "./info-to-receive";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateInfo } from "../../redux/features/bookingSlice";
import { ConfirmPage } from "./confirm";
import api from "../../config/axios";
export const BookingPage = () => {
  const [current, setCurrent] = useState(0);
  const booking = useSelector((store) => store.booking);
  const dispatch = useDispatch();
  const [form] = useForm();
  const onSubmitInfo = (values) => {
    console.log(values);
    dispatch(updateInfo(values));
    setCurrent(current + 1);
  };
  const steps = [
    {
      title: "Choose Package",
      content: <ChoosePackage />,
    },
    {
      title: "Info To Receive",
      content: <InfoToReceive form={form} onSubmitInfo={onSubmitInfo} />,
    },
    {
      title: "Choose Service",
      content: <ChooseService />,
    },
    {
      title: "Comfirm",
      content: <ConfirmPage />,
    },
  ];

  const next = () => {
    if (current === 1) {
      form.submit();
    } else {
      setCurrent(current + 1);
    }
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
  const calcTotal = () => {
    let total = 0;
    booking?.services?.forEach(
      (item) =>
        (total += item.quantity * item.price + booking.package.priceTotal)
    );
    return total;
  };

  const handlePaymeny = async () => {
    const response = await api.post("/create-payment", {
      totalPrice: calcTotal(),
      nameReceiver: booking?.information?.name,
      phone: booking?.information?.phone,
      email: booking?.information?.email,
      slot: booking?.information?.slot,
      additionalNotes: booking?.information?.note,
      scheduleId: booking?.information?.time,
      date: booking?.information?.date,
      packageUploadId: booking?.package?.id,
      services: booking.services.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        };
      }),
    });
    dispatch(reset());
    window.open(response.data, "_self");
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
          <Button type="primary" onClick={handlePaymeny}>
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
