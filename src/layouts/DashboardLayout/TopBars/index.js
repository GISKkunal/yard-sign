import React, { useEffect, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Hidden, SvgIcon } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Menu as MenuIcon } from "react-feather";
import { TopBarData } from "src/layouts/DashboardLayout/TopBar";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
  },
  toolbar: {
    background: "#2A2A2B !important",
    height: "60px",
    padding: "10px 27px 10px 27px",
    "& svg": {
      fontSize: "25px !important",
    },
  },
  logo: {
    // marginRight: theme.spacing(2),
  },
  link: {
    // fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      // marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const confirmationLogouthandler = () => {
    navigate("/login");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
  };
  useEffect(() => {
    const id = window.localStorage.getItem("token");
    if (!id) {
      confirmationLogouthandler();
    }
  }, []);
  return (
    <AppBar
      elevation={0}
      className={clsx(classes.root, className)}
      color="inherit"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="#FF2626"
            onClick={onMobileNavOpen}
            style={{ marginRight: 10 }}
            size="large">
            <SvgIcon fontSize="small">
              <MenuIcon style={{ color: "#fff" }} />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => { },
};

export default TopBar;
