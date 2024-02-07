import React, { useState, useContext, useEffect } from "react";
import "src/scss/main.css";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Link,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  ListSubheader,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import {
  useNavigate,
  useLocation,
  Link as RouterComponent,
} from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as yep from "yup";
import axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
// import { AuthContext } from "src/context/Auth";
import Page from "src/component/Page";

const useStyles = makeStyles((theme) => ({
  buttonbox: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    textAlign: "center !important",
    textTransform: "none !important",
    letterSpacing: "0.2px !important",
    color: "#fff !important",
    lineHeight: "20px !important",
    background: "#0B1426 !important",
    borderRadius: "8px !important",
    width: "100% !important",
    maxWidth: "350px !important",
    height: "50px !important",
  },

  TextBox: {
    borderRadius: "8px",
    border: "1px solid rgb(11, 20, 38, 0.5)",
    fontSize: "16px",
    height: "50px",
    color: "black",
    marginTop: "10px",
    "&::placeholder": {
      color: "rgba(11, 20, 38, 0.50) !important",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "24px",
    },
    "& .MuiInputBase-input": {
      color: "black !important",
      height: "30px",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "12px",
    },
  },
  wrongPassword: {
    borderRadius: "8px",
    border: "1px solid red",
    // background: theme.palette.background.taf,
    height: "55px",
  },
  TitleReset: {
    color: "#0B1426",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.3px",
    textTransform: "capitalize",
  },
  TopText: {
    marginTop: "70px",
    display: "grid",
    gap: '10px',
    alignItems: "center",
    "@media(min-width:600px)": {
      marginTop: "0px",
    },
    "@media(min-width:300px)": {
      marginTop: "0px",
    },
  },
  SubmitBtnBox: {
    textAlign: "center",
    marginTop: "25px",
  },
  label: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "15px !important",
    marginBottom: "5px !important",
    color: "#D9D9D9",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "12px",
    // },
  },
  rememberMe: {
    "&.MuiTypography-body1": {
      color: "var(--secondary-color, #344054)",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "14px !important",
      fontStyle: "normal",
      fontWeight: "500 !important",
      lineHeight: "20px",
      // [theme.breakpoints.down('md')]: {
      //   fontSize: "13px",
      // },
    },
  },
  SubTitleReset: {
    color: "rgba(11, 20, 38, 0.5)",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "16px",
    fontStyle: 'normal',
    fontWeight: "400 !important",
    lineHeight: "24px",
  },
  labelall: {
    color: "rgba(11, 20, 38, 0.85)",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: '20px',
    marginBottom: "10px",
  },
  dontacctypo: {
    color: "#484F5C",
    textAlign: "center",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
  },

}));

