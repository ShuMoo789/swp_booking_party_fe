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
import "./index.scss";

function createData(name, track, receiver, amount, status) {
  return { name, track, receiver, amount, status };
}

const rows1 = [
  createData("Paypal", "SO-1234", "KFC Ltd", "24$", "success"),
  createData("Stripe", "SO-1424", "Jolibee Ltd", "32$", "success"),
  createData("Momo", "SO-1241", "KFF", "39$", "failed"),
  createData("Paypal", "SO-1245", "Lotte Ltd", "67$", "failed"),
  createData("GooglePay", "SO-1242", "McDonald Ltd", "49$", "failed"),
];

const rows2 = [
  createData("ApplePay", "SO-1014", "KFC Ltd", "50$", "success"),
  createData("Paypal", "SO-1015", "Jolibee Ltd", "42$", "success"),
];

const rows3 = [
  createData("Paypal", "SO-2111", "Sukiya", "35$", "pending"),
  createData("Momo", "SO-2112", "Jolibee Ltd", "32$", "pending"),
];

export default function BasicTable() {
  return (
    <div>
      <h1
        style={{
          marginTop: "60px",
          marginLeft: "10px",
        }}
      >
        Transaction Details
      </h1>

      <h3
        style={{
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        Today
      </h3>
      <TableContainer
        component={Paper}
        style={{ marginTop: "16px", marginLeft: "20px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Method </TableCell>
              <TableCell align="right">Tracking</TableCell>
              <TableCell align="center">Receiver</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.track}</TableCell>
                <TableCell align="center">{row.receiver}</TableCell>
                <TableCell align="center">
                  <span
                    style={{
                      color: row.status === "success" ? "orange" : "inherit",
                    }}
                  >
                    {row.amount}
                  </span>
                </TableCell>
                <TableCell align="left">
                  <Stack direction="row" spacing={10}>
                    {row.status === "success" && (
                      <Button variant="contained" color="success">
                        Success
                      </Button>
                    )}
                    {row.status === "failed" && (
                      <Button variant="contained" color="error">
                        Failed
                      </Button>
                    )}
                    {row.status === "pending" && (
                      <Button variant="contained" color="primary">
                        Pending
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3
        style={{
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        February 13, 2024
      </h3>
      <TableContainer
        component={Paper}
        style={{ marginTop: "16px", marginLeft: "20px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Method </TableCell>
              <TableCell align="right">Tracking</TableCell>
              <TableCell align="center">Receiver</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.track}</TableCell>
                <TableCell align="center">{row.receiver}</TableCell>
                <TableCell align="center">
                  <span
                    style={{
                      color: row.status === "success" ? "orange" : "inherit",
                    }}
                  >
                    {row.amount}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    {row.status === "success" && (
                      <Button variant="contained" color="success">
                        Success
                      </Button>
                    )}
                    {row.status === "failed" && (
                      <Button variant="contained" color="error">
                        Failed
                      </Button>
                    )}
                    {row.status === "pending" && (
                      <Button variant="contained" color="primary">
                        Pending
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3
        style={{
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        January 1, 2024
      </h3>
      <TableContainer
        component={Paper}
        style={{ marginTop: "16px", marginLeft: "20px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Method </TableCell>
              <TableCell align="right">Tracking</TableCell>
              <TableCell align="center">Receiver</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows3.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.track}</TableCell>
                <TableCell align="center">{row.receiver}</TableCell>
                <TableCell align="center">
                  <span
                    style={{
                      color: row.status === "success" ? "orange" : "inherit",
                    }}
                  >
                    {row.amount}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    {row.status === "success" && (
                      <Button variant="contained" color="success">
                        Success
                      </Button>
                    )}
                    {row.status === "failed" && (
                      <Button variant="contained" color="error">
                        Failed
                      </Button>
                    )}
                    {row.status === "pending" && (
                      <Button variant="contained" color="primary">
                        Pending
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
