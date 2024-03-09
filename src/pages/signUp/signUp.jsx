import {
  Box,
  Button,
  CardMedia,
  Stack,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import images from "../../constant/images";
import "./signUp.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignUp() {
  //Radio Check
  const [value, setValue] = React.useState("customer");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      id: 0,
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      phone: "",
      address: "",
      businessname: "",
      confirm: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required("required!!")
        .min(3, "at least 3 character")
        .max(200, "max 20 character")
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
        .max(200, "max 20 character")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Username must contain only letters and numbers"
        ),
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number must be at least 10 characters")
        .max(12, "Phone number must not exceed 12 characters")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      businessname: Yup.string().required("Business name is required"),
      confirm: Yup.string()
        .required("required!!")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
  });

  const checkDisabled = (
    username,
    email,
    password,
    firstname,
    lastname,
    phone,
    address,
    businessname,
    confirm
  ) => {
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      firstname !== "" &&
      lastname !== "" &&
      phone !== "" &&
      address !== "" &&
      businessname !== "" &&
      confirm !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Box
      className="bg_container-signup"
      style={{
        backgroundImage: `url(${images.login_bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardMedia
        className="image-signup"
        component="img"
        src={images.cake}
        alt="images"
        style={{
          width: "45%",
          paddingRight: "50px",
          marginRight: "-20px",
        }}
      />
      <Box
        className="form-signup"
        style={{ marginTop: "-65px", maxWidth: "500px", margin: "auto" }}
      >
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
            sx={{ width: "100%" }}
            size="small"
            required
            label="User Name"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            className="textfield-signup"
            name="password"
            required
            sx={{ width: "100%" }}
            size="small"
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
            sx={{ width: "100%" }}
            size="small"
            id="outlined-confirm-input"
            label="Confirm password"
            type="password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirm && Boolean(formik.errors.confirm)}
            helperText={formik.touched.confirm && formik.errors.confirm}
          />

          <TextField
            className="textfield-signup"
            name="email"
            required
            sx={{ width: "100%" }}
            size="small"
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
            name="businessname"
            required
            sx={{ width: "100%" }}
            size="small"
            id="outlined-email-input"
            label="Name of your Business"
            type="text"
            value={formik.values.businessname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessname && Boolean(formik.errors.businessname)
            }
            helperText={
              formik.touched.businessname && formik.errors.businessname
            }
          />
          {/* Grid for First Name and Last Name */}
          <Grid container>
            <Grid item xs={6}>
              <TextField
                className="textfield-signup"
                name="firstname"
                required
                sx={{ width: "95%" }}
                size="small"
                id="outlined-firstname-input"
                label="First Name"
                type="text"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textfield-signup"
                name="lastname"
                required
                sx={{ width: "100%" }}
                size="small"
                id="outlined-lastname-input"
                label="Last Name"
                type="text"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Grid>
          </Grid>

          {/* Grid for Phone and Address */}
          <Grid container>
            <Grid item xs={6}>
              <TextField
                className="textfield-signup"
                name="phone"
                required
                sx={{ width: "95%" }}
                size="small"
                id="outlined-phone-input"
                label="Phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textfield-signup"
                name="address"
                required
                sx={{ width: "100%" }}
                size="small"
                id="outlined-address-input"
                label="Address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
          </Grid>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <div>
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="Customer"
                />
                <FormControlLabel
                  value="party host"
                  control={<Radio />}
                  label="Party Host"
                />
              </div>
              <FormControlLabel
                onClick={handleOpen}
                required
                control={<Checkbox />}
                label="I agree with all policy about website"
              />
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Policy
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Policy decription
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </RadioGroup>
          </FormControl>
          <Button
            className="Register_Button"
            sx={{ backgroundColor: "#626AD1", color: "white" }}
            disabled={checkDisabled(
              formik.values.username,
              formik.values.email,
              formik.values.password,
              formik.values.firstname,
              formik.values.lastname,
              formik.values.phone,
              formik.values.address,
              formik.values.confirm
            )}
          >
            SIGN UP
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
