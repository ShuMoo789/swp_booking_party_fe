import React, { useEffect, useState } from "react";
import { Button, Result, Spin } from "antd";
import { Link } from "react-router-dom";
import api from "../../config/axios";

const SuccessPage = () => {
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true); // State to manage loading

  const fetchOrder = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const orderId = urlParams.get("vnp_TxnRef");
      const response = await api.get(`/update-order?orderId=${orderId}`);
      console.log(response);
      setOrder(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <Spin spinning={loading}>
      {" "}
      {/* Render Spin component with loading state */}
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle={`Order number: ${order?.id} Cloud server configuration takes 1-5 minutes, please wait.`}
        extra={[
          <Link to={"/"} key={1}>
            Back to home
          </Link>,
        ]}
      />
    </Spin>
  );
};

export default SuccessPage;
