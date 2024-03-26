import React, { useState } from "react";
import { Space, Table, Button, Input, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Search } = Input;

const AdminDashboard = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [editingRowIndex, setEditingRowIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const handleEdit = (index) => {
    const rowToEdit = dataSource[index];
    setEditedRow({ ...rowToEdit });
    setEditingRowIndex(index);
  };

  const handleSave = () => {
    const updatedDataSource = dataSource.map((row, index) =>
      index === editingRowIndex ? editedRow : row
    );
    setDataSource(updatedDataSource);
    setEditingRowIndex(-1);
  };

  const handleCancelEdit = () => {
    setEditingRowIndex(-1);
  };

  const handleDelete = (index) => {
    Modal.confirm({
      title: "Confirm Deletion",
      content: "Are you sure you want to delete this record?",
      onOk() {
        const filteredDataSource = dataSource.filter((_, i) => i !== index);
        setDataSource(filteredDataSource);
      },
    });
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredDataSource = dataSource.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setDataSource(filteredDataSource);
  };

  const handleChange = (field, value) => {
    setEditedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Theme",
      dataIndex: "theme",
      key: "theme",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.theme}
            onChange={(e) => handleChange("theme", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Venue",
      dataIndex: "venue",
      key: "venue",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.venue}
            onChange={(e) => handleChange("venue", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Price Per Child",
      dataIndex: "priceperchild",
      key: "priceperchild",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.priceperchild}
            onChange={(e) => handleChange("priceperchild", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Price Total",
      dataIndex: "pricetotal",
      key: "pricetotal",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.pricetotal}
            onChange={(e) => handleChange("pricetotal", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record, index) =>
        editingRowIndex === index ? (
          <Input
            value={editedRow.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
          />
        ) : (
          text
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          {editingRowIndex === index ? (
            <>
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
              <Button type="default" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => handleEdit(index)}
              />
              <Button
                type="danger"
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(index)}
              />
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ marginTop: "60px", marginLeft: "10px" }}>Admin Dashboard</h1>
      <Search
        placeholder="Search"
        onSearch={handleSearch}
        style={{ marginBottom: "16px" }}
      />
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default AdminDashboard;
