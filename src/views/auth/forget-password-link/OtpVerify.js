import React, { useState, useContext } from "react";
import "src/scss/main.css";
import { Box, Typography, FormControl, Grid, Button, FormHelperText } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from "formik";
import * as yep from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import ApiConfig from "src/config/APICongig";
import { CircularProgress } from "@mui/material";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import moment from "moment";
import { AuthContext } from "src/context/Auth";
import Page from "src/component/Page";
import OTPInput from "otp-input-react";

const useStyles = makeStyles((theme) => ({
  logosec: {
    textAlign: "center",
    paddingTop: "26px",
    "@media(min-width:1280px)": {
      // display: "none",
    },
  },
  TextBox: {
    borderRadius: "10px",
    background: '#171717',
    height: "50px",
    border: '1px solid #585757',
    '&::placeholder': {
      color: '#686464 !important',
      fontFamily: 'Saira Semi Condensed',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '24px',
    },
  },
  TopText: {
    textAlign: "center",
  },
  TitleOtp: {
    color: "#0B1426",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.3px",
    textTransform: "capitalize",
  },
  subTitleOtp: {
    color: "rgba(11, 20, 38, 0.5)",
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: "16px",
    fontStyle: 'normal',
    fontWeight: "400 !important",
    lineHeight: "24px",
    marginTop: "13px",
    letterSpacing: "1px",
  },
  buttonboxOtp: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    textAlign: "center",
    textTransform: "none !important",
    letterSpacing: "0.2px",
    color: "#fff !important",
    lineHeight: "20px",
    background: "#0B1426 !important",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "370px",
    height: "50px",
  },

  label: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "15px !important",
    marginBottom: "6px !important",
    color: "#D9D9D9",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "12px",
    // },
  },
  otpFormControl: {
    "& input": {
      color: '#0B1426',
      width: "44px !important",
      height: "44px !important",
      marginRight: "10px !important",
      border: "1px solid rgb(11, 20, 38, 0.5)",
      borderRadius: "8px",
      "@media(max-width:460px)": {
        width: "41px !important",
        height: "41px !important",
      },
      "@media(max-width:380px)": {
        width: "31px !important",
        height: "31px !important",
      },
    },
  },
  SubmitBtnBox: {
    textAlign: "center",
  },
}));

