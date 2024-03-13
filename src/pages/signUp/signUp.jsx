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
// Import images from your constant file
import images from "../../constant/images";
// Import your CSS file
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
  // Radio Check
  const [value, setValue] = React.useState("customer");
  const [showBusinessName, setShowBusinessName] = React.useState(false);
  const [showNameFields, setShowNameFields] = React.useState(true);
  const [policyContent, setPolicyContent] = React.useState("");
  const [policyAccepted, setPolicyAccepted] = React.useState(false); // State for checkbox

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "customer") {
      setShowBusinessName(false);
      setShowNameFields(true);
    } else if (event.target.value === "party host") {
      setShowBusinessName(true);
      setShowNameFields(false);
    }
  };

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePolicyAgreement = () => {
    if (!policyAccepted) {
      if (value === "customer") {
        setPolicyContent(
          <Box>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>
                1. Account Registration:
              </span>{" "}
              Customers must provide accurate information when registering for
              an account.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>2. Data Privacy:</span> We
              prioritize the protection of customer data and only share
              information with consent or as required by law.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>3. Communication:</span>{" "}
              Customers may receive occasional communication and can opt-out of
              promotional messages.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>4. Product Usage:</span>{" "}
              Customers are expected to use our products/services responsibly
              and within their intended purpose.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>
                5. Feedback and Reviews:
              </span>{" "}
              We welcome constructive feedback and reviews from customers to
              improve our offerings.
            </Typography>
          </Box>
        );
      } else if (value === "party host") {
        setPolicyContent(
          <Box>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>1. Delivery Policy:</span>{" "}
              Ensure on-time delivery and meet delivery time requirements.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>2. Return Policy:</span>{" "}
              Provides a quick and flexible return process for customers.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>
                3. Fair Pricing Policy:
              </span>{" "}
              Ensure competitive and transparent prices, no hidden fees.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>4. Quality Policy:</span>{" "}
              Ensure that all products meet high quality standards.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <span style={{ fontWeight: "bold" }}>
                5. Information Security Policy:
              </span>{" "}
              Protect customers' personal information and ensure compliance with
              data security regulations.
            </Typography>
          </Box>
        );
      }
      handleOpen();
    }
  };

  const handlePolicyCheckboxChange = (event) => {
    setPolicyAccepted(event.target.checked);
  };

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
        .required("Please enter your username.")
        .min(3, "The user name field requires a minimum of 3 characters.")
        .max(20, "The user name field requires a maximum of 20 characters.")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "The username must contain only letters and numbers."
        ),
      email: Yup.string()
        .required("Please enter your email.")
        .email("The email is invalid. Please try again."),
      password: Yup.string()
        .required("Please enter your password.")
        .min(3, "The email field requires a minimum of 3 characters.")
        .max(20, "The email field requires a maximum of 20 characters.")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "The password must contain only letters and numbers."
        ),
      firstname: Yup.string().required("Please enter your firstname."),
      lastname: Yup.string().required("Please enter your lastname."),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "The phone number must contain only digits.")
        .min(10, "Phone number must be at least 10 digits.")
        .max(12, "Phone number must not exceed 12 digits.")
        .required("Please enter your phone number."),
      address: Yup.string().required("Please enter your address."),
      businessname: Yup.string().required(
        "Please enter the name of your business."
      ),
      confirm: Yup.string()
        .required("Please confirm your password.")
        .oneOf(
          [Yup.ref("password"), null],
          "The confirmed password must match the original password."
        ),
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
      (!showBusinessName || businessname !== "") &&
      (!showNameFields || (firstname !== "" && lastname !== "")) &&
      confirm !== "" &&
      policyAccepted // Kiểm tra checkbox đã được chọn hay không
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
        backgroundImage: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <CardMedia
        className="image-signup"
        component="img"
        src={images.cake}
        alt="images"
        style={{
          width: "25%",
          paddingRight: "50px",
          marginRight: "-20px",
        }}
      /> */}
      <Box
        className="form-signup"
        style={{ marginTop: "-65px", maxWidth: "500px", margin: "auto" }}
      >
        <Stack spacing={2}>
          <Typography textAlign="center" variant="h2" color="#9376E0">
            Sign Up
          </Typography>

          <Typography textAlign="center">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#0079FF", textDecoration: "none" }}
            >
              Let's Login!
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
          {showBusinessName && (
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
                formik.touched.businessname &&
                Boolean(formik.errors.businessname)
              }
              helperText={
                formik.touched.businessname && formik.errors.businessname
              }
            />
          )}
          {/* Grid for First Name and Last Name */}
          {showNameFields && (
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
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
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
          )}

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
                onClick={handlePolicyAgreement}
                required
                control={
                  <Checkbox
                    checked={policyAccepted}
                    onChange={handlePolicyCheckboxChange}
                  />
                }
                label="I agree to all website terms and policies."
              />
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open} style={{ width: "40%" }}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h4"
                      component="h2"
                      align="center"
                      marginTop={-2}
                      marginBottom={5}
                      sx={{ fontWeight: "bold" }}
                    >
                      {value === "customer"
                        ? "Customer Policies"
                        : "Party Host Policies"}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      {policyContent}
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
              formik.values.businessname,
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
