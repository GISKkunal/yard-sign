import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { MdExpandLess as  ExpandLessIcon} from "react-icons/md";
import { MdExpandMore as ExpandMoreIcon} from "react-icons/md";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    // color: "#000000",
    // color: theme.palette.text.primary,
    padding: "10px 24px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  buttonLeaf: {
    // color: theme.palette.text.primary,
    // padding: "17px 8px",
    color: '#FFFFFF',
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    borderLeft: "solid 8px transparent",
    borderRadius: 0,
    fontSize: "13px",
    "& .MuiButton-label": {
      padding: "10px",
    },
    "&:hover": {
      "& .MuiButton-label": {
        color: "#2FF3FF !important",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "10px",
        borderRadius: "9px",
        // fontWeight: theme.typography.fontWeightRegular,
        "& $title": {
          // fontWeight: theme.typography.fontWeightMedium,
          // color: `${theme.palette.text.primary} !important`,
        },
        "& $icon": {
          color: "#2FF3FF !important",
          // color: "00e0b0",
        },
      },
    },
    "&.depth-0": {
      "& $title": {
        // fontWeight: theme.typography.fontWeightMedium,
        // color: `${theme.palette.text.primary} !important`,
      },
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    // marginRight: theme.spacing(3),
    // marginLeft: theme.spacing(1),
    color: `#fff !important`,
  },
  title: {
    marginRight: "auto",
  },
  active: {
    "& .MuiButton-label": {
      color: "#2FF3FF",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "10px",
      paddingRight: "120px",
      borderRadius: "9px",
      // fontWeight: theme.typography.fontWeightRegular,
      "& $title": {
        // fontWeight: theme.typography.fontWeightMedium,
      },
      "& $icon": {
        color: "#2FF3FF !important",
        // color: `${theme.palette.text.primary} !important`,
      },
    },
  },
}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
        // style={{ color: "#ccc" }}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
