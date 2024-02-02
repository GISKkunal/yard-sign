import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { IoIosArrowForward } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  imgCustom: {},
  buttonHidden: {
    opacity: 1,
  },
  buttonVisible: {
    backgroundColor: "white",
  },
  body1: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal",
    fontWeight: "800 !important",
    fontSize: "20px !important",
    lineHeight: "23px !important",
    color: "#172624 !important",
    marginTop: "12px",
    textTransform: "uppercase",
    "@media (max-width: 920px)": {
      fontSize: "19px !important",
      lineHeight: "23px !important",
      fontWeight: "600 !important",
      marginTop: "8px",
    },
    "@media (max-width: 599px)": {
      fontSize: "18px !important",
      lineHeight: "20px !important",
    },
  },
  carousalStyle: {
    padding: "40px 0",
    "@media (max-width: 920px)": {
      padding: "25px 0",
    },
    "@media (max-width: 599px)": {
      padding: "15px 0",
    },
  },
  divider: {
    borderBottom: "1px solid rgba(23, 38, 36, 0.20)",
  },
  textcss: {
    color: "#172624 !important",
    textAlign: "start",
    marginTop: "12px",
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontSize: "38px !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    lineHeight: "42px !important",
    "@media (max-width: 920px)": {
      fontSize: "34px !important",
      lineHeight: "44px !important",
      marginTop: "8px",
    },
    "@media (max-width: 599px)": {
      fontSize: "26px !important",
      lineHeight: "35px !important",
    },
  },
  Explore: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    color: "#172624 !important",
    cursor: "pointer !important",
    padding: "12px 24px !important",
    border: "2px solid #FDFAFE !important",
    minWidth: "200px !important",
    background: "#D19A1D !important",
    textTransform: "uppercase !important",
    "&:hover": {
      color: "#172624 !important",
      background: "#fff !important",
    },
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box className={classes.carousalStyle}>
                <div
                  style={{
                    padding: "15px",
                    background: "#fff",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "35px",
                    width: "35px",
                  }}
                >
                  {" "}
                  <img src="images/Park.svg" alt="" />
                </div>

                <Typography className={classes.textcss}>
                  Understanding YardSign Technology
                </Typography>
                <Typography className={classes.body1}>
                  Lorem ipsum dolor sit amet consectetur. Curabitur vitae
                  volutpat nulla varius nunc amet mi adipiscing.{" "}
                </Typography>
              </Box>
              <Box className={classes.carousalStyle}>
                <div
                  style={{
                    padding: "15px",
                    background: "#fff",
                    height: "35px",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "35px",
                  }}
                >
                  {" "}
                  <img src="images/Park.svg" alt="" />
                </div>
                <Typography className={classes.textcss}>
                  Digital Twin Technology
                </Typography>
                <Typography className={classes.body1}>
                  Lorem ipsum dolor sit amet consectetur. Curabitur vitae
                  volutpat nulla varius nunc amet mi adipiscing.
                </Typography>
              </Box>
              <Box>
                <Button className={classes.Explore}> 
                Go to Map &nbsp;&nbsp;&nbsp; <IoIosArrowForward />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
                <img src="images/Rectangle.svg" alt="" style={{width:"100%"}} /> 
            </div>
           
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
