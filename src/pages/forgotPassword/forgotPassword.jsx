import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./forgotPassword.scss";
import images from "../../constant/images";

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

  const handleBack = () => {
    setStep(step - 1);
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("required!!")
        .min(3, "at least 3 character")
        .max(20, "max 20 character")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Password must contain only letters and numbers"
        ),

      confirm: Yup.string()
        .required("required!!")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
  });

  return (
    <Box
      className="bg_container-fg"
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="form-fg">
        {step === 1 && (
          <form className="reset_password__step1" onSubmit={handleEmailSubmit}>
            <Paper
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Màu nền của form
                borderRadius: "10px", // Bo tròn góc form
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Đổ bóng cho form
                display: "flex",
                justifyContent: "center",
                width: "600px",
                height: "300px",
                margin: "auto",
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
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  width="500px"
                >
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Stack>
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
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Màu nền của form
                borderRadius: "10px", // Bo tròn góc form
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Đổ bóng cho form
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "400px",
                margin: "auto",
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
                  . Please check your mail and enter your confirm code
                </Typography>
                <TextField
                  type="text"
                  label="Your Code"
                  sx={{ width: "500px" }}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                  width="500px"
                >
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Confirm
                  </Button>
                </Stack>
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
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Màu nền của form
                borderRadius: "10px", // Bo tròn góc form
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Đổ bóng cho form
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "400px",
                margin: "auto",
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
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <TextField
                  className="textfield-signup"
                  name="confirm"
                  required
                  sx={{ width: "500px" }}
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                  value={formik.values.confirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirm && Boolean(formik.errors.confirm)
                  }
                  helperText={formik.touched.confirm && formik.errors.confirm}
                />
                {/* Hiển thị thông báo xác nhận email ở đây */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                  width="500px"
                >
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Change Password
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;
