import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { PiStarFourFill } from "react-icons/pi";

const useStyles = makeStyles((theme) => ({
  largeText: {
    color: "#172624 !important",
    textAlign: "center",
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontSize: "42px !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    lineHeight: "51px  !important",
    textTransform: "uppercase",
    "@media (max-width: 920px)": {
      fontSize: "38px !important",
      lineHeight: "44px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "26px !important",
      lineHeight: "35px !important",
    },
  },
  body1: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "150% !important",
    color: "#172624 !important",
    textAlign: "center",
    marginTop: "8px",
    "@media (max-width: 920px)": {
      fontSize: "18px !important",
      lineHeight: "20px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "17px",
      lineHeight: "20px !important",
    },
  },
  typoSeparate: {
    marginTop: "24px",
    display: "grid",
    gap: "16px",
    marginBottom: "40px",
    "@media (max-width: 599px)": {
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  buttonBox: {
    borderRadius: "100px !important",
    background: "#EEF1EE !important",
    padding: "8px 12px !important",
    display: "flex",
    minWidth: "600px !important",
    marginBottom: "40px !important",
    "@media (max-width: 650px)": {
      display: "grid",
      background: "transparent !important",
      padding: "8px !important",
      gap: "10px",
      minWidth: "100px !important",
      width: "100% !important",
      marginBottom: "20px !important",
    },
  },
  buttonActive: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "200px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#000 !important",
    cursor: "pointer !important",
    padding: "16px !important",
    background: "#D19A1D !important",
    minWidth: "300px !important",
    minHeight:"56px !important",
    "&:hover": {
      color: "#000 !important",
      background: "#D19A1D !important",
    },
    "@media (max-width: 650px)": {
      minWidth: "100px !important",
      width: "100% !important",
    },
  },
  buttonInactive: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "200px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "15.2381px !important",
    lineHeight: "16px !important",
    minHeight:"56px !important",
    color: "#000 !important",
    cursor: "pointer !important",
    padding: "12px !important",
    background: "#EEF1EE !important",
    minWidth: "300px !important",
    "&:hover": {
      color: "#000 !important",
      background: "#EEF1EE !important",
    },
    "@media (max-width: 650px)": {
      minWidth: "100px !important",
      width: "100% !important",
    },
  },
  buttondiv: {
    display: "flex",
    justifyContent: "center",
  },
  stepdiv: {
    display: "flex",
    gap: "20px",
    marginBottom: "32px",
    alignItems: "self-start",
    "& .body1": {
      fontFamily: "'Noto Sans', sans-serif !important",
      fontStyle: "normal",
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "150% !important",
      color: "#172624 !important",
      "@media (max-width: 920px)": {
        fontSize: "16px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "16px !important",
      },
    },
    "& .title": {
      fontFamily: "Big Shoulders Display, sans-serif !important",
      fontStyle: "normal !important",
      fontWeight: "800 !important",
      fontSize: "32px !important",
      lineHeight: "50px !important",
      color: "#172624 !important",
      marginBottom:"8px",
      "@media (max-width: 920px)": {
        fontSize: "28px !important",
        lineHeight: "35px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "24px !important",
        lineHeight: "30px !important",
      },
    },
  },
}));

export default function Steps() {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState("customer");

  let customer = [
    {
      img: "/images/step1.svg",
      title: "Digital Yard Signs",
      value: "Go to Home Address on the Map",
      value1: "Hundreds of Yard Signs for each sector Pop Up",
    },
    {
      img: "/images/step2.svg",
      title: "Smart Map Search Engine",
      value: "Enter Smart Map Search for specific sector ('Fence Wanted')",
      value1: "The top neighborhood service providers Yard Signs Pop Up",
    },
    {
      img: "/images/step3.svg",
      title: "Instant Connection - Free Quote",
      value: "Click on any Yard Sign for Instant Info & Access",
      value1: "Get Free Quotes and Consult in minutes",
    },
    {
      img: "/images/step4.svg",
      title: "Create User Account for added Benefits",
      value: "Post Multiple Smart Searches for every aspect of Home Projects ",
      value1: "Get Alerts and notifications from new Pro's in Neighborhood ",
    },
  ];
  let provider = [
    {
      img: "/images/step1.svg",
      title: "Create Custom Digital Business Yard Sign  ",
      value: "Register Business Free Sign up Free Subscription ",
      value1: "Free Search Engine for Company Business Yard Sign",
    },
    {
      img: "/images/step2.svg",
      title: "Customize Business Digital Yard Sign  ",
      value: "Company Dashboard to Customize Yard Signs  ",
      value1: "Profile, Contact Info, Social Media, Logo, Image & Video Upload",
    },
    {
      img: "/images/step3.svg",
      title: "Enter 12 Best Address to Post Yard Signs",
      value:
        "Address Dashboard to Post 12 Business Yard Signs @ Best Locations ",
      value1: "Revise and Move Yard Sign Postes whenever needed",
    },
    {
      img: "/images/step4.svg",
      title: "Monthly or Annual Subscription   ",
      value:
        "Post as many signs as required per monthly/annual fee - revise/cancel anytime",
      value1: "Smart Search Analytics tells how each Yard Sign is doing  ",
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.buttondiv}>
              <Box className={classes.buttonBox}>
                <Button
                  className={
                    activeButton == "customer"
                      ? classes.buttonActive
                      : classes.buttonInactive
                  }
                  onClick={() => {
                    setActiveButton("customer");
                  }}
                >
                  Consumer
                </Button>
                <Button
                  className={
                    activeButton == "provider"
                      ? classes.buttonActive
                      : classes.buttonInactive
                  }
                  onClick={() => {
                    setActiveButton("provider");
                  }}
                >
                  Service Provider
                </Button>
              </Box>
            </div>
            <Typography className={classes.largeText}>
              New Home Improvement Map Search Engine
            </Typography>
            <div className={classes.typoSeparate}>
              <Typography className={classes.body1}>
                 <img src="images/Star.svg" style={{ marginRight: "12px" }} />{" "}
                &nbsp;&nbsp;&nbsp;Find 100's of Service Providers - Right in
                your 'Digital' Neighborhood
              </Typography>
              <Typography className={classes.body1}>
                 <img src="images/Star.svg" style={{ marginRight: "12px" }} />{" "}
                &nbsp;&nbsp;&nbsp;Connect Instantly for Free Quote & Consult 
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            {activeButton === "customer" ? (
              <img
                src="/images/customerMobile.svg"
                alt="#"
                style={{ width: "100%" }}
              />
            ) : (
              <img
                src="/images/serviceMobile.svg"
                alt="#"
                style={{ width: "100%" }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "grid", alignItems: "center" }}
          >
            <div>
              {activeButton === "customer"
                ? customer.map((values, index) => {
                    return (
                      <div className={classes.stepdiv}>
                        <img src={values.img} alt="" />
                        <div>
                          <Typography className="title">
                            {index + 1 + ". " + values.title}
                          </Typography>
                          <Typography className="body1">
                           - {values.value}
                          </Typography>
                          <Typography className="body1">
                           - {values.value1}
                          </Typography>
                        </div>
                      </div>
                    );
                  })
                : provider.map((values, index) => {
                    return (
                      <div className={classes.stepdiv}>
                        <img src={values.img} alt="" />
                        <div>
                          <Typography className="title">
                            {index + 1 + ". " + values.title}
                          </Typography>
                          <Typography className="body1">
                           - {values.value}
                          </Typography>
                          <Typography className="body1">
                           - {values.value1}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
