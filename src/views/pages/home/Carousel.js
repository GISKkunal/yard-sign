import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { FaArrowDownLong } from "react-icons/fa6";

const useStyles = makeStyles((theme) => ({
  body1: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "150% !important",
    color: "#172624 !important",
    textAlign: "center",
    "@media (max-width: 920px)": {
      fontSize: "18px !important",
      lineHeight: "20px !important",
      fontWeight: "600 !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "17px !important",
      lineHeight: "20px !important",
    },
  },
  carousalStyle: {
    padding: "30px 0 0 0",
    display: "grid",
    gap: "24px",
    "@media (max-width: 920px)": {
      padding: "30px 0 0 0",
    },
    "@media (max-width: 599px)": {
      padding: "20px 0 0 0",
    },
  },

  textcss: {
    color: "#172624 !important",
    textAlign: "center",
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
    },
  },
  buttonDiv: {
    textAlign: "center",
    padding: "40px 0",
    "@media (max-width: 540px)": {
      padding: "20px 0",
    },
  },
  transButton: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    minHeight:"56px !important",
    lineHeight: "16px !important",
    color: "#fff !important",
    cursor: "pointer !important",
    padding: "12px 24px !important",
    maxWidth: "365px !important",
    background: "#172624 !important",
    width: "100% !important",
    "&:hover": {
      color: "#fff !important",
      background: "#172624 !important",
    },
    "@media (max-width: 540px)": {
      maxWidth: "none !important",
    },
  },
}));

export default function CarouselComponent() {
  const classes = useStyles();


  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box className={classes.carousalStyle}>
              <Typography className={classes.textcss}>
                Home Improvement Services Providers:
              </Typography>
              <Typography className={classes.body1}>
              Contractors, Builders, Trade Professionals and AEC Consultants. Join the New 'Digital' Smart Yard Sign Revolution
              </Typography>
            </Box>
            <Box className={classes.buttonDiv}>
              <Button className={classes.transButton}>
                <FaArrowDownLong />
                &nbsp;&nbsp;&nbsp;Your Company Name Here!&nbsp;&nbsp;&nbsp;
                <FaArrowDownLong />
              </Button>
            </Box>
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  );
}
