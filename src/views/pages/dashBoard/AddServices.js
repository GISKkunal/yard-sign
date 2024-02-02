import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Page from "src/component/Page";
import UploadServices from "./UploadServices";
import ListServices from "./ListServices";
import { set } from "lodash";

const useStyles = makeStyles((theme) => ({
  headbox: {
    padding: "42px 80px 20px 80px",
    "@media (max-width: 920px)": {
      padding: "30px 40px 20px 40px",
    },
    "@media (max-width: 599px)": {
      padding: "20px 20px 20px 20px",
    },
    "& .MuiDialog-paperWidthSm": {},
    "& .title": {
      color: "#172624 !important",
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
        marginBottom: "10px !important",
      },
    },
    "& .buttoncss": {
      fontFamily: "'Noto Sans', sans-serif !important",
      borderRadius: "6px !important",
      fontStyle: "normal !important",
      fontWeight: "700 !important",
      fontSize: "15.2381px !important",
      lineHeight: "18px !important",
      minHeight: "56px !important",
      color: "#000 !important",
      cursor: "pointer !important",
      padding: "12px !important",
      border: "1px solid rgb(23, 38, 36, 0.7) !important",
      minWidth: "200px !important",
      background: "#fff !important",
      "@media (max-width: 850px)": {
        minWidth: "50px !important",
      },
      "&:hover": {
        color: "#000 !important",
        background: "#fff !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "13px !important",
        lineHeight: "13.5px !important",
      },
    },
    "& .flexBox": {
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width: 599px)": {
        display: "block",
        gap: "10px",
      },
    },
    "& .divFlex": {
      display: "flex",
      gap: "15px",
      "@media (max-width: 599px)": {
        display: "grid",
        gap: "10px",
      },
    },
    "& .backGroundCard": {
      background: "#F5F5F5",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "20px",
      display: "grid",
      gap: "40px",
    },
    "& .labelTitle": {
      color: "#000 !important",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "14px !important",
      fontStyle: "normal !important",
      fontWeight: "400 !important",
      marginBottom: "8px !important",
      lineHeight: "125% !important",
    },
    "& .backgroundDiv": {
      borderRadius: "24px",
      background: "#FFF",
      boxShadow: "0px 6px 30px 0px rgba(0, 0, 0, 0.10)",
      padding: "40px 10px ",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    "& .newButtoncss": {
      fontFamily: "'Noto Sans', sans-serif !important",
      borderRadius: "6px !important",
      fontStyle: "normal !important",
      fontWeight: "700 !important",
      fontSize: "15.2381px !important",
      lineHeight: "18px !important",
      minHeight: "48px !important",
      color: "#102D0C !important",
      cursor: "pointer !important",
      padding: "16px 40px !important",
      border: "1px solid #172624 !important",
      background: "#fff !important",

      "&:hover": {
        color: "#102D0C",
        background: "#fff",
      },
      "@media (max-width: 599px)": {
        fontSize: "13px",
        lineHeight: "13.5px",
      },
    },
    "& .editButton": {
      fontFamily: "'Noto Sans', sans-serif !important",
      borderRadius: "6px !important",
      fontStyle: "normal !important",
      fontWeight: "700 !important",
      fontSize: "15.2381px !important",
      lineHeight: "18px !important",
      color: "#fff !important",
      cursor: "pointer !important",
      padding: "16px 20px !important",
      background: "#172624 !important",
      minHeight: "48px !important",
      minWidth: "207px !important",
      "&:hover": {
        color: "#fff !important",
        background: "#172624 !important",
      },
      "@media (max-width: 540px)": {
        width: "-webkit-fill-available !important",
        marginTop: "20px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "13px !important",
        lineHeight: "13.5px !important",
      },
    },
    "& .buttonGroup": {
      display: "grid",
      gap: "12px",
      marginTop: "27px",
    },
    "& .newColorButtoncss": {
      fontFamily: "'Noto Sans', sans-serif !important",
      borderRadius: "6px !important",
      fontStyle: "normal !important",
      fontWeight: "700 !important",
      fontSize: "15.2381px !important",
      lineHeight: "18px !important",
      minHeight: "48px !important",
      color: "#102D0C !important",
      cursor: "pointer !important",
      padding: "16px 40px !important",
      border: "1px solid #D19A1D !important",
      background: "#D19A1D !important",

      "&:hover": {
        color: "#102D0C !important",
        background: "#D19A1D !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "13px !important",
        lineHeight: "13.5px !important",
      },
    },
    "& .imgDiv": {
      borderRadius: "200px",
      maxWidth: "200px",
      maxHeight: "200px",
      boxShadow: "0px 10px 100px 0px rgba(0, 0, 0, 0.20)",
    },
    "& .imgMainDiv": {
      position: "relative",
    },
    "& .editImg": {
      bottom: "0",
      position: "absolute",
      right: "0",
    },
    "& .SideBarBox": {
      display: "flex",
      gap: "20px",
    },
    "& .firstBox": {
      width: " 100%",
      maxWidth: "333px",
    },
    "& .SecondBox": {
      width: " 100%",
    },
    "& .cardTitle": {
      color: "#172624 !important",
      fontFamily: "Big Shoulders Display, sans-serif !important",
      fontSize: "20px !important",
      fontStyle: "normal !important",
      fontWeight: "800 !important",
      lineHeight: "28px !important",
      textTransform: "uppercase !important",
      "@media (max-width: 920px)": {
        fontSize: "20px !important",
        lineHeight: "25px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "18px !important",
        lineHeight: "20px !important",
      },
    },
    "& .CardText": {
      color: "#172624 !important",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "16px !important",
      fontStyle: "normal !important",
      fontWeight: "500 !important",
      lineHeight: "20px !important",
      textTransform: "uppercase !important",
    },
    "& .alignDiv": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "15px",
    },
  },
  mainBox: {
    display: "flex",

    gap: "20px",
    "@media (max-width: 920px)": {
      display: "grid",
    },
  },
  TextBoxFormControl: {
    "& .MuiOutlinedInput-root": {
      background: "#fff !important",
      borderRadius: "10px !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "18px 16px !important",
    },
  },
  imageBox: {
    gap: "20px",
    "@media (max-width: 920px)": {
      display: "grid",
      gap: "10px",
      marginTop: "0px",
    },
    "& .imageFlex": {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      width: "-webkit-fill-available",
      marginTop: "10px",
      overflow: "auto",
      padding: "10px 0",
    },
    "& .imagesList": {
      width: "90px",
      height: "90px",
      borderRadius: "10px",
    },
    "& .iconImage": {
      position: "absolute",
      top: "-8px",
      right: "-12px",
    },
    "& .iconImageDiv": {
      position: "relative",
    },
  },
  transButton: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    minHeight: "56px !important",
    color: "#172624 !important",
    cursor: "pointer",
    padding: "12px 24px !important",
    border: "1px solid #102D0C !important",
    background: "#fff !important",
    minWidth: "207px !important",
    "&:hover": {
      color: "#172624 !important",
      background: "#fff !important",
    },
    "@media (max-width: 540px)": {
      width: "-webkit-fill-available !important",
    },
  },
  Explore: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px !important",
    color: "#fff !important",
    cursor: "pointer",
    padding: "12px 24px !important",
    background: "#172624 !important",
    minHeight: "56px !important",
    minWidth: "207px !important",
    "&:hover": {
      color: "#fff !important",
      background: "#172624 !important",
    },
    "@media (max-width: 540px)": {
      width: "-webkit-fill-available !important",
      marginTop: "20px !important",
    },
  },
  twobtnBox: {
    display: "flex",
    gap: "16px",
    justifyContent: "end",
    paddingTop: "35px",
    "@media (max-width: 959px)": {
      paddingTop: "23px",
    },

    "@media (max-width: 540px)": {
      display: "block",
    },
  },
  alreadyAccount: {
    color: "rgba(0, 0, 0, 0.70) !important",
    textAlign: "center",
    fontFamily: "'Noto Sans', sans-serif !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    lineHeight: "125% !important",
  },
  newbox: {
    color: "#738611",
    fontWeight: "700",
    textDecoration: "underline",
    cursor: "pointer",
  },
  checkDiv: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "& .MuiSvgIcon-root": {
      color: "#172624 !important",
    },
  },
}));

export default function AddServices() {
  const classes = useStyles();
  const [submit, setSubmit] = useState(false);
  const handleCallBack = () => {
    setSubmit(!submit);
  };
  return (
    <Page title="AddServices">
      <Box className={classes.headbox}>
        <Box>
          {submit ? (
            <ListServices classes={classes} handleCallBack={handleCallBack} />
          ) : (
            <UploadServices classes={classes} handleCallBack={handleCallBack} />
          )}
        </Box>
      </Box>
    </Page>
  );
}
