import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function createData(username, role, status) {
  return { username, role, status };
}

const initialRows = [
  createData("tuanla1717", "Admin", "Active"),
  createData("danhngoc9182", "Admin", "Active"),
  createData("phapkieu112", "Customer", "Active"),
  createData("vantoan", "Party Host", "Active"),
  createData("datkhongchin", "Customer", "Active"),
];

const statusOptions = ["Active", "Disabled"];

export default function UserAccount() {
  const [statusValues, setStatusValues] = React.useState({});
  const [rows, setRows] = React.useState(initialRows);
  const [editingRowIndex, setEditingRowIndex] = React.useState(-1);
  const [editedName, setEditedName] = React.useState("");
  const [editedRole, setEditedRole] = React.useState("");
  const [editedStatus, setEditedStatus] = React.useState("");

  const handleEdit = (index) => {
    const rowToEdit = rows[index];
    setEditedName(rowToEdit.username);
    setEditedRole(rowToEdit.role);
    setEditedStatus(rowToEdit.status);
    setEditingRowIndex(index);
  };

  const handleSave = () => {
    const newRows = [...rows];
    newRows[editingRowIndex] = {
      username: editedName,
      role: editedRole,
      status: editedStatus,
    };
    setRows(newRows);
    setEditingRowIndex(-1);
  };

  const handleDelete = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  return (
    <div>
      <h1 style={{ marginTop: "60px", marginLeft: "10px", marginLeft: "40%" }}>
        User's Account
      </h1>

      <h3 style={{ marginTop: "20px", marginLeft: "20px" }}>List</h3>
      <TableContainer
        component={Paper}
        style={{ marginTop: "16px", marginLeft: "20px", marginBottom: "100px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username </TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.username}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {editingRowIndex === index ? (
                    <TextField
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    row.username
                  )}
                </TableCell>
                <TableCell align="left">
                  {editingRowIndex === index ? (
                    <TextField
                      value={editedRole}
                      onChange={(e) => setEditedRole(e.target.value)}
                    />
                  ) : (
                    row.role
                  )}
                </TableCell>
                <TableCell align="left">
                  {editingRowIndex === index ? (
                    <Autocomplete
                      value={editedStatus}
                      onChange={(event, newValue) => setEditedStatus(newValue)}
                      options={statusOptions}
                      sx={{ width: 150 }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  ) : (
                    row.status
                  )}
                </TableCell>
                <TableCell align="left">
                  {editingRowIndex === index ? (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon />
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
