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
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link as RouterComponent } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yep from "yup";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import Page from "src/component/Page";
import { UserContext } from "src/context/User";

const useStyles = makeStyles((theme) => ({
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
    // width: "100%",
    // maxWidth: "350px",
    // height: "50px",
  },
  LoginTextBox: {
    borderRadius: "10px",
    background: " #fff",
    fontSize: "16px",
    color: "black",
    marginTop: "6px",
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
      fontSize: "16px",
      lineHeight: "125%",
      fontWeight: "400",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: "18px 16px !important",
    },
  },
  wrongPassword: {
    borderRadius: "8px",
    border: "1px solid red",
    // background: theme.palette.background.taf,
    height: "55px",
  },
  TopText: {
    display: "grid",
    gap: "24px",
    alignItems: "center",
    "& .innerDiv": {
      display: "inline-grid",
      alignContent: "center",
      justifyItems: "center",
    },
    "& .googleButton": {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      borderRadius: "10px",
      border: "1px solid #D8DADC",
      background: "#FFF",
      padding: "16px",
      width: "-webkit-fill-available",
    },
    "& .dividerCss": {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      marginBottom: "11px",
    },
    "& .border": {
      width: "100%",
      borderBottom: "1px solid #D8DADC",
      marginBottom: "10px",
    },
  },
  ORText: {
    color: "#000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "18px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "normal !important",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "15px",
    // },
  },
  linkText: {
    color: "#000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "16px !important",
    textDecoration: "none !important",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "14px",
    // },
  },
  SubmitBtnBox: {
    textAlign: "center",
    marginTop: "24px",
    marginBottom: "30px",
  },
  label: {
    fontFamily: "'Noto Sans', sans-serif",
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
  Logintextfiled: {
    color: "#fff !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "24px",
    borderRadius: "10px",
    background: "#fff",
  },
  LoginSubTitle: {
    color: "rgba(11, 20, 38, 0.5) !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "16px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
  },
  Loginlabelall: {
    color: "#000000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
    marginBottom: "10px !important",
  },
  checkedlogin: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#0B1426 !important",
    },
    "&.MuiCheckbox-root": {
      color: "#0B1426 !important",
    },
  },
  dontacctypo: {
    color: "#000 !important",
    textAlign: "center !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
  },
}));

