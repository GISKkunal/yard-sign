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


export default function ChangePassword({ classes }) {
  const [isloading, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
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
      <Typography className="cardTitle">Change Password</Typography>
      <Formik
        onSubmit={(values) => handleFormSubmit(values)}
        initialValues={{
          CurrentPassword: "",
          password: "",
          confirmPassword: "",
        }}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={yep.object().shape({
          CurrentPassword: yep
            .string()
            .required("Please enter your current password"),
          password: yep
            .string()
            .max(16)
            .min(8, "New password must be at least 8 characters")
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
              "Confirm passwords should match"
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
          <Form style={{paddingTop:"16px"}}>
            
            <Grid container spacing={2} className={classes.formikGridContainer}>
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>Password</Typography>
                <TextField
                  placeholder="Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="inputID"
                  type={showCurrentPassword ? "text" : "password"}
                  value={values.CurrentPassword}
                  inputProps={{ minLength: 8, maxLength: 20 }}
                  name="CurrentPassword"
                  error={Boolean(
                    touched.CurrentPassword && errors.CurrentPassword
                  )}
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
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                          edge="end"
                          size="large">
                          <Box className={classes.passsec}>
                            {showCurrentPassword ? (
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
                  {touched.CurrentPassword && errors.CurrentPassword}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>New Password</Typography>
                <TextField
                  placeholder="New Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="inputID"
                  type={showPassword ? "text" : "password"}
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
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="large">
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
              </Grid>
              <Grid item xs={12} className={classes.firstGrid}>
                <Typography className={classes.Loginlabelall}>
                  Confirm Password
                </Typography>
                <TextField
                  placeholder="Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="inputID"
                  type={showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  inputProps={{ minLength: 8, maxLength: 20 }}
                  name="confirmPassword"
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
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
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                          size="large">
                          <Box className={classes.passsec}>
                            {showConfirmPassword ? (
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
                  {touched.confirmPassword && errors.confirmPassword}
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
