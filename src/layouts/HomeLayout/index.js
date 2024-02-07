import React, { useEffect } from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import TopBar from "./TopBar";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";

AOS.init({ once: true });

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    height: "100%",
    // overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    // backgroundImage:`url("/images/landing page.png")`,
    backgroundPosition: "unset",
    backgroundSize: "cover",
    minHeight: "100vh",
    // backgroundColor:"#0D2124"
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
    // padding:"0 97px"
  },
  contentLoginDiv: {
    margin: "auto",
    maxWidth: "686px",
    padding: "20px",
  },
  contentLogin: {
    minHeight: "fit-content",
    maxWidth: "686px",
    overflowY: "auto",
    borderRadius: "10px",
    padding: "28px",
    color: "#1A1919",
    background: "#F5F5F5",
    boxShadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.25)",
    marginBottom: "20px",
    marginTop: "60px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      margin: "40px 0 40px 0",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#172624",
      borderRadius: "20px !important",
    },
    "@media(max-width:600px)": {
      padding: "20px",
    },
    "@media(max-width:960px)": {
      margin: "20px",
    },
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={classes.root}>
      <TopBar />

      {location.pathname === "/login" || location.pathname ==="/register" || location.pathname === "/company-information"? (
        <div className={classes.contentLoginDiv}>
          <div className={classes.contentLogin}>{children}</div>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
