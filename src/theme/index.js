import _ from "lodash";
import { colors, responsiveFontSizes, adaptV4Theme, createTheme as createMuiTheme } from "@mui/material";

import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiTableContainer: { root: { borderRadius: "8px" } },
    MuiPickersCalendarHeader: {
      iconButton: { backgroundColor: "transparent" },
    },
    MuiPaper: {
      elevation1: {
        borderRadius: "25px",
      },
      root: { padding: "15px" },
    },
    // MuiDialog: {
    //   paperFullWidth: {
    //     boxShadow:
    //       "0 2px 0 0 #ec0066, 0 -1px 0 0 #7e46a1, 2px 0 0 0 #7101bc, -2px 0 0 0 #ff4237, 1px 1px 0 0 #ec0066, -2px 2px 0 0 #ec0066, 2px 1px 0 0 #ec0066, -1px -2px 0 0 #ec0066",
    //     background: "#222222f2",
    //   },
    // },
    MuiInput: {
      underline: {
        "&::before": {
          borderBottom: "none",
        },
        "&::after": {
          borderBottom: "none",
        },
        "&:hover": {
          "&:not(.Mui-disabled)": {
            "&::before": {
              borderBottom: "none",
            },
          },
        },
      },
    },
    MuiInputBase: {
      root: {
        "& .Mui-disabled": {
          color: "#aeaaaa",
        },
      },
      fullWidth: {
        width: "100%",
        height: "38px",
        paddingLeft: "5px",
        paddingRight: "10px !important",
      },
    },
    MuiOutlinedInput: {
      root: { borderRadius: "8px" },
      input: {
        padding: "11px",
      },
      adornedStart: {
        paddingLeft: "0px",
      },
      adornedEnd: {
        paddingRight: "0px",
      },
    },

    MuiFormControl: {
      root: {
        // background: "#ffffff12",
        borderRadius: "5px",
      },
    },
    MuiAppBar: {
      colorDefault: {
        color: "#FFFFFF",
        backgroundColor: "rgba(255, 255, 255, 0.97)",
      },
    },

    MuiInputAdornment: {
      positionStart: {
        paddingLeft: "14px",
      },
    },

    MuiButton: {
      root: {
        "&.Mui-disabled": {
          color: "rgb(112, 107, 107)",
        },
      },
      contained: {
        fontSize: "14px !important",
        fontWeight: "300",
        borderRadius: "5px",
        whiteSpace: "pre",
        padding: "10px 20px",
      },
      outlined: {
        fontSize: "14px !important",
        fontWeight: "600",
        borderRadius: "8px",
        whiteSpace: "pre",
        padding: "8px 20px",
      },
      outlinedSizeLarge: {
        padding: "7px 35px",
      },
      containedSizeLarge: {},
    },
  },
};