function Login(props) {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const classes = useStyles();
  const [isloading, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [Ip, setIP] = useState("");
  const [deviceBrower, setDeviceBowser] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const navigate = useNavigate();

  const formInitialSchema = isRememberMe
    ? {
        email: "",
        password: "",
      }
    : {
        email: window.sessionStorage.getItem("email")
          ? window.sessionStorage.getItem("email")
          : "",
        password: window.localStorage.getItem("password")
          ? window.localStorage.getItem("password")
          : "",
      };

  const handleFormSubmit = async (values) => {
    sessionStorage.setItem("email", values.email);
    setLoader(true);
    navigate("/dashboard");
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
  // useEffect(() => {
  //   const { detect } = require("detect-browser");
  //   const browser = detect();
  //   if (browser) {
  //     setDeviceBowser(browser?.name);
  //   }
  // }, []);

  useEffect(() => {
    if (
      window.localStorage.getItem("password") ||
      window.sessionStorage.getItem("email")
    ) {
      setIsRememberMe(true);
    } else {
      setIsRememberMe(false);
    }
  }, [
    window.sessionStorage.getItem("email"),
    window.localStorage.getItem("password"),
  ]);

  function rememberMe() {
    if (!isRememberMe) {
      setIsRememberMe(true);
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      window.sessionStorage.setItem("email", email?.value);
      window.localStorage.setItem("password", password?.value);
    } else {
      setIsRememberMe(false);
      window.sessionStorage.removeItem("email");
      window.localStorage.removeItem("password");
    }
  }

  return <>
    <Page title="Login">
      <Grid className="d-flex height100">
        <Box className="loginForm">
          <Box>
            <Grid container direction={"column"}>
              <Grid item className={classes.TopText}>
                <div className="innerDiv">
                  <img
                    src="images/signInBoard.svg"
                    alt=""
                    style={{
                      mixBlendMode: "multiply",
                      width: "100%",
                      maxWidth: "394px",
                    }}
                  />
                  <div className="googleButton">
                    <FcGoogle style={{ fontSize: "20px" }} />{" "}
                    <Typography className={classes.ORText}>
                      Continue with Google
                    </Typography>
                  </div>
                </div>
                <div className="dividerCss">
                  <div className="border"></div>
                  <div>
                    <Typography className={classes.ORText}>OR</Typography>
                  </div>
                  <div className="border"></div>
                </div>
              </Grid>

              <Formik
                onSubmit={(values) => handleFormSubmit(values)}
                initialValues={formInitialSchema}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={yep.object().shape({
                  email: yep
                    .string()
                    .required("Please enter your email address"),
                  password: yep
                    .string()
                    .required("Please enter your password"),
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
                    <Grid item style={{ marginTop: "13px" }}>
                      <Typography className={classes.Loginlabelall}>Email</Typography>
                      <TextField
                        placeholder="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        id="inputID"
                        size="small"
                        inputProps={{ maxLength: 256 }}
                        value={values.email}
                        name="email"
                        className={classes.LoginTextBox}
                        error={Boolean(touched.email && errors.email)}
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
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Grid>
                    <Grid item style={{ marginTop: "22px" }}>
                      <FormControl fullWidth>
                        <Box
                          style={{ width: "100%" }}
                          className={classes.loginForm1}
                        >
                          <Typography className={classes.Loginlabelall}>
                            Password
                          </Typography>
                          <TextField
                            placeholder="Password"
                            size="small"
                            variant="outlined"
                            fullWidth
                            id="inputID"
                            type={showPassword ? "text" : "password"}
                            value={values.password}
                            inputProps={{ minLength: 8, maxLength: 20 }}
                            name="password"
                            error={Boolean(
                              touched.password && errors.password
                            )}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            // InputProps={{
                            //   className: classes.Logintextfiled,
                            // }}
                            InputProps={{
                              className:
                                wrongPass === true
                                  ? classes.wrongPassword
                                  : classes.LoginTextBox,
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
                                          src="/images/Hide.svg"
                                          style={{
                                            fontSize: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            // color: "#1069C2",
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
                              fontFamily: "'Noto Sans', sans-serif",
                            }}
                          >
                            {touched.password && errors.password}
                          </FormHelperText>
                        </Box>
                      </FormControl>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ marginTop: "6px" }}
                      >
                        <Box pl={1} mt={-1}>
                          {/* <FormControlLabel
                            className={classes.rememberMe}
                            control={
                              <Checkbox
                                name="checkedC"
                                className={classes.checkedlogin}
                                checked={isRememberMe}
                                onClick={rememberMe}
                                style={{ fontSize: "14px !important" }}
                              />
                            }
                            Typography="Remember me"
                          /> */}
                        </Box>
                        <Typography variant="body2">
                          <Link
                            component={RouterComponent}
                            // to="/forget-password"
                            className={classes.linkText}
                          >
                            Forgot Password?
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid>
                      <Box className={classes.SubmitBtnBox} mt={2}>
                        <Button
                          type="submit"
                          fullWidth
                          className={classes.buttonbox}
                          disabled={isloading}
                        >
                          Sign In
                          {isloading && <ButtonCircularProgress />}
                        </Button>
                      </Box>
                      <Box
                        style={{
                          display: "grid",
                          justifyContent: "center",
                        }}
                      >
                        <Typography className={classes.dontacctypo}>
                          Don’t have an account?{" "}
                          <span
                            onClick={() => {
                              navigate("/register");
                            }}
                            style={{
                              cursor: "pointer",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Sign up
                          </span>
                        </Typography>
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
  </>;
}

export default Login;