function Login(props) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [isLoading, setLoader] = useState(false);
  const forgetType = props?.location?.state?.type ? props?.location?.state?.type : ""

  const handleFormSubmit = async (values) => {
    try {
      setLoader(true);
      const res = await axios({
        method: "PATCH",
        url: ApiConfig.verifyOTP,
        data: {
          otp: otp.toString(),
          email: window.sessionStorage.getItem("email"),
        },
      });

      if (res.data.responseCode === 200) {
        if (forgetType === "Forget") {
          if (res.data.responseMessage === "OTP verified successfully.") {
            toast.success("OTP verified successfully.");
          } else {
            toast.success(res.data.responseMessage)
          }
        } else if (res.data.responseMessage === "OTP verified successfully.") {
          // toast.success(res.data.responseMessage)
          toast.success("Account created successfully")
        } else {
          toast.success("OTP has been verified.");
        }

        setLoader(false);
        if (forgetType === "Forget") {
          navigate("/reset-password");
        }
        else {
          navigate("/login");
        }
      } else {
        setLoader(false);
        toast.warn(res.data.responseMessage);
      }
    } catch (error) {
      setLoader(false);
      if (error.response.data.responseMessage) {
        toast.error(error.response.data.responseMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const resetotphandle = async (values) => {
    try {
      setLoader(true);
      const res = await axios({
        method: "PUT",
        url: ApiConfig.resendOTP,
        data: {
          email: sessionStorage.getItem("email"),
        },
      });
      if (res.data.responseCode === 200) {
        toast.success("OTP resent successfully, Please check your email.");
        setLoader(false);
        auth.setEndtime(moment().add(3, "m").unix());
      } else {
        toast.warn(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Please enter the correct Email");
      } else {
        toast.error(error.message);
      }
    }
  };
  const email = window.sessionStorage.getItem("email");
  const minute = auth.timeLeft?.minutes?.toString();
  const second = auth.timeLeft?.seconds?.toString();

  const [otp, setOTP] = useState("");

  return <>
    <Page title="Verify OTP">
      <Grid className="d-flex height100" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Box className="loginForm">
          <Box className="signupbox">
            <Grid container direction={"column"}>

              <Grid item className={classes.TopText}>
                <Typography variant="h3" className={classes.TitleOtp}>
                  Verification code
                </Typography>
                <Typography className={classes.subTitleOtp}>
                  A 6-digit OTP has been sent to your registered email.
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: "25px" }}></Grid>
              <Formik
                onSubmit={(values) => handleFormSubmit(values)}
                initialValues={{
                  otp: '',
                }}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={yep.object().shape({
                  otp: yep
                    .string()
                    .required("OTP is required")
                    .matches(/^[0-9]*$/, "Must be a valid OTP")
                    .max(6, "Should not exceeds 6 digits")
                    .min(6, "Must be only 6 digits"),
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
                  <Form>
                    <Grid item className="fullwidth">
                      <Box>
                        <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>

                          <FormControl fullWidth className={classes.otpFormControl} error={Boolean(touched.otp && errors.otp)}>
                            <OTPInput
                              value={otp}
                              inputVariant="standard"
                              autoComplete="off"
                              onChange={setOTP}
                              name='otp'
                              id="inputID"
                              error={Boolean(touched.otp && errors.otp)}
                              onBlur={handleBlur}
                              style={{
                                display: "flex", justifyContent: "center", width: "100%", gap: "15px",
                              }}
                              autoFocus
                              OTPLength={6}
                              otpType="number"
                            />
                          </FormControl>
                        </Box>
                        <div>
                          <FormHelperText
                            error
                            style={{
                              fontSize: "12px",
                              fontFamily: "Saira Semi Condensed",
                            }}
                          >
                            {touched.otp && errors.otp}
                          </FormHelperText>
                          <Box
                            style={{ display: "flex", justifyContent: "end", marginRight: "30px" }}
                          >
                            {auth.timeLeft?.minutes > 0 ||
                              auth.timeLeft?.seconds > 0 ? (
                              <>
                                <Box>
                                  <Typography
                                    variant="body1"
                                    style={{
                                      color: "#0B1426",
                                      fontFamily: "'Noto Sans', sans-serif",
                                  fontSize: "12px",
                                  fontStyle: "normal",
                                  fontWeight: "500",
                                  lineHeight: "24px",
                                  marginRight:"10px",
                                    }}
                                  >
                                  {minute.length > 1
                                    ? minute
                                    : "0" + minute}{" "}
                                  :{" "}
                                  {second.length > 1
                                    ? second
                                    : "0" + second}
                                </Typography>{" "}
                              </Box>
                          </>
                          ) : (
                          <>
                            <Button
                              style={{
                                color: "#FE3B3B",
                                fontFamily: "'Noto Sans', sans-serif",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: '24px',
                              }}
                            // fullWidth
                            onClick={() => {
                              resetotphandle();
                            }}
                            disabled={
                              auth.timeLeft && auth.timeLeft.seconds > 0

                            }
                            >
                            {isLoading ? (
                              <ButtonCircularProgress
                                style={{ color: 'black', height: '50px', width: '50px' }}
                              />
                            ) : (
                              'Resend OTP'
                            )}
                          </Button>
                          &nbsp;
                        </>
                            )}{" "}
                      </Box>

                      {/* <Box style={{ display: "flex", alignItems: "center", marginLeft: "25px" }}>
                            <Button
                              style={{
                                color: "#FE3B3B",
                                fontFamily: "'Noto Sans', sans-serif",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                              }}
                              onClick={resetotphandle}
                              disabled={auth.timeLeft && (auth.timeLeft.minutes > 0 || auth.timeLeft.seconds > 0)}
                            >
                              {isLoading ? (
                                <ButtonCircularProgress style={{ color: "black", height: "50px", width: "50px" }} />
                              ) : (
                                "Resend OTP"
                              )}
                            </Button>
                            &nbsp;
                            {auth.timeLeft?.minutes > 0 || auth.timeLeft?.seconds > 0 ? (
                              <Box
                                style={{
                                  marginLeft: "auto",
                                  marginRight: "30px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    paddingTop: "10px",
                                    fontWeight: "800",
                                    fontFamily: "Saira Semi Condensed",
                                  }}
                                >
                                  {minute.length > 1 ? minute : "0" + minute} :{" "}
                                  {second.length > 1 ? second : "0" + second}
                                </Typography>
                              </Box>
                            ) : null}
                          </Box> */}

                    </div>
                  </Box>
                    </Grid>

            <Box className={classes.SubmitBtnBox}>
              <Button
                className={classes.buttonboxOtp}
                style={{ marginTop: "26px", padding: "10px" }}
                onClick={handleFormSubmit}
                disabled={isLoading}
              >
                Submit
                {isLoading && <ButtonCircularProgress />}
              </Button>
              &nbsp;&nbsp;
            </Box>
          </Form>
                )}
        </Formik>
      </Grid>
    </Box>
  </Box >
      </Grid >
    </Page >
  </>;
}

export default Login;