const themesOptions = [
  {
    name: "LIGHT",
    overrides: {
      MuiSvgIcon: {
        root: {
          color: "#000",
        },
      },
      MuiInputBase: {
        fullWidth: {
          borderRadius: "8px",
          // border: "2px solid rgba(11, 20, 38, 1) !important",
        },
      },
      MuiOutlinedInput: {
        notchedOutline: { borderColor: "#0B1426" },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0B1426",
          },
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
        elevation2: {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
      },
      MuiTable: {
        root: {
          borderRadius: "10px",
          border: "1px solid #E8E7E7",
        },
      },
      MuiTableHead: {
        root: {
          background: "transparent",
          borderTop: "1px solid #636262",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      MuiTableBody: {
        root: {
          background: "#fff",
        },
      },
      MuiTableRow: {
        root: {
          borderBottom: "1px solid #E8E7E7",
          "&:hover": {
            backgroundColor: "#ffffff14",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      MuiTableCell: {
        head: {
          padding: "16px 16px",
          fontWeight: "500",
          backgroundColor: "#0B1426",
          color: "#fff",
          whiteSpace: "pre",
          fontSize: "14px",
          textAlign: "center ",
        },
        body: {
          color: "#0B1426",
          whiteSpace: "pre",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center",
        },
      },

      MuiMenu: {
        list: {
          outline: "0",
          background: "#ffffff",
        },
      },
      MuiButton: {
        containedPrimary: {
          color: "#fff",
          padding: "10px 35px",
          fontWeight: "500",
          borderRadius: "8px",
          backgroundColor: "rgba(11, 20, 38, 1)",

          "&:hover": {
            color: "#000",
            backgroundColor: "rgba(11, 20, 38, 0.7)",
          },
        },
        containedSecondary: {
          backgroundColor: "rgba(0, 0, 0, 0.03);",
          padding: "8px 27px",
          filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "21px",
          color: "#000000",
          borderRadius: "50px",
          border: "2px solid ",
          borderColor: "rgba(0, 0, 0, 0.03);",
          "&:hover": {
            color: "#000",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #fe5aeb, 0 -1px 0 0 #f4a91b, 1px 0 0 0 #fe5aeb, -1px 0 0 0 rgb(254 90 235), 1px -1px 0 0 #f4a91b, -1px 1px 0 0 rgb(254 90 235), 1px 1px 0 0 rgb(254 90 235), -1px -1px 0 0 rgb(244 168 26)",
            backgroundColor: "transparent",
          },
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.03) ",
          },
        },
        outlinedPrimary: {
          color: "rgba(11, 20, 38, 1)",
          border: "2px solid rgba(11, 20, 38, 1) !important",
          "&:hover": {
            color: "#fff",
            boxShadow: "none !important",
            backgroundColor: "rgba(11, 20, 38, 1)",
            // backgroundColor: "#51ACED !important",
            // border: "1px solid #51ACED !important",
          },
        },
      },
      MuiIconButton: {
        root: {
          color: "#000000",
          "& svg": {
            color: "#000000",
          },
        },
        MuiSvgIcon: {
          root: {
            color: "#000",
          },
        },
      },
    },
    typography: {
      // fontFamily: "'K2D', sans-serif"
    },
    palette: {
      background: {
        sellercard: "#fff",
        cardinner: "#fff",
        card: "#F7F7F7",
        tabButton: "#fff",
        default: "#cccccc",
        gradientbox: "#cccccc",
        newpaper: "rgba(255, 255, 255, 1)",
        blue: "rgba(11, 20, 38, 1)",
        selectBackground: "#F1F1F1",
        buyBackground: "#B6B9BE",
        border:"1px solid #f6c238",
        borderDialog:"1px solid rgb(0, 0, 0, 0.15)"
      },
      primary: {
        main: "#0B1426",
        dull: "rgba(21, 21, 21, 1)",
        gray: "rgba(11, 20, 38, 1)",
        dashtext: "rgba(21, 21, 21, 1)",
      },

      secondary: {
        main: "#0B1426", //black
        icons: "#009900", //white
      },
      text: {
        primary: "#000", //black
        secondary: "#000", //white
        gray: "rgba(0, 0, 0, 0.6)",
        graydark: "rgba(13, 13, 13, 0.3)",
        border: "1px solid  #000",
      },
    },
  },
  {
    name: "DARK",
    overrides: {
      MuiSvgIcon: {
        root: {
          color: "#FFFFFF",
        },
      },
      MuiInputBase: {
        fullWidth: {
          borderRadius: "8px",
          // border: "1px solid rgba(255, 255, 255, 1) !important",
        },
      },
      MuiOutlinedInput: {
        notchedOutline: { borderColor: "#f7f7f7" },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f7f7f7",
          },
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: "rgba(23, 32, 49, 1)",
        },
        elevation2: {
          backgroundColor: "#232B3B",
        },
      },
      MuiTable: {
        root: {
          border: "1px solid #E8E7E7",
        },
      },
      MuiTableHead: {
        root: {
          background: "transparent",
          borderTop: "1px solid #636262",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      MuiTableBody: {
        root: {
          background: "#172031",
        },
      },
      MuiTableRow: {
        root: {
          borderBottom: "1px solid #E8E7E7",
          "&:hover": {
            backgroundColor: "#ffffff14",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      MuiTableCell: {
        head: {
          padding: "16px 16px",
          fontWeight: "500",
          backgroundColor: "#fff",
          color: "#0B1426",
          whiteSpace: "pre",
          fontSize: "14px",
          textAlign: "center ",
        },
        body: {
          color: "#fff",
          whiteSpace: "pre",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center ",
        },
      },
      MuiMenu: {
        list: {
          outline: "0",
          background: "#191919",
        },
      },
      MuiButton: {
        containedPrimary: {
          color: "rgba(11, 20, 38, 1)",
          padding: "10px 35px",
          lineHeight: "21px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          fontWeight: "600",
          "&:hover": {
            color: "#000",

            backgroundColor: "#fff",
          },
        },
        containedSecondary: {
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          padding: "8px 27px",
          filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "21px",
          color: "#ffffff",
          borderRadius: "50px",
          border: "2px solid ",
          borderColor: "rgba(255, 255, 255, 0.04)",
          "&:hover": {
            color: "#ffffff",
            background: "transparent",
            boxShadow:
              "0 1px 0 0 #ff00cd, 0 -1px 0 0 #7d00b9, 1px 0 0 0 #f5673f, -1px 0 0 0 #f5673f, 1px -1px 0 0 #f5673f, -1px 1px 0 0 #f5673f, 1px 1px 0 0 #f5673f, -1px -1px 0 0 #f5673f",
            backgroundColor: "transparent",
          },
        },
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "rgba(255, 255, 255, 0.025) ",
            color: "#ffffff45",
          },
        },
        outlinedPrimary: {
          border: "1px solid rgba(255, 255, 255, 1) !important",
          fontWeight: "600",
          color: "#fff",
          "&:hover": {
            color: "#000",
            boxShadow: "none !important",
            backgroundColor: "#f5f5f5",
            // border: "2px solid #51ACED !important",
          },
        },
      },
      MuiIconButton: {
        root: {
          color: "#fff",
          "& svg": {
            color: "#fff",
          },
        },
        MuiSvgIcon: {
          root: {
            color: "#fff",
          },
        },
      },
    },

    palette: {
      background: {
        sellercard: "#000000",
        card: "rgba(255, 255, 255, 0.02)",
        cardinner: "rgba(255, 255, 255, 0.015)",
        tabButton: "rgb(21 18 20)",
        default: "#000000",
        gradientbox: "rgb(15 11 11 / 92%)",
        newpaper: "rgb(23 32 49)",
        border:"1px solid #f6c238",
        blue: "rgba(11, 20, 38, 1)",
        selectBackground: "#0B1426",
        buyBackground: "#b6b9be2b",
        borderDialog:"1px solid rgb(255, 255, 255, 0.15)"
      },
      primary: {
        main: "#ffffff",
        dull: "rgba(143, 143, 143, 1)",
        gray: "rgba(143, 143, 143, 1)",
        dashtext: "rgba(255, 255, 255, 0.5)",
      },
      secondary: {
        main: "rgba(255, 255, 255, 0.85)",
        icons: "#FFFFFF", //white
      },
      text: {
        primary: "#FFFFFF", //white
        secondary: "rgba(255, 255, 255, 0.6)", //white
        gray: "rgba(255, 255, 255, 0.6)",
        graydark: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
];

export const createTheme = (config = {}) => {
  // let themeOptions = themesOptions.find((theme) => theme.name === config.theme);
  let themeOptions = false;
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    adaptV4Theme(_.merge({}, baseOptions, themeOptions, { direction: config.direction }))
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
