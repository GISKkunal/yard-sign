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
import makeStyles from '@mui/styles/makeStyles';
import { Form, Formik } from "formik";
import React, { useState, useContext } from "react";
import * as yep from "yup";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import { UserContext } from "src/context/User";

export default function ChangeEmail({ classes }) {
    const [isloading, setLoader] = useState(false);
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const [showPasswordEmail, setShowPasswordEmail] = useState(false);
  const handleFormSubmit = async (values) => {
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
    <Box className="cardCss">
      <Typography className="cardTitle">Change Email ID</Typography>
      <Formik
        onSubmit={(values) => handleFormSubmit(values)}
        initialValues={{
          email: "",
          password: "",
          newEmail: "",
        }}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={yep.object().shape({
          email: yep
            .string()
            .email(
              "You have entered an invalid email address. Please try again"
            )
            .required("Please enter your email address.")
            .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
          password: yep.string().required("Please enter your password"),
          newEmail: yep
            .string()
            .email(
              "You have entered an invalid email address. Please try again"
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
          <Form style={{paddingTop:"16px"}}>
            
            <Grid container spacing={2} className={classes.formikGridContainer}>
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>
                  Current Email Address
                </Typography>
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
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>
                  New Email Address
                </Typography>
                <TextField
                  placeholder="New Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  id="inputID"
                  size="small"
                  inputProps={{ maxLength: 256 }}
                  value={values.newEmail}
                  name="newEmail"
                  className={classes.LoginTextBox}
                  error={Boolean(touched.newEmail && errors.newEmail)}
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
                  {touched.newEmail && errors.newEmail}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>Password</Typography>
                <TextField
                  placeholder="Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="inputID"
                  type={showPasswordEmail ? "text" : "password"}
                  value={values.password}
                  inputProps={{ minLength: 8, maxLength: 20 }}
                  name="password"
                  error={Boolean(touched.password && errors.password)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  // InputProps={{
                  //   className: classes.Logintextfiled,
                  // }}
                  InputProps={{
                    className: classes.LoginTextBox,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPasswordEmail(!showPasswordEmail)
                          }
                          edge="end"
                          size="large">
                          <Box className={classes.passsec}>
                            {showPasswordEmail ? (
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
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
