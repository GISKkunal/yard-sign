import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  TextField,
} from "@mui/material";
import { GoPerson } from "react-icons/go";
import { FiTag } from "react-icons/fi";
import { SlDirection } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    "@media (max-width: 1280px)": {
      "& .MuiContainer-maxWidthLg": {},
    },
  },
  outerGridText: {
    // padding: "110px 36px 110px 0px !important",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/backOneSide.png)`,
    backgroundRepeat: "no-repeat",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 960px)": {},
  },
  transButton: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    minHeight: "56px !important",
    color: "#fff !important",
    cursor: "pointer",
    padding: "12px !important",
    border: "2px solid #FDFAFE !important",
    maxWidth: "200px !important",
    background: "transparent !important",
    width: "100% !important",
    "&:hover": {
      color: "#fff !important",
      background: "transparent !important",
    },
    "@media (max-width: 540px)": {
      maxWidth: "none !important",
    },
  },
  Explore: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    color: "#172624 !important",
    cursor: "pointer !important",
    padding: "12px 24px !important",
    border: "2px solid #FDFAFE !important",
    maxWidth: "283px !important",
    background: "#fff !important",
    width: "100% !important",
    minHeight: "56px !important",
    "&:hover": {
      color: "#172624 !important",
      background: "#fff !important",
    },
    "@media (max-width: 540px)": {
      maxWidth: "none !important",
    },
  },
  twobtnBox: {
    display: "flex",
    gap: "16px",
    paddingTop: "50px",
    "@media (max-width: 1165px)": {
      paddingTop: "30px",
      "@media (max-width: 959px)": {
        paddingTop: "35px",
      },
    },
    "@media (max-width: 540px)": {
      display: "grid",
      gap: "20px",
    },
  },
  largeText: {
    fontFamily: "Big Shoulders Display, sans-serif ",
    fontStyle: "normal",
    fontWeight: "800 ",
    fontSize: "100px ",
    lineHeight: "normal",
    color: "#FDFAFE ",
    textTransform: "uppercase",
    "@media (max-width: 1400px)": {
      fontSize: "74px ",
    },
    "@media (max-width: 1280px)": {
      fontSize: "60px ",
    },
    "@media (max-width: 920px)": {
      fontSize: "44px ",
    },
    "@media (max-width: 599px)": {
      fontSize: "32px ",
    },
  },
  body1: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "20px !important",
    lineHeight: "150%",
    color: "#F0F0F0 !important",
    margingTop: "20px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    "@media (max-width: 920px)": {
      fontSize: "18px !important",
      lineHeight: "20px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "17px !important",
      lineHeight: "20px !important",
    },
  },
  imgGrid: {
    display: "block",
    justifyContent: "center",
    "@media (max-width: 960px)": {
      display: "block",
    },
    "& img": {
      maxHeight: "900px",
      "@media (max-width: 960px)": {
        maxHeight: "none",
      },
    },
    "& .newBox": {
      float: "right",
      "@media (max-width: 960px)": {
        float: "none",
      },
    },
  },
  rightGap: {
    paddingLeft: "50px",
    paddingTop: "20px",
    "@media (max-width: 920px)": {
      padding: "30px 24px",
    },
    "@media (max-width: 599px)": {
      padding: "20px 20px",
    },
  },
  gridDiv: {
    display: "grid",
    gap: "20px",
    marginTop:"20px",
    "@media (max-width: 1165px)": {
      gap: "10px",
    },
    "@media (max-width: 959px)": {
      gap: "20px",

    },
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      {/* <Container maxWidth="lg"> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} className={classes.outerGridText}>
          <Box className={classes.rightGap}>
            <Typography className={classes.largeText}>
              Welcome to
              <br />
              <span style={{ color: "#D19A1D" }}>YardSign Pro</span>
            </Typography>
            <div className={classes.gridDiv}>
              <Typography className={classes.body1}>
                <span>
                The&nbsp;<span style={{ color: "#D19A1D" }}>New&nbsp;Geospatial</span>&nbsp;-
                Digital Way to Market & Advertise</span>
              </Typography>
              <Typography className={classes.body1}>
                <SlDirection /> Post Your New 'Digital' Yard Signs Today!
              </Typography>
              <Typography className={classes.body1}>
                <GoPerson />
                Free Membership
              </Typography>
              <Typography className={classes.body1}>
                <FiTag /> Free 60 Day Trial
              </Typography>
            </div>
            <Box className={classes.twobtnBox}>
              <Button className={classes.Explore}>
                post your yard sign&nbsp;&nbsp;&nbsp; <FaArrowRight />
              </Button>
              <Button className={classes.transButton}>
                Go to Map&nbsp;&nbsp;&nbsp; <FaArrowRight />
              </Button>
            </Box>
            {/* <Box className={classes.twobtnBox}>
              <Button className={classes.Explore}>
              Find Home Improvement Service Providers &nbsp;&nbsp;&nbsp; <FaArrowRight />
              </Button>
              <Button className={classes.transButton}>
              Go To My House &nbsp;&nbsp;&nbsp; <FaArrowRight />
              </Button>
            </Box> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className={classes.imgGrid}
          style={{ paddingBottom: "0px" }}
        >
          <Box className="newBox">
            <img src="images/image12.svg" alt="#" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Grid>
  );
}

export default Banner;
