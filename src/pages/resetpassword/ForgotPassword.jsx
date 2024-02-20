import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack, CardMedia } from "@mui/material";
import images from "../../Constant/images";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Confirmation

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Gửi yêu cầu đến máy chủ để kiểm tra và gửi email xác nhận
    // Code xử lý yêu cầu gửi email xác nhận ở đây
    setStep(2);
  };

  const handleCodeResetConfirm = (e) => {
    e.preventDefault();
    // Gửi yêu cầu đến máy chủ để kiểm tra và gửi email xác nhận
    // Code xử lý yêu cầu gửi email xác nhận ở đây
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Xác nhận email và chuyển hướng đến trang nhập mật khẩu mới
    // Code xử lý xác nhận email ở đây
  };

  return (
    <Box className="bg_container-fg">
      <Box className="form-fg">
        {step === 1 && (
          <form className="reset_password__step1" onSubmit={handleEmailSubmit}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "400px",
                m: "auto",
                backgroundColor: "#DCDCDC",
                mt: "8rem",
              }}
            >
              <Stack
                spacing={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography
                  sx={{ mt: "40px" }}
                  variant="h5"
                  textTransform="uppercase"
                >
                  Reset password
                </Typography>
                <TextField
                  type="email"
                  label="Email"
                  sx={{ width: "500px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Paper>
          </form>
        )}
        {step === 2 && (
          <form
            className="reset_password__step1"
            onSubmit={handleCodeResetConfirm}
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "400px",
                m: "auto",
                backgroundColor: "#DCDCDC",
                mt: "8rem",
              }}
            >
              <Stack
                spacing={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography variant="h5" textTransform="uppercase">
                  Reset password
                </Typography>
                {/* Hiển thị thông báo xác nhận email ở đây */}
                <Typography>
                  We have sent a confirmation email to{" "}
                  <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0079FF" }}
                  >
                    {email}
                  </a>
                  . Please check your mail and give us your confirm code
                </Typography>
                <TextField
                  type="text"
                  label="Your Code"
                  sx={{ width: "500px" }}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Confirm
                </Button>
              </Stack>
            </Paper>
          </form>
        )}
        {step === 3 && (
          <form
            className="reset_password__step1"
            onSubmit={handleResetPassword}
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "400px",
                m: "auto",
                backgroundColor: "#DCDCDC",
                mt: "8rem",
              }}
            >
              <Stack
                spacing={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography variant="h5" textTransform="uppercase">
                  Reset Password
                </Typography>
                <Typography>Please Enter Your New Password.</Typography>
                <TextField
                  className="textfield-signup"
                  name="password"
                  required
                  sx={{ width: "500px" }}
                  value={password}
                  id="outlined-password-input"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />

                <TextField
                  className="textfield-signup"
                  name="confirm"
                  required
                  sx={{ width: "500px" }}
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                />
                {/* Hiển thị thông báo xác nhận email ở đây */}
                <Button type="submit" variant="contained" color="primary">
                  Change Password
                </Button>
              </Stack>
            </Paper>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;
