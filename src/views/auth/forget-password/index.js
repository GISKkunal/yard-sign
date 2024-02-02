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
import { useNavigate, Link as RouterComponent } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yep from "yup";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import Page from "src/component/Page";
import moment from "moment";

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
  Titleforget: {
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
  },
  linkText: {
    color: " #0B1426 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: '500 !important',
    lineHeight: '20px !important',
    textDecoration: "none !important",
    // [theme.breakpoints.down('md')]: {
    //   fontSize: "12px",
    // },
  },
  SubmitBtnBox: {
    textAlign: "center",
    marginTop:"26px",
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
    "@media(min-width:500px)": {
      marginTop: "8px",
    },

    "@media(min-width:600px)": {
      paddingBottom: "2px",
    },
  },
  textfiled: {
    color: "#fff !important",
    fontFamily: "Saira Semi Condensed !important",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "24px",
  },
  SubTitleforget: {
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
  checkedlogin: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#0B1426 !important"
    },
    "&.MuiCheckbox-root": {
      color: "#0B1426 !important"
    },
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
  signupspan: {
    color: "#0B1426 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600 !important",
    lineHeight: "20px",
    cursor: "pointer",
  },
}));

function Forget(props) {
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [isloading, setLoader] = useState(false);
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  
  const handleFormSubmit = async (values) => {
    sessionStorage.setItem("email", values.email);
    sessionStorage.setItem("UserID",values._id);
    setLoader(true);
    try {
      const res = await Axios({
        method: "POST",
        url: ApiConfig.forgotPassword,
        data: {
          email: values.email,
        },
      });

      if (res.data.responseCode === 200) {
        setLoader(false);
        setIsSubmit(true);
        auth.setEndtime(moment().add(3, "m").unix());
        toast.success(
          "OTP sent successfully to your registered email address."
        );
        navigate({
          pathname: "/verify-otp",
          state: { email: values.email, type:"Forget"},
        });
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
    <>
      <Page title="Forget Password">
        <Grid className="d-flex height100">
          <Box className="loginForm">
            <Box>
              <Grid container direction={"column"}>
                <Grid item className={classes.TopText}>
                  <Typography variant="h2" className={classes.Titleforget}>
                    Forgot Password?
                  </Typography>
                  <Typography variant="h4" className={classes.SubTitleforget}>No worries! Please provide your registered email address.</Typography>
                </Grid>

                <Formik
                  onSubmit={(values) => handleFormSubmit(values)}
                  initialValues={{
                    email: "",
                  }}
                  initialStatus={{
                    success: false,
                    successMsg: "",
                  }}
                  validationSchema={yep.object().shape({
                    email: yep
                      .string()
                      .email(
                        "Please enter a valid email."
                      )
                      .required("Please enter your email address.")
                      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
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
                        <label className={classes.labelall}>Email</label>
                        <TextField
                          placeholder="Please enter an email address."
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          // value={values.email}
                          name="email"
                          className={classes.TextBox}
                          error={Boolean(touched.email && errors.email)}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          InputProps={{
                            className: classes.textfiled,
                          }}
                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            fontFamily: "Saira Semi Condensed",
                          }}
                        >
                          {touched.email && errors.email}
                        </FormHelperText>
                      </Grid>


                      <Grid>
                        <Box className={classes.SubmitBtnBox} mt={2}>
                          <Button
                            type="submit"
                            className={classes.buttonbox}
                            disabled={isloading}
                          >
                            Submit
                            {isloading && <ButtonCircularProgress />}
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
    </>
  );
}

export default Forget;
