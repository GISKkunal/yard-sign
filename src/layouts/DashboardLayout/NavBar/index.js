import React, { useEffect, useState, useContext } from "react";
import { useLocation, matchPath, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { MdExitToApp as ExitToAppIcon } from "react-icons/md";
import PropTypes from "prop-types";
import SettingsContext from "src/context/SettingsContext";
import { UserContext } from "src/context/User";
import {
  Box,
  Drawer,
  Hidden,
  List,
  Button,
  ListSubheader,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { AiFillDashboard, AiFillHome } from "react-icons/ai";

import { RiSettingsLine } from "react-icons/ri";
import NavItem from "./NavItem";
import { MdHistory } from "react-icons/md";
import { ListItem, ListItemText, Collapse } from "@mui/material";
import { toast } from "react-toastify";
import Logo from "src/component/Logo";
function renderNavItems({ items, pathname, depth = 0, state, setSelectedTab }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) =>
          reduceChildRoutes({
            acc,
            item,
            pathname,
            depth,
            state,
            setSelectedTab,
          }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
  state,
  setSelectedTab,
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
          state,
          setSelectedTab,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        tabview={item.tabview}
        key={key}
        title={item.title}
        setSelectedTab={(item) => setSelectedTab(item)}
      />
    );
  }
  return acc;
}
const useStyles = makeStyles((theme) => ({
  main: {},
  mobileDrawer: {
    width: 256,
    // background: theme.palette.background.header,
  },
  mobileDrawer: {
    width: 256,
    // background: theme.palette.background.header,
  },
  desktopDrawer: {
    width: "270px",
    height: "100%",
    background: "#232B3B",
    boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)",
    "& .lightlogoutButton": {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      position: "absolute",
      bottom: "19px",
      left: "17px",
      borderRadius: "5px",
      fontWeight: "400",
      fontSize: "13px",
      color: "#fff",
      backgroundColor: "#151515",
    },
    "& .darklogoutButton": {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      position: "absolute",
      bottom: "19px",
      left: "17px",
      borderRadius: "5px",
      fontWeight: "400",
      fontSize: "13px",
      color: "#151515",
      backgroundColor: "#fff",
      // [theme.breakpoints.down('lg')]: {
      //   position: "inherit",
      // },
    },
  },
  rootLight: {
    width: "270px",
    height: "100%",
    background: "#fff",
    boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "45px",
    paddingLeft: "17px",
    borderRadius: "12px",
    marginTop: "-30px",
    "&:hover": {
      color: "#fff",
    },
    "& svg": {
      color: "#232B3B",
      fontSize: "20px",
    },
  },
  btnBox: {
    position: "relative",
    left: "30%",
    bottom: "-250px",
  },

  sideMenuBox: {
    "& .MuiCollapse-wrapperInner": {
      marginLeft: "45px",
    },
  },
  mainsidebar: {},
  logoBox: {
    paddingTop: "28px",
    paddingBottom: "59px",
  },
  profileBox: {
    paddingBottom: "44.35px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    "& .name": {
      fontSize: "20.227px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "30.341px",
    },

    "& .emailId": {
      color: "#89879F",
      fontSize: "14.159px",
      fontStyle: "normal",
      fontHeight: "16.991px",
    },
    "& .profilePic": {
      width: "60px",
      height: "60px",
      borderRadius: "100%",
    },
  },
  darkListItem: {
    "& .MuiListItemText-root": {
      marginLeft: "18px",
    },
    "& p": {
      fontSize: "16px !important",
      fontWeight: "400",
    },
    "& svg": {
      color: "#fff !important",
      fontSize: "20px",
    },
    "& .MuiTypography-displayBlock": {
      fontSize: "16px !important",
      fontWeight: "600",
      color: "#fff ",
    },
  },
  lightListItem: {
    "& .MuiListItemText-root": {
      marginLeft: "18px",
    },
    "& p": {
      fontSize: "16px !important",
      fontWeight: "400",
    },
    "& svg": {
      color: "#232B3B !important",
      fontSize: "20px",
    },
    "& .MuiTypography-displayBlock": {
      fontSize: "16px !important",
      fontWeight: "600",

      color: "#151515 ",
    },
  },
  lightSelectedListItem: {
    borderRadius: "0px 20px 20px 0px",
    background: "#0B1426 !important",
    color: "#151515 ",
    "& .MuiTypography-displayBlock": {
      color: "#fff ",
    },
  },
  darkSelectedListItem: {
    borderRadius: "0px 20px 20px 0px",
    background: "#fff !important",
    "& .MuiTypography-displayBlock": {
      color: "#151515 ",
    },
  },
  lightDailogOpen: {
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      maxWidth: "fit-content",
      padding: "60px",
      borderRadius: "20px",
      background: "#FFF",
      boxShadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.25)",
      // [theme.breakpoints.down('md')]: {
      //   padding: "30px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   padding: "5px",
      // },
    },
    "& .lightHeading": {
      color: "#0B1426",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      letterSpacing: "0.3px",
      marginBottom: "13px",
    },
    "& .lightSubHeading": {
      color: "rgba(11, 20, 38, 0.50)",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
  darkDailogOpen: {
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      maxWidth: "fit-content",
      padding: "60px",
      borderRadius: "20px",
      background: "#0B1426",
      boxShadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.25)",
      // [theme.breakpoints.down('md')]: {
      //   padding: "30px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   padding: "5px",
      // },
    },
    "& .darkHeading": {
      color: "#fff",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      letterSpacing: "0.3px",
      marginBottom: "13px",
    },
    "& .darkSubHeading": {
      color: "rgb(144 147 154 / 50%)",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
}));
const handleItemClick = (href) => {
  console.log("Item clicked:", href);
};
const iconsFunction = (icon, alt) => {
  return <img src={icon} alt={alt} />;
};

