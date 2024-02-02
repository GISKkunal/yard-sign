import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import Page from "src/component/Page";
import React, { useState, useContext, useEffect } from "react";
import "src/scss/main.css";
import { useNavigate, Link as RouterComponent } from "react-router-dom";
import * as yep from "yup";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import { UserContext } from "src/context/User";
import { IoMdArrowBack } from "react-icons/io";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

const useStyles = makeStyles((theme) => ({
  headbox: {
    padding: "42px 80px 20px 80px",
    "@media (max-width: 920px)": {
      padding: "30px 40px 20px 40px",
    },
    "@media (max-width: 599px)": {
      padding: "20px 20px 20px 20px",
    },
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "504px",
      borderRadius: "9px",
    },
    "& .cardCss": {
      borderRadius: "20px",
      background: " #F5F5F5",
      width: "-webkit-fill-available",
      padding: "20px",
    },
    "& .cardSubText": {
      fontFamily: "'Noto Sans', sans-serif !important",
      fontStyle: "normal !important",
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "normal !important",
      color: "#172624 !important",

      "@media (max-width: 920px)": {},
      "@media (max-width: 599px)": {},
    },
    "& .cardLink": {
      fontFamily: "'Noto Sans', sans-serif !important",
      fontStyle: "normal !important",
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "normal !important",
      color: "#0593FC !important",

      "@media (max-width: 920px)": {},
      "@media (max-width: 599px)": {
        wordBreak: "break-all !important",
      },
    },
    "& .cardTitle": {
      fontFamily: "Big Shoulders Display, sans-serif !important",
      fontStyle: "normal !important",
      fontWeight: "800 !important",
      fontSize: "20px !important",
      lineHeight: "23px !important",
      color: "#172624 !important",
      textTransform: "uppercase !important",
      "@media (max-width: 920px)": {
        fontSize: "19px !important",
        lineHeight: "23px !important",
        fontWeight: "600 !important",
        marginTop: "8px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "18px !important",
        lineHeight: "20px !important",
      },
    },
    "& .gridTextDiv": {
      display: "grid",
      gap: "15px",
    },
    "& .flexdiv": {
      display: "flex",
      gap: "23px",
      "@media (max-width: 599px)": {
        display: "grid",
        gap: "15px",
      },
    },
    "& .title": {
      color: "#172624 !important",
      fontFamily: "Big Shoulders Display, sans-serif !important",
      fontSize: "42px !important",
      fontStyle: "normal !important",
      fontWeight: "800 !important",
      lineHeight: "51px !important",
      textTransform: "uppercase !important",
      "@media (max-width: 920px)": {
        fontSize: "38px !important",
        lineHeight: "44px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "26px !important",
        lineHeight: "35px !important",
        marginBottom: "10px !important",
      },
    },
    "& .flexBox": {
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width: 599px)": {
        display: "block",
      },
    },
  },
  Explore: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    color: "#fff !important",
    cursor: "pointer",
    padding: "12px 24px !important",
    background: "#172624 !important",
    minHeight: "56px !important",
    minWidth: "207px !important",
    "&:hover": {
      color: "#fff !important",
      background: "#172624 !important",
    },
    "@media (max-width: 540px)": {
      width: "-webkit-fill-available !important",
      marginTop: "20px !important",
    },
  },
  Loginlabelall: {
    color: "#000000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
  },
  LoginTextBox: {
    borderRadius: "10px",
    background: " #fff",
    fontSize: "16px",
    color: "black",
    marginTop: "6px !important",
    "&::placeholder": {
      color: "rgba(0, 0, 0, 0.50) !important",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "125%",
    },
    "& .MuiInputBase-input": {
      color: "black !important",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "16px !important",
      lineHeight: "125% !important",
      fontWeight: "400 !important",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: "18px 16px !important",
    },
  },
  TextBoxFormControl: {
    "& .MuiOutlinedInput-root": {
      background: "#fff",
    },
    "& .MuiOutlinedInput-input": {
      padding: "18px 16px",
    },
  },
  SubmitBtnBox: {
    textAlign: "center",
    marginTop: "30px",
    "@media (max-width: 600px)": {
      marginTop: "20px",
    },
  },
  buttonbox: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    textAlign: "center !important",
    textTransform: "none !important",
    letterSpacing: "0.2px !important",
    color: "#fff !important",
    lineHeight: "16px !important",
    background: "#172624 !important",
    borderRadius: "6px !important",
    padding: "20px !important",
    textTransform: "uppercase !important",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "14px",
    // },
    maxWidth: "500px !important",
    // maxWidth: "350px",
    // height: "50px",
  },
  checkDiv: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginLeft: "0px",
    "& .MuiSvgIcon-root": {
      color: "#172624 !important",
    },
  },
  formikGridContainer: {
    marginTop: "8px",
  },
  firstGrid: {
    marginTop: "16px !important",
    "@media (max-width: 600px)": {
      marginTop: "10px !important",
    },
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  const [isloading, setLoader] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    sessionStorage.setItem("email", values.email);
    setLoader(true);

    try {
      const res = await Axios({
        method: "POST",
        url: ApiConfig.login,
        data: {
          email: values.email,
          password: values.password,
        },
      });

      if (res.data.responseCode === 200) {
        toast.success("You are successfully logged in.");
        window.localStorage.setItem("token", res.data.result.token);
        auth.userLogIn(res.data.result.token, true);
        user.getViewMyProfile();
        if (
          res.data.result.kycStatus === "APPROVE" ||
          res.data.result.kycStatus === "PENDING"
        ) {
          navigate("/dashboard");
        } else {
          navigate("/kyc");
        }
      } else if (res.data.status === 500) {
        setLoader(false);
        toast.error(
          "Cannot reach internet. Please check your device internet connections."
        );
      } else {
        toast.warn(res.data.message);
      }
    } catch (error) {
      console.log("ERROR", error);
      setLoader(false);
      if (error.res) {
        toast.error("Email or Password not Correct");
      } else {
        toast.error(error.response.data.responseMessage);
      }
    }
  };

  return (
    <Page title="Setting">
      <Box className={classes.headbox}>
        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className="flexBox">
                <Typography className="title">Add Services</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="cardCss">
                <div className="flexdiv">
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src="images/profilePic.svg"
                        alt=""
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <Button className={classes.Explore}>
                      Upload Logo Image
                    </Button>
                  </div>
                  <div className="gridTextDiv">
                    <Typography className="cardTitle">None None</Typography>
                    <Typography className="cardLink">
                      https://www.millerfence.com/
                    </Typography>
                    <Typography className="cardSubText">
                      Subscription Type: None
                    </Typography>
                    <Typography className="cardSubText">
                      Property Listed: 07/10
                    </Typography>
                  </div>
                </div>
                <Formik
                  onSubmit={(values) => handleFormSubmit(values)}
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    businessName: "",
                    sector: "",
                    check: false,
                  }}
                  initialStatus={{
                    success: false,
                    successMsg: "",
                  }}
                  validationSchema={yep.object().shape({
                    firstName: yep
                      .string()
                      .required("Please enter your first name"),
                    lastName: yep
                      .string()
                      .required("Please enter your last website"),
                    businessName: yep
                      .string()
                      .required("Please enter your business name"),
                    sector: yep.string().required("Please enter your sector"),
                    check: yep.bool(),
                  })}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    touched,
                    values,
                    setFieldValue,
                  }) => (
                    <Form style={{ paddingTop: "16px" }}>
                      <Grid
                        container
                        spacing={2}
                        className={classes.formikGridContainer}
                      >
                        <Grid xs={12} sm={6} item className={classes.firstGrid}>
                          <Typography className={classes.Loginlabelall}>
                            First Name
                            <span style={{ color: "#FE3B3B" }}>*</span>
                          </Typography>
                          <TextField
                            placeholder="Enter First Name"
                            type="text"
                            variant="outlined"
                            fullWidth
                            id="inputID"
                            size="small"
                            inputProps={{ maxLength: 256 }}
                            value={values.firstName}
                            name="firstName"
                            className={classes.LoginTextBox}
                            error={Boolean(
                              touched.firstName && errors.firstName
                            )}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            InputProps={{
                              className: classes.Logintextfiled,
                            }}
                          />
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "'Noto Sans', sans-serif",
                            }}
                          >
                            {touched.firstName && errors.firstName}
                          </FormHelperText>
                        </Grid>
                        <Grid xs={12} sm={6} item className={classes.firstGrid}>
                          <Typography className={classes.Loginlabelall}>
                            Last Name
                            <span style={{ color: "#FE3B3B" }}>*</span>
                          </Typography>
                          <TextField
                            placeholder="Enter Last Name"
                            type="text"
                            variant="outlined"
                            fullWidth
                            id="inputID"
                            size="small"
                            inputProps={{ maxLength: 256 }}
                            value={values.lastName}
                            name="lastName"
                            className={classes.LoginTextBox}
                            error={Boolean(touched.lastName && errors.lastName)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            InputProps={{
                              className: classes.Logintextfiled,
                            }}
                          />
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "'Noto Sans', sans-serif",
                            }}
                          >
                            {touched.lastName && errors.lastName}
                          </FormHelperText>
                        </Grid>
                        <Grid xs={12} sm={6} item className={classes.firstGrid}>
                          <Typography className={classes.Loginlabelall}>
                            Business Name
                            <span style={{ color: "#FE3B3B" }}>*</span>
                          </Typography>
                          <TextField
                            placeholder="Enter Business Name"
                            type="email"
                            variant="outlined"
                            fullWidth
                            id="inputID"
                            size="small"
                            inputProps={{ maxLength: 256 }}
                            value={values.businessName}
                            name="businessName"
                            className={classes.LoginTextBox}
                            error={Boolean(
                              touched.businessName && errors.businessName
                            )}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            InputProps={{
                              className: classes.Logintextfiled,
                            }}
                          />
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "'Noto Sans', sans-serif",
                            }}
                          >
                            {touched.businessName && errors.businessName}
                          </FormHelperText>
                        </Grid>

                        <Grid xs={12} sm={6} item className={classes.firstGrid}>
                          <div style={{ width: "-webkit-fill-available" }}>
                            <Typography
                              className={classes.Loginlabelall}
                              style={{ marginBottom: "7px" }}
                            >
                              {"Sector"}
                              <span style={{ color: "#FE3B3B" }}>*</span>
                            </Typography>
                            <FormControl
                              className={classes.TextBoxFormControl}
                              fullWidth
                              variant="outlined"
                            >
                              <Select
                                margin="dense"
                                variant="outlined"
                                displayEmpty
                                disabled={isloading}
                                value={values.sector}
                                InputProps={{
                                  className: classes.TextBox,
                                }}
                                error={Boolean(touched.sector && errors.sector)}
                                onChange={(e) => {
                                  setSelectedCity(e.target.value);
                                  setFieldValue("sector", e.target.value);
                                }}
                              >
                                <MenuItem
                                  value=""
                                  disabled
                                  style={{
                                    fontSize: "12px",
                                    opacity: "0.5 !important",
                                  }}
                                >
                                  Select
                                </MenuItem>
                                {cities.map((data) => {
                                  return (
                                    <MenuItem
                                      value={data.name}
                                      style={{ fontSize: "12px" }}
                                    >
                                      {data.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                            <FormHelperText error>
                              {touched.sector &&
                                errors.sector &&
                                `${errors.sector}.`}
                            </FormHelperText>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.firstGrid}>
                          <div className={classes.checkDiv}>
                            <Checkbox
                              type="checkbox"
                              name="check"
                              onChange={handleChange}
                              value={values.check}
                              style={{ width: "20px", height: "20px" }}
                            />
                            <Typography className={classes.alreadyAccount}>
                              Hide personal name from public/community
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <Box className={classes.SubmitBtnBox} mt={2}>
                            <Button
                              type="submit"
                              fullWidth
                              className={classes.buttonbox}
                              disabled={isloading}
                            >
                              Submit
                              {isloading && <ButtonCircularProgress />}
                            </Button>
                          </Box>
                          {/* <Box
                          style={{
                            display: "grid",
                            justifyContent: "center",
                          }}
                        >
                          <Typography className={classes.dontacctypo}>
                            Already have an account?{" "}
                            <span
                              onClick={() => {
                                navigate("/login");
                              }}
                              style={{
                                cursor: "pointer",
                                fontWeight: "700",
                                color: "#000",
                              }}
                            >
                              Sign In
                            </span>
                          </Typography>
                        </Box> */}
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: "15px" }}>
              <ChangePassword classes={classes} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: "15px" }}>
              <ChangeEmail classes={classes} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
