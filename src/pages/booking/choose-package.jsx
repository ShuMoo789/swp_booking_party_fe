import { Col, Image, Row } from "antd/es";
import React, { useState, useEffect } from "react";
import api from "../../config/axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPackage } from "../../redux/features/bookingSlice";
import { convertToVND } from "../../utils/currency";

export const ChoosePackage = () => {
  const params = useParams();
  const [packages, setPackages] = useState([]);
  const selectedPackage = useSelector((store) => store.booking.package);
  const fetchPackage = async () => {
    const response = await api.get(
      `/packageUpload-by-host-id/${params.hostId}`
    );
    setPackages(response.data);
  };
  console.log(packages);

  useEffect(() => {
    fetchPackage();
  }, []);
  return (
    <div className="packages">
      <Row gutter={12}>
        {packages
          // .filter((item) => item.packageULStatus != "UNAVAILABLE")
          .map((item) => (
            <Col span={12}>
              <Package
                data={item}
                isSelect={item?.id === selectedPackage?.id}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export const Package = ({ isSelect, data }) => {
  const dispatch = useDispatch();
  console.log(isSelect);
  return (
    <div
      className={`package ${isSelect ? "select" : ""}`}
      onClick={() => {
        dispatch(selectPackage(data));
      }}
    >
      <Row gutter={20}>
        <Col span="5">
          <Image
            src={data.img}
            style={{
              borderRadius: "10px",
              border: "1px solid #ddd",
              padding: "5px",
            }}
          />
        </Col>
        <Col span="19">
          <Row>
            <Col span="19" style={{ color: isSelect ? "orange" : "" }}>
              <h1>{data.name}</h1>
            </Col>
            <Col span="5" style={{ color: isSelect ? "orange" : "" }}>
              <h2>{convertToVND(data.priceTotal)}</h2>
            </Col>
          </Row>
          <p>Price per kid: vnd {data.pricePerChild}</p>
          <p>{data.description}</p>
          {/* <p>Add more Servive:</p>
          <ul>
            {data?.serviceUploads?.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul> */}
        </Col>
      </Row>
    </div>
  );
};
