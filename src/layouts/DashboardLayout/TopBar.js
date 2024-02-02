import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Dialog,
  TextField,
  InputAdornment,
  Hidden,
  SvgIcon,
  Drawer,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Menu as MenuIcon } from "react-feather";
import SwipeableTemporaryDrawer from "./RightDrawer";
import Logo from "src/component/Logo";
import DialogContent from "@mui/material/DialogContent";
import { useNavigate, useLocation } from "react-router-dom";
import SettingsContext from "src/context/SettingsContext";
import { AuthContext } from "src/context/Auth";
import { MdOutlinePriceChange } from "react-icons/md";
import { UserContext } from "src/context/User";

import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast } from "react-toastify";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#232B3B;",
  },

  logo: {
    // marginRight: theme.spacing(2),
  },

  searchBox: {
    // "@media(max-width:900px)": {
    //   display: "none",
    // },
  },
  customSelectBox: {
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    justifyContent: "space-evenly",
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
  toolbar: {
    paddingRight: "0px !important",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);
  return (
    <AppBar
      style={{
        backgroundColor: "#172624",
        height: "64px",
        justifyContent: "center",
        borderBottom: "1px solid rgba(247, 246, 241, 0.20)",
      }}
    >
      <Toolbar className={classes.toolbar}>
        {/* <Hidden>
          <IconButton
            color="#FF2626"
            onClick={onMobileNavOpen}
            style={{ marginRight: 10 }}
            size="large"
          >
            <SvgIcon fontSize="small">
              <MenuIcon style={{ color: "#fff" }} />
            </SvgIcon>
          </IconButton>
        </Hidden> */}
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const classes = useStyles();
  const location = useLocation();
  const auth = useContext(AuthContext);
  const themeSeeting = useContext(SettingsContext);
  const user = useContext(UserContext);
  const [unReadNotification, setUnReadNotification] = useState(0);
  const [notiData, setNotiData] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const notificationHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await Axios({
        method: "GET",
        url: ApiConfig.listNotification,
        params: { limit: 5 },
        headers: {
          token: token,
        },
      });

      if (res.data.statusCode == 200) {
        setNotiData(res?.data?.dataResults?.docs);
      }
    } catch (error) {
      console.log("error");
    }
  };
  const [count, setCount] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <>
      <img
        className={classes.logo}
        src="/images/Logo.svg"
        onClick={() => {
          navigate("/");
        }}
      />

      <>
        <Box flexGrow={1} />
        <Box className={classes.searchBox}>
          <Box className={`${classes.customSelectBox}`}>
            <p className="contentTypo">Logout</p>
            <img src="images/rightAown.svg" alt="#" />
          </Box>
        </Box>
      </>

      {/* <SwipeableTemporaryDrawer /> */}
      <Dialog
        PaperComponent={Paper}
        PaperProps={
          themeSeeting.settings.theme === "LIGHT"
            ? {
                style: {
                  position: "fixed",
                  top: 20,
                  right: 0,
                  padding: "20px",
                  width: "100%",
                  maxWidth: "438px",
                  background: "#fff",
                  borderRadius: "10px",
                },
              }
            : {
                style: {
                  position: "fixed",
                  top: 20,
                  right: 0,
                  padding: "20px",
                  width: "100%",
                  maxWidth: "438px",
                  background: "#172031",
                  borderRadius: "10px",
                },
              }
        }
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        {notiData.length != 0 ? (
          <>
            <div className={classes.ViewAllBtnDiv}>
              <Typography
                className={`${classes.notificationTitle} ${
                  themeSeeting.settings.theme === "LIGHT"
                    ? "typographyColorLight"
                    : "typographyColorDark"
                }`}
              >
                Notifications
              </Typography>
              {notiData.length == 0 ? (
                ""
              ) : (
                <Button
                  className={`${
                    themeSeeting.settings.theme === "LIGHT" ? "dark " : "light "
                  } ${classes.viewAllBtn}`}
                  onClick={() => {
                    navigate("/notifications");
                    setOpen(false);
                  }}
                >
                  View All
                </Button>
              )}
            </div>
            <Box mt={4} className={classes.listMenu}>
              {notiData &&
                notiData?.map((value) => {
                  return (
                    <Box
                      className={`${classes.BoxHeight} ${
                        themeSeeting.settings.theme === "LIGHT"
                          ? "cardColorDarkOpacity"
                          : "cardColorLightOpacity"
                      }`}
                    >
                      {loader ? (
                        <CircularProgress size="20px" sx={{ color: "white" }} />
                      ) : (
                        ""
                      )}{" "}
                      <div className={classes.ViewAllBtnDiv}>
                        <Box>
                          <Typography
                            className={`${classes.menuListText} ${
                              themeSeeting.settings.theme === "LIGHT"
                                ? "typographyColorLight"
                                : "typographyColorDark"
                            }`}
                          >
                            {value?.announcementTitle}
                          </Typography>
                          <Typography
                            className={`${classes.menuListSubText} ${
                              themeSeeting.settings.theme === "LIGHT"
                                ? "typographyColorLight"
                                : "typographyColorDark"
                            }`}
                          >
                            {value?.announcementDetails}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            className={`${classes.menuListDateText} ${
                              themeSeeting.settings.theme === "LIGHT"
                                ? "typographyColorLight"
                                : "typographyColorDark"
                            }`}
                          >
                            {moment(value?.createdAt).format(
                              "Do MMM YYYY, h:mm a"
                            )}
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  );
                })}
            </Box>
          </>
        ) : (
          <>
            <Typography
              className={`${classes.notificationTitle} ${
                themeSeeting.settings.theme === "LIGHT"
                  ? "typographyColorLight"
                  : "typographyColorDark"
              }`}
            >
              Notifications
            </Typography>
            <Box mt={4} className={classes.listMenu}>
              <Typography
                className={` ${
                  themeSeeting.settings.theme === "LIGHT"
                    ? "typographyColorLight"
                    : "typographyColorDark"
                }`}
                style={{
                  fontSize: "16px",

                  textAlign: "center",
                }}
              >
                No Records
              </Typography>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
}
