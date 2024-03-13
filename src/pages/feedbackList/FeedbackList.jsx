import React, { useState, useEffect } from "react";
import { Table, Rate } from "antd";
import api from "../../config/axios";
import "./FeedbackList.scss";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await api.get("/feedbacks");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
  ];

  return (
    <div className="feedback-list-container">
      {" "}
      <h2>Feedback List</h2>
      <Table dataSource={feedbacks} columns={columns} />
    </div>
  );
};

export default FeedbackList;
