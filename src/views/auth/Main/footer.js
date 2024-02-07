import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  ListItem,
  List,
  Link,
  IconButton,
  Dialog,
  Card,
  CardContent,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaMediumM } from "react-icons/fa";
import { FiSend, FiTwitter, FiYoutube } from "react-icons/fi";
import { AiOutlineReddit, AiFillYoutube } from "react-icons/ai";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: "#172624 ",
    position: "relative",
    padding: "50px 0px 0",
    zIndex: "2",
    overflow: " hidden",
    fontFamily: "Big Shoulders Display, sans-serif",
    "& .copy": {
      borderTop: "1px solid #D0D0D0",
      padding: "10px 0",
      textAlign: "center",
      fontWeight: 300,
      fontSize: "12px",
      color: "#fff",
      fontFamily: "'Noto Sans', sans-serif",
    },
    "& .shape": {
      position: "absolute",
      right: "20px",
      top: "50px",
      // [theme.breakpoints.down('sm')]: {
      //   top: "50%",
      // },
    },
    "& .shape2": {
      position: "absolute",
      left: "80px",
      top: "55px",
    },
    "& .shape3": {
      position: "absolute",
      left: "40px",
      top: "75px",
    },
    "& .shape4": {
      position: "absolute",
      left: "200px",
      bottom: "50px",
    },
    "& ul": {
      paddingLeft: "0",
      // [theme.breakpoints.down('md')]: {
      //   marginBottom: "30px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   marginBottom: "0px",
      // },
      "& li": {
        paddingLeft: "0",
        alignItems: "center",
        color: " #1D1D1D",
        fontSize: "18px",
        "& svg": {
          marginRight: "10px",
          color: "#172624",
          fontSize: "15px",
        },
      },
    },
    "& svg": {
      color: "#172624",
      fontSize: "15px",
    },

    "& h6": {
      color: "#fff",
      // [theme.breakpoints.down('md')]: {
      //   marginTop: "30px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   marginTop: "20px",
      // },
    },
    "& a": {
      color: "#F7F6F1",
      fontWeight: 400,
      textDecoration: "none",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "1.5px",
      fontFamily: "'Noto Sans', sans-serif",
      "&:AIML": {
        color: "#35a5f5",
        textDecoration: "none",
      },
    },
  },
  footerlogo: {
    Width: "160px",
    height: "40px",
  },
  logo: {
    maxWidth:"200px"
  },
  dialogProfileDiv: {
    display: "grid",
    justifyContent: "center",
  },
  dialogCard: {
    padding: "29px 40px 35px 40px",
    minWidth: "486px",
  },
  inputBox: {
    display: "flex",
    justifyContent: "end",
    paddingBottom: "10px",
  },
  inputBoxButton: {
    width: "53px",
    height: "20px",
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#FFFFFF",
    borderRadius: "2px",
  },
  inputlabelName: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000000",
  },
  inputlabelvalue: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#1D1D1D",
  },
  nameBorderdiv: {
    border: "1px solid #B3B3B3",
    height: "39px",
    width: "100%",
    padding: "0px 8px 8px",
  },
  profileImg: {
    width: "80px",
    height: "80px",
    borderRadius: "100%",
  },
  dialogProfileDiv: {
    display: "grid",
    justifyContent: "center",
  },
  dialogCard: {
    padding: "29px 40px 35px 40px",
    minWidth: "486px",
  },
  inputlabelDiv: {
    paddingBottom: "18px",
  },
  largeText: {
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "60px !important",
    lineHeight: "120% !important",
    color: "#F7F6F1 !important",
    textAlign: "start",
    textTransform: "uppercase !important",
    margin: "24px 0 40px 0 !important",
    "@media (max-width: 1400px)": {
      fontSize: "60px !important",
    },
    "@media (max-width: 1280px)": {
      fontSize: "56px !important",
    },
    "@media (max-width: 920px)": {
      fontSize: "44px !important",
      margin: "24px 0 24px 0 !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "32px !important",
      margin: "20px 0 20px 0 !important",
    },
  },
  body1: {
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "40px !important",
    lineHeight: "normal !important",
    color: "#D19A1D !important",
    margingTop: "20px",
    textAlign: "start",
    margingTop: "8px",
    "@media (max-width: 920px)": {
      fontSize: "38px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "28px !important",
    },
  },

  footerFlex: {
    display: "flex",
    justifyContent: "end",
    "@media (max-width: 599px)": {
      marginTop: "20px",
      justifyContent: "center",
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
    cursor: "pointer",
    padding: "16px !important",
    border: "2px solid #FDFAFE !important",
    maxWidth: "200px !important",
    background: "#fff !important",
    width: "100% !important",
    "&:hover": {
      color: "#172624 !important",
      background: "#fff !important",
    },
    "@media (max-width: 540px)": {
      maxWidth: "none !important",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const address = localStorage.getItem("walletAddress");

  return (
    <>
      <Box className={classes.footerSection}>
        {/* <img src="images/shape/shape-1.png" className="shape moveTop" />
        <img src="images/shape/shape-3.png" className="shape2 rotate" />
        <img src="images/shape/shape-2.png" className="shape3 moveLeft" />
        <img src="images/shape/shape-4.png" className="shape4 rotate" /> */}
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={7} sm={7} md={10}>
              <Box mr={8}>
                {/* <Typography className={classes.body1}>LOGO</Typography> */}
                <img
                  className={classes.logo}
                  src="/images/Logo.png"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <Typography className={classes.largeText}>
                  Post Your Free Digital Yard Signs -Today!{" "}
                </Typography>
                <div>
                  <Button className={classes.Explore}>
                    Start Here&nbsp;&nbsp;&nbsp; <FaArrowRight />
                  </Button>
                </div>
              </Box>
            </Grid>
            <Grid item xs={5} sm={5} md={2}>
              <div className={classes.footerFlex}>
                <List>
                  <ListItem
                    style={{ cursor: "pointer" }}

                    // to="my-mints"
                  >
                    <Link target="_blank">About Us</Link>
                  </ListItem>
                  <ListItem
                    style={{ cursor: "pointer" }}
                    // to="profile"
                  >
                    <Link target="_blank">Services</Link>
                  </ListItem>

                  <ListItem
                    style={{ cursor: "pointer" }}
                    // to="profile"
                  >
                    <Link target="_blank">Privacy Policy</Link>
                  </ListItem>
                  <ListItem
                    style={{ cursor: "pointer" }}
                    // to="profile"
                  >
                    <Link target="_blank">Terms & Conditions</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Box className="copy" mt={1}>
          All rights reserved © YardSign Pro
        </Box>
      </Box>
    </>
  );
}
