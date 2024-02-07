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
  Container,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useContext, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "src/context/User";
import PhoneInput from "react-phone-input-2";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "80px",
    "@media (max-width: 1280px)": {
      "& .MuiContainer-maxWidthLg": {},
    },
    "@media (max-width: 1280px)": {
      marginTop: "60px",
    },
    "@media (max-width: 920px)": {
      marginTop: "40px",
    },
    "@media (max-width: 599px)": {
      marginTop: "30px",
    },
    "& .boxCss": {
      borderRadius: "12px",
      background: "#F5F5F5",
      padding: "20px",
      marginTop: "15px",

      "@media (max-width: 920px)": {
        marginTop: "10px",
      },
      "@media (max-width: 599px)": {
        marginTop: "10px",
      },
    },
  },
  largeText: {
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "80px !important",
    lineHeight: "normal",
    color: "#172624 !important",
    textTransform: "uppercase",
    "@media (max-width: 1400px)": {
      fontSize: "72px !important",
    },
    "@media (max-width: 1280px)": {
      fontSize: "60px !important",
    },
    "@media (max-width: 920px)": {
      fontSize: "44px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "32px !important",
    },
  },
  boxTitle: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#000 !important",
    marginBottom: "12px !important",
    textTransform: "uppercase !important",
    "@media (max-width: 599px)": {
      fontSize: "15px !important",
    },
  },
  body: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "150% !important",
    color: "#000 !important",
    marginTop: "8px !important",

    "@media (max-width: 599px)": {
      fontSize: "17px !important",
    },
  },
  TextTitle: {
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "42px !important",
    lineHeight: "120% !important",
    color: "#172624 !important",
    textTransform: "uppercase !important",
    marginBottom: "8px !important",
    "@media (max-width: 920px)": {
      fontSize: "32px !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "26px",
      marginBottom: "10px",
    },
  },
  contactgrid: {
    marginTop: "44px !important",
    "@media (max-width: 920px)": {
      marginTop: "40px !important",
    },
    "@media (max-width: 599px)": {
      marginTop: "30px !important",
    },
  },
  topGapGrid: {
    marginTop: "16px !important",
    "@media (max-width: 920px)": {
      marginTop: "15px !important",
    },
    "@media (max-width: 599px)": {
      marginTop: "10px !important",
    },
  },
  SubmitBtnBox: {
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "27px",
  },

  Logintextfiled: {
    color: "#fff !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "24px !important",
    borderRadius: "10px !important",
    background: "#fff !important",
  },

  Loginlabelall: {
    color: "#000000 !important",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
    marginBottom: "7px !important",
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
      fontSize: "16px !importantx",
      lineHeight: "125% !important",
      fontWeight: "400 !important",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: "18px 16px !important",
    },
  },
  TextBoxFormControl: {
    marginTop: "6px",
    border: "1px solid rgb(184, 185, 186, 0.3)",
    borderRadius: "11px",
    "& .MuiOutlinedInput-root": {
      background: "#fff",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "18px 16px",
    },
    "& .MuiInputBase-root.Mui-disabled": {
      color: "#000",
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
    // width: "100%",
    // maxWidth: "350px",
    // height: "50px",
  },
  textarea1: {
    background: "#fff",
    border: "1px solid #b8b9ba",
    // boxShadow: "0px 3.55482px 3.55482px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "18px 16px",
    width: "-webkit-fill-available",
    resize: "none",
    color: "#000",
    fontSize: "16px",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal",
    marginTop: "6px",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function GetInTouch() {
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
  const [countryCode, setCountryCode] = useState("");

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
    firstName: "",
    lastName: "",
    companyEmail: "",
    phoneNumber: "",
    Zipcode: "",
    companyAddress: "",
    companyAddressContinued: "",
    state: selectedState,
    city: "",
    check: false,
    Message: "",
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
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.largeText}>
              Get it touch and connect with us today!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="boxCss">
              <div>
                <Typography className={classes.boxTitle}>
                  Head Office
                </Typography>
              </div>
              <div>
                <Typography className={classes.body}>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Typography>
                <Typography className={classes.body}>(406) 555-0120</Typography>
                <Typography
                  className={classes.body}
                  style={{ "word-break": "break-all" }}
                >
                  yardsignpro@gmail.com
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.contactgrid}>
            <Typography className={classes.TextTitle}>Contact us</Typography>
            <Box>
              <Formik
                onSubmit={(values) => handleFormSubmit(values)}
                initialValues={formInitialSchema}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={yep.object().shape({
                  firstName: yep
                    .string()
                    .required("Please enter your company's name"),
                  lastName: yep
                    .string()
                    .required("Please enter your company's website"),
                  companyEmail: yep
                    .string()
                    .required("Please enter your company's email"),
                  phoneNumber: yep
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
                  Message: yep
                    .string()
                    .max(100, "Maximum 100 charactors are allowed."),
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
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className={`${classes.firstGrid} ${classes.topGapGrid}`}
                      >
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
                          error={Boolean(touched.firstName && errors.firstName)}
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
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
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
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
                        <Typography className={classes.Loginlabelall}>
                          Phone Number{" "}
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
                          value={values.phoneNumber}
                          name="phoneNumber"
                          className={classes.LoginTextBox}
                          error={Boolean(
                            touched.phoneNumber && errors.phoneNumber
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
                          value={values.phoneNumber}
                          error={Boolean(
                            touched.phoneNumber && errors.phoneNumber
                          )}
                          onBlur={handleBlur}
                          onChange={(mobile, e) => {
                            setCountryCode(e.dialCode);
                            setFieldValue("phoneNumber", mobile);
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
                          {touched.phoneNumber && errors.phoneNumber}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
                        <Typography className={classes.Loginlabelall}>
                          Email
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

                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
                        <Typography className={classes.Loginlabelall}>
                          Address
                          <span style={{ color: "#FE3B3B" }}>*</span>
                        </Typography>
                        <TextField
                          placeholder="Enter Address"
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
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
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
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
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
                            // disabled
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
                          {touched.state && errors.state && `${errors.state}.`}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.topGapGrid}>
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
                      <Grid item xs={12} className={classes.topGapGrid}>
                        <Typography className={classes.Loginlabelall}>
                          Additional Information or Comments
                        </Typography>
                        <textarea
                          className={classes.textarea1}
                          placeholder="Write here"
                          rows={6}
                          cols={50}
                          value={values.Message}
                          name="Message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={100}
                          // inputProps={{ maxLength: 800 }}
                        />
                        <FormHelperText
                          error
                          style={{
                            fontSize: "12px",
                            fontFamily: "Roboto",
                          }}
                        >
                          {touched.Message && errors.Message}
                        </FormHelperText>
                        <div>
                          <Typography
                            style={{ float: "right" }}
                            className={classes.Loginlabelall}
                          >
                            {" "}
                            100 characters max
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
