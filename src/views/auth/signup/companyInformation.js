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
  Checkbox,
  Select,
  MenuItem,
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
import { UserContext } from "src/context/User";
import { IoMdArrowBack } from "react-icons/io";
import PhoneInput from "react-phone-input-2";

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
    marginBottom: "27px",
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

  Loginlabelall: {
    color: "#000000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
    marginBottom: "10px !important",
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
  formControlBox: {
    display: "grid",
    gap: "5px",
    marginTop: "22px",
    "& .MuiFormControlLabel-root": {},
  },
  TextBoxFormControl: {
    "& .MuiOutlinedInput-root": {
      background: "#fff",
    },
    "& .MuiOutlinedInput-input": {
      padding: "18px 16px",
    },
  },
  alreadyAccount: {
    color: "rgba(0, 0, 0) !important",
    textAlign: "center",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
  },
  checkDiv: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "& .MuiSvgIcon-root": {
      color: "#172624 !important",
    },
  },
  checkBackgroundDiv: {
    maxWidth: "289px",
    padding: "18px 16px",
    borderRadius: "10px",
    border: "1px solid #D8DADC",
    background: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexDiv: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  titleText: {
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "20px",
    lineHeight: "normal !important",
    color: "#172624 !important",
    textTransform: "uppercase",
    "@media (max-width: 920px)": {
      fontSize: "18px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "16px !important",
    },
  },
  firstGrid: {
    marginTop: "40px",
    "@media (max-width: 920px)": {
      marginTop: "30px",
    },
    "@media (max-width: 599px)": {
      marginTop: "30px",
    },
  },
  rotateAnimation: {
    animation: "$rotate 1.5s",
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default function CompanyInformation() {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedState, setSelectedState] = useState("Massachusetts");
  const [selectedCity, setSelectedCity] = useState("");
  const [countries, setCountries] = useState([]); // Your country JSON data
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isloading, setLoader] = useState(false);
  const [isRotating, setRotating] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  const handleRotatingClick = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 1500);
  };
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

  const formInitialSchema = {
    companyName: "",
    companyWebsite: "",
    companyEmail: "",
    companyPhone: "",
    Zipcode: "",
    companyAddress: "",
    companyAddressContinued: "",
    state: selectedState,
    city: "",
    check: false,
  };

  useEffect(() => {
    const fetchData = async () => {
      const statesResponse = await Axios.get("/static/json/states.json");
      const statesData = statesResponse.data.states;

      if (selectedCountry) {
        const countryFromCode = countries.find(
          (data) => data.name == selectedCountry
        );

        if (true) {
          let CountryValue = "231";
          const statesOfSelectedCountry = statesData.filter(
            (state) => state.country_id === CountryValue
          );
          setSelectedState("");
          setStates(statesOfSelectedCountry);
        }
      }
    };

    fetchData();
  }, [selectedCountry]);
  useEffect(() => {
    const fetchData = async () => {
      const statesResponse = await Axios.get("/static/json/cities.json");
      const cityData = statesResponse.data.cities;

      if (selectedState) {
        const stateFromCode = states.find((data) => data.name == selectedState);

        if (true) {
          let CountryValue = "3943";

          const cityOfSelectedState = cityData.filter(
            (city) => city.state_id === CountryValue
          );

          setSelectedCity("");
          setCities(cityOfSelectedState);
        }
      }
    };

    fetchData();
  }, [selectedState]);
  return (
    <>
      <Page title="signUp">
        <Grid className="d-flex height100">
          <Box className="loginForm">
            <Box>
              <Grid container direction={"column"}>
                <Grid item className={classes.TopText}>
                  <div className={classes.flexDiv}>
                    <IoMdArrowBack
                      style={{ fontSize: "22px" }}
                      onClick={() => {
                        navigate("/register");
                      }}
                    />
                    <Typography className={classes.titleText}>
                      Company Information
                    </Typography>
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
                    companyName: yep
                      .string()
                      .required("Please enter your company's name"),
                    companyWebsite: yep
                      .string()
                      .required("Please enter your company's website"),
                    companyEmail: yep
                      .string()
                      .required("Please enter your company's email"),
                    companyPhone: yep
                      .string()
                      .required("Please enter your company's phone number"),
                    Zipcode: yep.string().required("Please enter zip code"),
                    companyAddress: yep
                      .string()
                      .required("Please enter your company's address"),
                    companyAddressContinued: yep.string(),
                    state: yep.object().nullable(),
                    // .required("Select a state"),
                    city: yep.string().required("Please enter your city"),
                    check: yep
                      .bool()
                      .oneOf(
                        [true],
                        "Please check the box to confirm you are not a robot."
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
                    <Form>
                      <Grid item className={classes.firstGrid}>
                        <Typography className={classes.Loginlabelall}>
                          Company Name
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="Enter Company Name"
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.companyName}
                          name="companyName"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyName && errors.companyName
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
                          {touched.companyName && errors.companyName}
                        </FormHelperText>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <Typography className={classes.Loginlabelall}>
                          Company Website
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="https://"
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.companyWebsite}
                          name="companyWebsite"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyWebsite && errors.companyWebsite
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
                          {touched.companyWebsite && errors.companyWebsite}
                        </FormHelperText>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <Typography className={classes.Loginlabelall}>
                          Company Email
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="Enter Email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.companyEmail}
                          name="companyEmail"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyEmail && errors.companyEmail
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
                          {touched.companyEmail && errors.companyEmail}
                        </FormHelperText>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <Typography className={classes.Loginlabelall}>
                          Company Phone
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        {/* <TextField
                          placeholder="Enter Phone Number"
                          type="number"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          onWheel={() => document.activeElement.blur()}
                          inputProps={{ maxLength: 256 }}
                          value={values.companyPhone}
                          name="companyPhone"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyPhone && errors.companyPhone
                          )}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          InputProps={{
                            className: classes.Logintextfiled,
                          }}
                        /> */}
                        <PhoneInput
                          country={"us"}
                          inputStyle={{
                            background: "#fff",
                            width: "-webkit-fill-available",
                            color: "#000",
                            border: "1px solid rgb(184, 185, 186)",
                            padding: "18px 16px",
                            marginTop: "5px",
                            borderRadius: "10px",
                          }}
                          value={values.companyPhone}
                          error={Boolean(
                            touched.companyPhone && errors.companyPhone
                          )}
                          onBlur={handleBlur}
                          onChange={(mobile, e) => {
                            setCountryCode(e.dialCode);
                            setFieldValue("companyPhone", mobile);
                          }}
                          className={`textFeilds textHeight ${classes.selectedFlag}`}
                          InputProps={{
                            className: classes.TextBox,
                          }}
                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            fontFamily: "'Noto Sans', sans-serif",
                          }}
                        >
                          {touched.companyPhone && errors.companyPhone}
                        </FormHelperText>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <Typography className={classes.Loginlabelall}>
                          Company Address
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="Enter Full Address"
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.companyAddress}
                          name="companyAddress"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyAddress && errors.companyAddress
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
                          {touched.companyAddress && errors.companyAddress}
                        </FormHelperText>
                        <TextField
                          placeholder="Company Address Continued"
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.companyAddressContinued}
                          name="companyAddressContinued"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.companyAddressContinued &&
                              errors.companyAddressContinued
                          )}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          onSubmit={handleSubmit}
                          InputProps={{
                            className: classes.Logintextfiled,
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        style={{
                          marginTop: "22px",
                          display: "flex",
                          /* justify-content: space-around; */
                          gap: "20px",
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <Typography className={classes.Loginlabelall}>
                            {"City"}
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
                              value={values.city}
                              InputProps={{
                                className: classes.TextBox,
                              }}
                              onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setFieldValue("city", e.target.value);
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
                            {touched.city && errors.city && `${errors.city}.`}
                          </FormHelperText>
                        </div>
                        <div style={{ width: "100%" }}>
                          <Typography className={classes.Loginlabelall}>
                            {"State"}
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
                              placeholder="Select Country"
                              displayEmpty
                              // disabled={isloading}
                              disabled
                              value={values.state}
                              InputProps={{
                                className: classes.TextBox,
                              }}
                              onChange={(e) => {
                                setSelectedState(e.target.value);
                                setFieldValue("state", e.target.value);
                              }}
                            >
                              {states.map((data) => {
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
                            {touched.state &&
                              errors.state &&
                              `${errors.state}.`}
                          </FormHelperText>
                        </div>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <Typography className={classes.Loginlabelall}>
                          Zipcode<span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="Enter Zipcode"
                          type="text"
                          variant="outlined"
                          fullWidth
                          id="inputID"
                          size="small"
                          inputProps={{ maxLength: 256 }}
                          value={values.Zipcode}
                          name="Zipcode"
                          className={classes.LoginTextBox}
                          error={Boolean(touched.Zipcode && errors.Zipcode)}
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
                          {touched.Zipcode && errors.Zipcode}
                        </FormHelperText>
                      </Grid>
                      <Grid item style={{ marginTop: "22px" }}>
                        <div className={classes.checkBackgroundDiv}>
                          <div className={classes.checkDiv}>
                            <Checkbox
                              type="checkbox"
                              name="check"
                              onChange={handleChange}
                              value={values.check}
                              style={{ width: "20px", height: "20px" }}
                            />
                            <Typography className={classes.alreadyAccount}>
                              I am not a robot
                            </Typography>
                          </div>
                          <div>
                            <img
                              src="images/loadingIcon.svg"
                              alt="#"
                              className={
                                isRotating ? classes.rotateAnimation : ""
                              }
                              onClick={handleRotatingClick}
                            />
                          </div>
                        </div>
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            fontFamily: "'Noto Sans', sans-serif",
                          }}
                        >
                          {touched.check && errors.check}
                        </FormHelperText>
                      </Grid>
                      <Grid>
                        <Box className={classes.SubmitBtnBox} mt={2}>
                          <Button
                            type="submit"
                            fullWidth
                            className={classes.buttonbox}
                            disabled={isloading}
                          >
                            Create Account
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
