import React, { useEffect, useState } from "react";
import { Package } from "./choose-package";
import { useSelector } from "react-redux";
import { Descriptions, Image } from "antd";
import { Description } from "@material-ui/icons";
import dayjs from "dayjs";
import api from "../../config/axios";
import { useParams } from "react-router-dom";
import { convertToVND } from "../../utils/currency";

export const ConfirmPage = () => {
  const booking = useSelector((store) => store.booking);
  const [time, setTime] = useState("");
  const params = useParams();
  const calcTotal = () => {
    let total = 0;
    booking?.services?.forEach((item) => (total += item.quantity * item.price));
    return (
      <div>
        {convertToVND(
          booking.information.slot > booking.package.slot
            ? total +
                booking.package.priceTotal +
                (booking.information.slot - booking.package.slot) *
                  booking.package.pricePerChild
            : total + booking.package.priceTotal
        )}
      </div>
    );
  };
  const fetchSchedule = async () => {
    const response = await api.get(`schedule-by-host-id/${params.hostId}`);
    const timeString = response.data.filter(
      (item) => item.id && !item.deleted === booking?.information?.time
    );
    setTime(timeString[0].time);
  };
  useEffect(() => {
    fetchSchedule();
  }, []);
  const items = [
    {
      key: "1",
      label: "Name",
      children: booking?.information?.name,
    },
    {
      key: "2",
      label: "Phone",
      children: booking?.information?.phone,
    },
    {
      key: "3",
      label: "Email",
      children: booking?.information?.email,
    },
    {
      key: "4",
      label: "Slot",
      children: booking?.information?.slot,
    },
    {
      key: "5",
      label: "Date",
      children: dayjs(booking?.information?.date).format("DD/MM/YYYY"),
    },
    {
      key: "6",
      label: "Time",
      children: booking?.information?.timeString.substring(0, 5),
    },
    {
      key: "7",
      label: "Note",
      children: booking?.information?.note,
      span: 4,
    },
  ];
  return (
    <div className="confirm">
      <div className="confirm__left">
        <h2
          style={{
            marginBottom: 20,
          }}
        >
          Checkout
        </h2>
        {/* <Package data={booking.package} /> */}
        <table>
          <thead>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  width={70}
                  src={booking.package.img}
                />
              </td>
              <td>{booking.package.name}</td>
              <td>{booking.information.slot} slot</td>
              <td>
                {convertToVND(
                  booking.information.slot < booking.package.slot
                    ? booking.package.priceTotal
                    : booking.package.priceTotal +
                        (booking.information.slot - booking.package.slot) *
                          booking.package.pricePerChild
                )}
              </td>
            </tr>
            {booking?.services?.map((item, index) => {
              return (
                <tr>
                  <td>
                    <Image
                      style={{
                        borderRadius: 10,
                      }}
                      width={70}
                      src={item.img}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{convertToVND(item.price)}</td>
                </tr>
              );
            })}

            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>{calcTotal()}</td>
            </tr>
          </tbody>
        </table>
        {/* {booking.services.map((item) => {
          return <ConfirmItem key={item.id} data={item} />;
        })} */}
      </div>
      <div className="confirm__right">
        <div className="box">
          <Descriptions title="Booking Info" items={items} />
        </div>
      </div>
    </div>
  );
};

const ConfirmItem = ({ data }) => {
  return <div className="service-item">{data?.name}</div>;
};