const sections1 = [
  {
    items: [
      {
        title: "Dashboard",
        icon: <AiFillDashboard />,
        href: "/sniper-dashboard",
        tabview: "Sniper",
      },
      {
        title: "Bot settings",
        icon: <RiSettingsLine />,
        href: "/bot-setting",
        tabview: "Sniper",
      },
      {
        title: "Transaction History",
        icon: <MdHistory />,
        href: "/sniper-transactions",
        tabview: "Sniper",
      },
    ],
  },
];
const NavBar = ({ onMobileClose, openMobile, tabView, setSelectedTab }) => {
  const themeSeeting = useContext(SettingsContext);
  const sections = [
    {
      items: [
        {
          title: "Dashboard",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightDashboard.svg"
              : "images/sidebar/dashboard.svg",
            "dashboard"
          ),
          href: "/dashboard",
          tabview: "Arbitrage",
          clickable: true,
        },
        {
          title: "Binary Tree",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightBinaryTree.svg"
              : "images/sidebar/binaryTree.svg",
            "binaryTree"
          ),
          href: "/binary-tree",
          tabview: "Arbitrage",
          clickable: true,
        },
        {
          title: "Wallet",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightWallet.svg"
              : "images/sidebar/wallet.svg",
            "wallet"
          ),
          href: "/wallet",
          tabview: "Arbitrage",
          clickable: false,
        },
        {
          title: "Referral",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightReferral.svg"
              : "images/sidebar/referral.svg",
            "referral"
          ),
          href: "/referral",
          tabview: "Arbitrage",
          clickable: true,
        },
        {
          title: "Reports",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightReports.svg"
              : "images/sidebar/reports.svg",
            "reports"
          ),
          href: "/reports",
          tabview: "Arbitrage",
          clickable: true,
        },
        {
          title: "Transaction History",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightTransaction.svg"
              : "images/sidebar/transaction.svg",
            "transaction"
          ),
          href: "/transaction-history",
          tabview: "Arbitrage",
          clickable: true,
        },
        {
          title: "Settings",
          icon: iconsFunction(
            themeSeeting.settings.theme === "LIGHT"
              ? "images/sidebar/lightSettings.svg"
              : "images/sidebar/settings.svg",
            "settings"
          ),
          href: "/settings",
          tabview: "Arbitrage",
          clickable: true,
        },
        // {
        //   title: "Arbitrage",
        //   icon: <FaBarcode />,
        //   tabview: "Arbitrage",
        //   clickable: true,
        //   items: [

        //     {
        //       title: "Triangular",
        //       href: "/triangular",
        //       clickable: true,
        //     },
        //   ],
        // },
      ],
    },
  ];
  const classes = useStyles();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState([]);
  const handleItemClick = (path) => {
    navigate(path);
  };
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState(false);
  const renderedSections = tabView === "Arbitrage" ? sections : sections1;
  const User = useContext(UserContext);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleSublistToggle = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };
  const content = (
    <>
      <Box height="100%" display="flex" flexDirection="column">
        <Box className={classes.logoBox}>
          <Logo />
        </Box>

        <Box className={classes.profileBox}>
          <img
            className="profilePic"
            src={
              User?.profile?.profilePic
                ? User.profile.profilePic
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
            }
            alt="user"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/settings");
            }}
          />
          <Box style={{ width: "181px", overflow: "auto" }}>
            <p
              className={
                themeSeeting.settings.theme === "LIGHT"
                  ? "name typographyColorLight"
                  : "name typographyColorDark"
              }
            >
              Hi, {User?.profile?.firstName ? User.profile.firstName : "******"}
            </p>
            <p className="emailId">
              {User?.profile?.email
                ? User?.profile?.email?.length > 23
                  ? User?.profile?.email.slice(0, 18) +
                    "..." +
                    User?.profile?.email.slice(
                      User?.profile?.email?.length - 3,
                      User?.profile?.email?.length
                    )
                  : User?.profile?.email
                : "**************"}
            </p>
          </Box>
        </Box>
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <Box pt={2} pb={2} className={classes.mainsidebar}>
            <Box className="sideMenuBox">
              {renderedSections.map((section, i) => (
                <List
                  key={`menu${i}`}
                  subheader={
                    <ListSubheader disableGutters disableSticky>
                      {section.subheader}
                    </ListSubheader>
                  }
                >
                  {section.items.map((item, j) => {
                    const hasItems = item.items && item.items.length > 0;
                    const isItemOpen = isOpen[j] || false;
                    return (
                      <div key={`item${j}`}>
                        <ListItem
                          button
                          className={
                            themeSeeting.settings.theme === "LIGHT"
                              ? `${classes.lightListItem} ${
                                  location.pathname === item.href
                                    ? classes.lightSelectedListItem
                                    : ""
                                }`
                              : `${classes.darkListItem} ${
                                  location.pathname === item.href
                                    ? classes.darkSelectedListItem
                                    : ""
                                }`
                          }
                          selected={location.pathname === item.href}
                          onClick={() => {
                            if (hasItems) {
                              handleSublistToggle(j);
                            } else if (item.clickable) {
                              handleItemClick(item.href);
                            } else {
                              toast.error("Coming soon");
                            }
                          }}
                        >
                          {item.icon}
                          <ListItemText primary={item.title} />
                        </ListItem>
                        {hasItems && (
                          <Collapse
                            in={isItemOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {item.items.map((subItem, k) => (
                                <div key={`subItem${k}`}>
                                  <ListItem
                                    // className={
                                    //   location.pathname === item.href
                                    //     ? classes.selectedListItem // Apply selected style class
                                    //     : classes.default // Apply default style class
                                    // }

                                    button
                                    // selected={location.pathname === subItem.href}
                                    onClick={
                                      subItem.clickable
                                        ? () => handleItemClick(subItem.href)
                                        : undefined
                                    }
                                    disabled={!subItem.clickable}
                                  >
                                    {subItem.icon}
                                    <ListItemText primary={subItem.title} />
                                  </ListItem>
                                </div>
                              ))}
                            </List>
                          </Collapse>
                        )}
                      </div>
                    );
                  })}
                </List>
              ))}
            </Box>
          </Box>

          <Button
            onClick={() => setIsLogout(true)}
            className={
              themeSeeting.settings.theme === "LIGHT"
                ? "lightlogoutButton"
                : "darklogoutButton"
            }
          >
            <ExitToAppIcon
              style={{
                marginRight: "16px",
              }}
            />
            &nbsp; Logout
          </Button>

          {isLogout && (
            <Dialog
              maxWidth="sm"
              fullWidth
              className={
                themeSeeting.settings.theme === "LIGHT"
                  ? classes.lightDailogOpen
                  : classes.darkDailogOpen
              }
              open={isLogout}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setIsLogout(false)}
            >
              <DialogContent>
                <Box className={classes.dialougTitle} align="center">
                  <p
                    className={
                      themeSeeting.settings.theme === "LIGHT"
                        ? "lightHeading"
                        : "darkHeading"
                    }
                  >
                    Logout
                  </p>
                  <p
                    className={
                      themeSeeting.settings.theme === "LIGHT"
                        ? "lightSubHeading"
                        : "darkSubHeading"
                    }
                  >
                    Are you sure you want to log out?
                  </p>
                </Box>
              </DialogContent>
              <DialogActions
                style={{
                  display: "block",
                }}
              >
                <Box
                  mt={2}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <button
                    className={
                      themeSeeting.settings.theme === "LIGHT"
                        ? "lightOutlinedButton"
                        : "darkOutlinedButton"
                    }
                    onClick={() => setIsLogout(false)}
                  >
                    Cancel
                  </button>
                  &nbsp; &nbsp;
                  <button
                    className={
                      themeSeeting.settings.theme === "LIGHT"
                        ? "lightFilledButton"
                        : "darkFilledButton"
                    }
                    onClick={() => {
                      window.localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </Box>
              </DialogActions>
            </Dialog>
          )}
        </PerfectScrollbar>
      </Box>
    </>
  );

  return <>
    {/* <Box className={classes.main}></Box> */}

    <Hidden lgUp>
      <Drawer
        anchor="left"
        classes={{
          paper:
            themeSeeting.settings.theme === "LIGHT"
              ? classes.mobileDrawerLight
              : classes.desktopDrawer,
        }}
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
      >
        <Box p={2}>{content}</Box>
      </Drawer>
    </Hidden>
    <Hidden lgDown>
      <Drawer
        anchor="left"
        classes={{
          paper:
            themeSeeting.settings.theme === "LIGHT"
              ? classes.rootLight
              : classes.desktopDrawer,
        }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  </>;
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