function Login(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const otp = location.state?.otp;
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const [wrongPass1, setWrongPass1] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoader] = useState(false);


  const resetPaswordHandler = async (values) => {
    const formData = new FormData();
    
    // formData.append("userId",sessionStorage.getItem("UserID")? sessionStorage.getItem("UserID") : "",);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);

    try {
      setLoader(true);
      const res = await axios({
        method: "PATCH",
        url: ApiConfig.resetPassword,
        data: formData,
      });

      if (res.data.responseCode === 200) {
        toast.success(res.data.responseMessage);
        setLoader(false);
        setOpen(true);
        navigate("/login");
      } else if (res.responseCode === 500) {
        toast.error("Invalid user");
      }
    } catch (err) {
      console.log("err", err.response)
      if (err.response.data.responseMessage === "user does not exists") {
        navigate("/login")
      }
      if (err.response.data.responseCode === 400) {
        navigate("/login")
      }
      toast.error(err.response.data.responseMessage);
      setLoader(false);
    }
  };

  return (
    <Page title="Reset Password">
      <Grid className="d-flex height100">
        <Box className="loginForm">
          <Box>
            <Grid container direction={"column"}>
              <Grid item className={classes.TopText}>
                <Typography variant="h2" className={classes.TitleReset}>
                  Reset Password
                </Typography>
                <Typography variant="h4" className={classes.SubTitleReset}>No worries! Please provide your registered email address.</Typography>
              </Grid>

              <Formik
                onSubmit={(values) => resetPaswordHandler(values)}
                initialValues={{
                  // _id : "",
                  password: "",
                  confirmPassword: "",
                }}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={yep.object().shape({
                  password: yep
                    .string()
                    .max(16)
                    .min(8, "Password must be at least 8 characters")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[a-zA-Z\d@$!%*?&#]{8,16}$/,
                      "Password must contain at least 8 characters, combination of letters, numbers, and special characters required."
                    )
                    .required("Please enter your password"),
                  confirmPassword: yep
                    .string()
                    .required("Please enter confirm password")
                    .oneOf(
                      [yep.ref("password"), null],
                      "Passwords should match"
                    ),
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
                  <Form >

                    <Grid item style={{ marginTop: "10px" }}>
                      <FormControl fullWidth>
                        <Box
                          style={{ width: "100%" }}
                          className={classes.loginForm1}
                        >
                          <label className={classes.labelall}>Password</label>
                          <TextField
                            placeholder="Please enter 8-16 digit password."
                            size="small"
                            variant="outlined"
                            fullWidth
                            // id="inputID"
                            type={showPassword ? "text" : "password"}
                            value={values.password}
                            inputProps={{ minLength: 8, maxLength: 16 }}
                            name="password"
                            error={Boolean(
                              touched.password && errors.password
                            )}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputProps={{
                              className:
                                wrongPass === true
                                  ? classes.wrongPassword
                                  : classes.TextBox,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                    size="large">
                                    <Box className={classes.passsec}>
                                      {showPassword ? (
                                        <img
                                          src="/images/eye.png"
                                          style={{
                                            fontSize: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        />
                                      ) : (
                                        <img
                                          src="/images/Hide.png"
                                          style={{
                                            fontSize: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        />
                                      )}
                                    </Box>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "Saira Semi Condensed",
                            }}
                          >
                            {touched.password && errors.password}
                          </FormHelperText>
                        </Box>
                      </FormControl>
                    </Grid>

                    <Grid item style={{ marginTop: "13px" }}
                    >
                      <FormControl fullWidth>
                        <Box
                          style={{ width: "100%" }}
                          className={classes.loginForm1}
                        >
                          <label className={classes.labelall}>Confirm Password</label>
                          <TextField
                            placeholder="Please enter confirm password."
                            size="small"
                            variant="outlined"
                            fullWidth
                            // id="inputID"
                            type={showPassword1 ? "text" : "password"}
                            value={values.confirmPassword}
                            inputProps={{ minLength: 8, maxLength: 16 }}
                            name="confirmPassword"
                            error={Boolean(
                              touched.confirmPassword && errors.confirmPassword
                            )}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            InputProps={{
                              className:
                                wrongPass1 === true
                                  ? classes.wrongPassword
                                  : classes.TextBox,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword1(!showPassword1)
                                    }
                                    edge="end"
                                    size="large">
                                    <Box className={classes.passsec}>
                                      {showPassword1 ? (
                                        <img
                                          src="/images/eye.png"
                                          style={{
                                            fontSize: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        />
                                      ) : (
                                        <img
                                          src="/images/Hide.png"
                                          style={{
                                            fontSize: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        />
                                      )}
                                    </Box>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "Saira Semi Condensed",
                            }}
                          >
                            {touched.confirmPassword && errors.confirmPassword}
                          </FormHelperText>
                        </Box>
                      </FormControl>
                    </Grid>
                    <Grid>
                      <Box className={classes.SubmitBtnBox} mt={2}>
                        <Button
                          type="submit"
                          className={classes.buttonbox}
                          disabled={isLoading}
                        >
                          Submit
                          {isLoading && <ButtonCircularProgress />}
                        </Button>
                      </Box>
                      <Box style={{ display: "grid", justifyContent: "center", marginTop: "13px" }}>
                        <Typography classname={classes.dontacctypo}>Back to <span onClick={() => { navigate("/login") }} style={{ cursor: "pointer", fontWeight: "600", color: "#0B1426" }}>Login</span></Typography>
                      </Box>
                    </Grid>

                  </Form>
                )}
              </Formik>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Page>
  );
}

export default Login;
