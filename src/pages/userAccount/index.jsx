import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  tableCellClasses,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../config/axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey[200],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserAccount = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableId, setEditableId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/all-accounts");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id, currentStatus) => {
    setEditableId(id);
    setNewStatus(currentStatus);
  };

  const handleDone = async (id) => {
    try {
      const response = await api.put(`/update-account-status/${id}`, {
        accountStatus: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) => {
          return prevData.map((item) => {
            if (item.id === id) {
              return { ...item, accountStatus: newStatus };
            }
            return item;
          });
        });
        setEditableId(null);
        // Hiển thị thông báo thành công
        toast.success("Update successful!");
      } else {
        throw new Error("Failed to update user status.");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      toast.error("Update fail!!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "25px 0px 15px" }}>User List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Name
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Email
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Phone
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Address
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Status
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Role
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>
                    {item.firstName} {item.lastName}
                  </StyledTableCell>
                  <StyledTableCell>{item.email}</StyledTableCell>
                  <StyledTableCell>{item.phone}</StyledTableCell>
                  <StyledTableCell>{item.address}</StyledTableCell>
                  <StyledTableCell>
                    {editableId === item.id ? (
                      <Select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="BAN">BAN</MenuItem>
                      </Select>
                    ) : (
                      <span
                        style={{
                          color:
                            item.accountStatus === "ACTIVE" ? "green" : "red",
                        }}
                      >
                        {item.accountStatus}
                      </span>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>{item.role}</StyledTableCell>
                  <StyledTableCell>
                    {editableId === item.id ? (
                      <DoneIcon
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => handleDone(item.id)}
                      />
                    ) : (
                      <EditIcon
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleEdit(item.id, item.accountStatus)}
                      />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Container for toast notifications */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default UserAccount;
