import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

import { Link } from "react-router-dom";
import * as Yup from "yup";

import images from "../../Constant/images";
import "./signUp.scss";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      id: 0,
      username: "",
      email: "",
      password: "",
      confirm: "",
      checkbox: false,
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("required!!")
        .min(3, "at least 3 character")
        .max(20, "max 20 character")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username must contain only letters and numbers"
        ),
      email: Yup.string()
        .required("required!!")
        .email("This Email is invalid !"),
      password: Yup.string()
        .required("required!!")
        .min(3, "at least 3 character")
        .max(20, "max 20 character")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username must contain only letters and numbers"
        ),
      confirm: Yup.string()
        .required("required!!")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      checkbox: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });

  const checkDisabled = (username, email, password, confirm, checkbox) => {
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirm !== "" &&
      checkbox
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box className="bg_container-signup">
      <CardMedia
        className="image-signup"
        component="img"
        src={images.register}
        alt="images"
        style={{ width: "45%", paddingRight: "100px" }}
      />
      <Box className="form-signup">
        <Stack spacing={2}>
          <Typography textAlign="center" variant="h2" color="#9376E0">
            Sign Up
          </Typography>

          <Typography textAlign="center">
            Have an account ?{" "}
            <Link
              to="/login"
              style={{ color: "#0079FF", textDecoration: "none" }}
            >
              Lets Login !
            </Link>{" "}
          </Typography>

          <TextField
            id="outlined-username-input"
            className="textfield-signup"
            name="username"
            sx={{ width: "500px" }}
            required
            label="User Name"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          {/* <FormHelperText sx={{ fontSize: "18px", color: "red" }}>
                {formik.touched.username && formik.errors.username}
              </FormHelperText> */}

          <TextField
            className="textfield-signup"
            name="email"
            required
            sx={{ width: "500px" }}
            id="outlined-email-input"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            className="textfield-signup"
            name="confirm"
            required
            sx={{ width: "500px" }}
            id="outlined-confirm-input"
            label="confirm password"
            type="password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirm && Boolean(formik.errors.confirm)}
            helperText={formik.touched.confirm && formik.errors.confirm}
          />

          <FormControlLabel
            name="checkbox"
            required
            control={
              <Checkbox
                checked={formik.values.checkbox}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="I accept the Terms or Conditions"
            error={formik.touched.checkbox && formik.errors.checkbox}
          />

          <Button
            className="Register_Button"
            sx={{ backgroundColor: "#626AD1", color: "white" }}
            disabled={checkDisabled(
              formik.values.username,
              formik.values.email,
              formik.values.password,
              formik.values.confirm,
              formik.values.checkbox
            )}
          >
            SIGN UP
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}