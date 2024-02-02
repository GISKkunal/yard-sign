import React, { useEffect, useRef, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MdMenu as MenuIcon} from "react-icons/md";
// import MenuIcon from "@mui/icons-material/Menu";
import { IoIosArrowForward } from "react-icons/io";

import { useNavigate } from 'react-router-dom';
import Scroll from "react-scroll";
import { useLocation } from "react-router-dom";
import { Drawer, Grid, List, ListItem } from "@mui/material";

const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    "@media(max-width:1200px)": {
      display: "none",
    },
  },
  root1: {
    display: "none",
    "@media(max-width:1200px)": {
      display: "block",
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkButtonsDiv: {
    display: "flex",
    gap: "14px",
  },
  //   logo: {
  //     flexGrow: 1,
  //   },
  spotSmartT: {
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15.2381px",
    lineHeight: "18px",
    color: "#172624",
    cursor: "pointer",
    padding: "12px 24px",
    textTransform: "none",
    minWidth: "120px",
    height: "75px",
    background: "#D19A1D",
    "& .MuiSelect-icon": {
      color: "#fff",
    },
  },
  register: {
    background: "#D19A1D",
    borderRadius: "0px",
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "18px",
    color: "#172624",
    cursor: "pointer",
    padding: "12px 24px",
    textTransform: "none",
    minWidth: "120px",
    height: "75px",
  },
  Login: {
    fontFamily: "'Noto Sans', sans-serif !important",
    // borderRadius: "20px",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    color: "#FDFAFE !important",
    cursor: "pointer !important",
    // background: "linear-gradient(320deg, #1F7C99 0%, #15D7D7 100%)",
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
    // backgroundClip: "text",
    // textFillColor: "transparent",
    // textTransform: "none",
    padding: "12px 24px",
    // border: "2px solid #FDFAFE",
    minWidth: "80px",
  },
  linkButton: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#FDFAFE !important",
    cursor: "pointer !important",
  },
  linkButton1: {
    fontFamily: "'Noto Sans', sans-serif !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "20px !important",
    lineHeight: "27px !important",
    color: "#FFFFFF !important",
    cursor: "pointer !important",
  },

  registerBox: {
    display: "flex",
    // gap: "20px",
    "& .MuiButton-root:hover": {},
  },
  drawerRight: {
    "& .MuiDrawer-paperAnchorRight": {
      background: "#172624",
      padding: "30px 20px",
    },
  },
  toolbarlogo: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    borderLeft: "1px solid rgba(247, 246, 241, 0.20)",
    height: "64px",
  },
  customSelectBox: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "120px",
    background: "#D19A1D",
    padding: "22px 26px",
    "& .contentTypo": {
      color: "rgb(23, 38, 36)",
      display: "flex",
      textTransform: "uppercase",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "16px",
      cursor: "pointer",
    },
  },
  dropdownContent: {
    position: "absolute",
    borderRadius: "0 0 0 4px",
    background: "#FFF",
    boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.18)",
    width: "100%",
    padding: "20px",
    display: "grid",
    gap: "30px",
    "& .contentTypo": {
      color: "rgb(23, 38, 36)",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textTransform: "uppercase",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "16px",
      cursor: "pointer",
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerContent, setOpenDrawerContent] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [selected, setSelected] = useState(
    location.pathname == "/login"
      ? "Sign In"
      : location.pathname == "/register" ||
        location.pathname == "/company-information"
      ? "Sign Up"
      : "Select options"
  );
  const dropdownRef = useRef(null);
  const options = ["Sign In", "Sign UP"];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelected(option);
  };
  const handleDropdownClick = (event) => {
    event.preventDefault();
    // Simulate a click on the Select component
    event.currentTarget.parentElement.click();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleDrawerOpen = () => {
    setOpenDrawerContent(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawerContent(false);
  };
  const inviteCode = "";
  const signupUrl = `${"/register"}?inviteCode=${inviteCode}`;
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setLogIn(true);
    } else setLogIn(false);
  }, [token]);
  console.log(logIn, "logIn");
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#172624",
            height: "64px",
            justifyContent: "center",
            borderBottom: "1px solid rgba(247, 246, 241, 0.20)",
          }}
        >
          <Toolbar className={classes.toolbar} style={{ paddingRight: "0px" }}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <img className={classes.logo} src="/images/Logo.svg" onClick={()=>{navigate("/")}}/>
              <div className={classes.divider}></div>
              <Box className={classes.linkButtonsDiv}>
                <Button className={classes.linkButton}>
                  {" "}
                  <ScrollLink
                    className=""
                    onClick={() => {
                      navigate("/");
                      handleClose();
                      setSelected("Select options");
                    }}
                    smooth={true}
                    duration={500}
                    to="home-bar"
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </ScrollLink>
                </Button>

                <Button className={classes.linkButton}>
                  <ScrollLink
                    className=""
                    onClick={() => {
                      navigate("/");
                      handleClose();
                      setSelected("Select options");
                    }}
                    smooth={true}
                    duration={500}
                    to="map-bar"
                    style={{ cursor: "pointer" }}
                  >
                    Map
                  </ScrollLink>
                </Button>
                <Button className={classes.linkButton}>
                  <ScrollLink
                    className=""
                    onClick={() => {
                      navigate("/");
                      handleClose();
                      setSelected("Select options");
                    }}
                    smooth={true}
                    duration={500}
                    to="map-bar"
                    style={{ cursor: "pointer" }}
                  >
                    Pricing
                  </ScrollLink>
                </Button>
                <Button className={classes.linkButton}>
                  <ScrollLink
                    className=""
                    onClick={() => {
                      navigate("/");
                      handleClose();
                      setSelected("Select options");
                    }}
                    smooth={true}
                    duration={500}
                    to="scrolling-bar"
                    style={{ cursor: "pointer" }}
                  >
                    About Us
                  </ScrollLink>
                </Button>

                <Button className={classes.linkButton}>
                  <ScrollLink
                    className=""
                    onClick={() => {
                      navigate("/");
                      handleClose();
                      setSelected("Select options");
                    }}
                    smooth={true}
                    duration={500}
                    to="board-bar"
                    style={{ cursor: "pointer" }}
                  >
                    Services
                  </ScrollLink>
                </Button>
                <Button
                  className={classes.linkButton}
                  onClick={() => {
                    navigate("/contact-us");
                    handleClose();
                    setSelected("Select options");
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>

            <Box className={classes.registerBox}>
              <Button className={classes.Login}>
                Join Our Pro Network{" "}
                <IoIosArrowForward
                  style={{ color: "#fff", fontSize: "18px", marginLeft: "4px" }}
                />
              </Button>
              <div>
                <Box
                  className={`${classes.customSelectBox} ${
                    isOpen ? classes.dropdownContentVisible : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                  ref={dropdownRef}
                >
                  <p className="contentTypo">
                    {selected === "Select options" ? "Sign In/up" : selected}
                  </p>
                  <img src="images/downArrow.svg" alt="downArrow" />
                </Box>{" "}
                {isOpen && (
                  <div className={`${classes.dropdownContent}`}>
                    <p
                      key={"Sign In"}
                      onClick={() => {
                        handleOptionClick("Sign In");
                        navigate("/login");
                      }}
                      className="contentTypo"
                    >
                      Sign In <img src="images/rightAown.svg" alt="#" />
                    </p>
                    <p
                      key={"Sign UP"}
                      onClick={() => {
                        handleOptionClick("Sign UP");
                        navigate("/register");
                      }}
                      className="contentTypo"
                    >
                      Sign UP <img src="images/rightAown.svg" alt="#" />
                    </p>
                  </div>
                )}
              </div>
            </Box>
            {/* )} */}
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root1}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#0E2326", minHeight: "64px !important", height:"64px" }}
        >
          <Toolbar className={classes.toolbarlogo}>
            <Box>
              <img className={classes.logo} src="/images/Logo.svg" onClick={()=>{navigate("/")}}/>
            </Box>
            <Box>
              <MenuIcon onClick={handleDrawerOpen} />
            </Box>
          </Toolbar>
          <Drawer
            anchor="right"
            open={openDrawerContent}
            onClose={handleDrawerClose}
            className={classes.drawerRight}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                className={classes.gridfour}
                style={{ width: "10rem" }}
              >
                <List>
                  <img className={classes.logo} src="/images/Logo.svg" onClick={()=>{navigate("/")}}/>
                  <ListItem className={classes.linkButton1}>
                    <ScrollLink
                      className=""
                      onClick={() => {
                        navigate("/");
                        handleClose();
                        setSelected("Select options");
                      }}
                      smooth={true}
                      duration={500}
                      to="home-bar"
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </ScrollLink>
                  </ListItem>
                  <ListItem className={classes.linkButton1}>
                    <ScrollLink
                      className=""
                      onClick={() => {
                        navigate("/");
                        handleClose();
                        setSelected("Select options");
                      }}
                      smooth={true}
                      duration={500}
                      to="map-bar"
                      style={{ cursor: "pointer" }}
                    >
                      Map
                    </ScrollLink>
                  </ListItem>
                  <ListItem className={classes.linkButton1}>Pricing</ListItem>
                  <ListItem className={classes.linkButton1}>
                    <ScrollLink
                      className=""
                      onClick={() => {
                        navigate("/");
                        handleClose();
                        setSelected("Select options");
                      }}
                      smooth={true}
                      duration={500}
                      to="scrolling-bar"
                      style={{ cursor: "pointer" }}
                    >
                      About Us
                    </ScrollLink>
                  </ListItem>

                  <ListItem className={classes.linkButton1}>Services</ListItem>
                  <ListItem className={classes.linkButton1}>
                    Contact Us
                  </ListItem>
                  <ListItem className={classes.linkButton1}>
                    Join Our Pro Network
                  </ListItem>
                  <ListItem
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                    className={classes.linkButton1}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Sign In
                  </ListItem>
                  <ListItem
                    style={{ maxWidth: "150px", minWidth: "150px" }}
                    className={classes.register}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Sign Up
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Drawer>
        </AppBar>
      </div>
    </>
  );
}
