import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { HiLocationMarker } from "react-icons/hi";
import { makeStyles } from "@mui/styles";
import React, { useState, useRef } from "react";
import Page from "src/component/Page";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { fromLonLat, get } from "ol/proj";
import { useNavigate } from "react-router-dom";
import Boston from "src/Components/Boston";
import { values } from "lodash";
import Axios from "axios";
// import BostonMap from "./map/BostonMap";

const useStyles = makeStyles((theme) => ({
  headbox: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "504px",
      borderRadius: "9px",
    },
    "& .mainBox": {
      position: "relative",
    },
    "& .upperDiv": {
      position: "absolute",
      // padding: "20px 24px 20px 60px",
      top: "0",
      // width: "-webkit-fill-available",
    },
    "& .flexDiv": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .body": {
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#000",
      textShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
    },
    "& .divGrid": {
      display: "grid",
      gap: "3px",
      width: "max-content",
      float: "inline-end",
      right: "0",
      "& img": {
        cursor: "pointer",
      },
      "@media (max-width: 1160px)": {
        padding: "30px 20px 0px 0px !important",
      },
    },
    "& .cssdiv": {
      borderRadius: "8px",
      background: "#FFF",
      boxShadow: "0px 2px 8px 0px rgba(60, 64, 67, 0.20)",
      display: "grid",
      gap: "3px",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      margin: "0 8px",
      padding: "5px",
      borderRadius: "10px",
    },
    "& .divider": {
      borderBottom: "1px solid #DADCE0",
      marginTop: "5px",
    },
    "& .gapBox": {
      display: "flex",
      gap: "20px",
      "@media (max-width: 1160px)": {
        padding: "10px 0px 0px 20px !important",
      },
      "@media (max-width: 1125px)": {
        display: "block",
      },
      "@media (max-width: 825px)": {
        paddingRight: "80px !important",
      },
    },
  },
  manageCategory: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    overflow: "auto",
    width: "max-content",

    "@media (max-width: 825px)": {
      display: "grid",
      gap: "8px",
    },
    "& .button": {
      borderRadius: "24px",
      background: "#fff",
      padding: "12px",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#172624",
      boxShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
      "@media (max-width: 1125px)": {
        display: "none",
      },
    },
    "& .Activebutton": {
      borderRadius: "24px",
      background: "#172624",
      padding: "12px",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#fff",
      boxShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
      "@media (max-width: 1125px)": {
        display: "none",
      },
    },
  },
  LoginTextBox: {
    borderRadius: "24px",
    background: " #fff",
    fontSize: "16px",
    color: "black",
    marginTop: "19px",
    width: "-webkit-fill-available",

    "&::placeholder": {
      color: "rgba(0, 0, 0, 0.50) !important",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "125%",
    },
    "& .MuiInputBase-input": {
      color: "black !important",
      fontFamily: "'Noto Sans', sans-serif !important",
      fontSize: "16px",
      lineHeight: "125%",
      fontWeight: "400",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: "12px 24px !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 24px !important",
    },
  },
  TextBoxFormControl: {
    minWidth: "190px",
    "@media (max-width: 1125px)": {
      minWidth: "276px",
    },
    "&:focus-visible": {
      outline: "none !important",
    },
    "& .MuiSelect-icon": {
      right: "0 !important",
    },
    "& .MuiOutlinedInput-root": {
      background: "#fff !important",
      borderRadius: "24px !important",
      "&:focus-visible": {
        outline: "none !important",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "11px 22px 11px 11px !important",
      "&:focus-visible": {
        outline: "none !important",
      },
    },
  },
  absoluteDiv: {
    position: "absolute",
    top: "65px",
    background: "rgb(255, 255, 255)",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    maxWidth: "252px",
    maxHeight: "125px",
    overflow: "auto",
    zIndex: "1"
  },
  locationDiv: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
    cursor: "pointer",
 
  },

}));

export default function Dashboard() {
  const classes = useStyles();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectPosition, setSelectPosition] = useState("");
  const [latLon, setLatLon] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState("");
  const [selectItem, setSelectItem] = useState("");
  const [listItems, setListItems] = useState([]);
  const nominatum = "https://nominatim.openstreetmap.org/search?";
  const childRef = useRef();
  const navigate = useNavigate();

  const [category, setCategory] = useState([
    "Landscapers",
    "Home Builders",
    "Architectural Services",
    // "All",
    "General Contractors",
    "Engineering Services",
    "Fence Contractors",
    "Deck Builder",
    "Remodelers",
    "Tree Service",
  ]);
  const handleListLocation = async (values) => {
    const params = {
      q: values,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${nominatum}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {

        setListItems(JSON.parse(result));
      })
      .catch((err) => console.log("err", err));
  };
  const handlesetLat = (values) => {
    setLatLon(values);
  };
  return (
    <Page title="Dashboard">
      <Box className={classes.headbox}>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Box className="mainBox">
                {/* <img src="images/mapBg.svg" style={{ width: "100%" }} /> */}
                <div
                  style={{
                    border: "2px solid grey",
                    height: "calc(100vh - 67px)",
                  }}
                >
                  {" "}
                  <Boston ref={childRef} latLon={latLon} />
                </div>

                <div>
                  <div className="flexDiv">
                    <div
                      className="upperDiv gapBox"
                      style={{ padding: "10px 0px 0 40px" }}
                    >
                      <div style={{ position: "relative" }}>
                        <TextField
                          placeholder="Search Maps"
                          size="small"
                          variant="outlined"
                          id="inputID"
                          type="text"
                          value={search}
                          inputProps={{ maxLength: 256 }}
                          onChange={(e) => {
                            setSearch(e.target.value);
                            handleListLocation(e.target.value);
                          }}
                          InputProps={{
                            className: classes.LoginTextBox,
                            endAdornment: (
                              <Box className={classes.passsec}>
                                <img src="images/search.svg" alt="" />
                              </Box>
                            ),
                          }}
                        />
                        {listItems.length > 0 && (
                          <div className={classes.absoluteDiv}>
                            {listItems.map((item) => {
                              return (
                                <div
                                  key={item?.osm_id}
                                  style={{ background: "#fff" }}
                                >
                                  <div
                                    className={classes.locationDiv}
                                    onClick={() => {
                                      setSelectPosition(item);
                                      handlesetLat([item.lon, item.lat]);
                                      setSearch(item?.display_name);
                                      setListItems([]);
                                    }}
                                  >
                                    <div>
                                      <HiLocationMarker
                                        style={{ fontSize: "18px" }}
                                      />
                                    </div>
                                    <Typography>
                                      {item?.display_name}
                                    </Typography>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <div>
                        <Typography className="body">
                          Find Local Home Improvement Pro’s:
                        </Typography>
                        <div
                          style={{
                            width: "max-content",
                          }}
                        >
                          <div className={classes.manageCategory}>
                            {category.slice(0, 3).map((values) => {
                              return (
                                <Button
                                  className={
                                    selectedOption === values
                                      ? "Activebutton"
                                      : "button"
                                  }
                                  onClick={() => {
                                    childRef.current.handleClick(values);
                                    setSelectedOption(values);
                                    setSelectItem("");
                                  }}
                                >
                                  {values}{" "}
                                </Button>
                              );
                            })}
                            <FormControl
                              className={classes.TextBoxFormControl}
                              // fullWidth
                              variant="outlined"
                            >
                              <Select
                                margin="dense"
                                variant="outlined"
                                placeholder="Select Sector"
                                displayEmpty
                                // disabled={isloading}
                                value={selectItem}
                                InputProps={{
                                  className: classes.TextBox,
                                }}
                                onChange={(e) => {
                                  setSelectedOption("");
                                  if (e.target.value === "All") {
                                    childRef.current.handleClick("");
                                    setSelectItem("");
                                  } else {
                                    setSelectItem(e.target.value);
                                    childRef.current.handleClick(
                                      e.target.value
                                    );
                                  }
                                }}
                              >
                                <MenuItem value={""} disabled>
                                  More
                                </MenuItem>
                                <MenuItem style={{ fontSize: "12px" }} value={"All"} >
                                  All
                                </MenuItem>
                                {screenWidth < 1125
                                  ? category.slice(0).map((data) => {
                                      return (
                                        <MenuItem
                                          value={data}
                                          style={{ fontSize: "12px" }}
                                        >
                                          {data}
                                        </MenuItem>
                                      );
                                    })
                                  : category.slice(3).map((data) => {
                                      return (
                                        <MenuItem
                                          value={data}
                                          style={{ fontSize: "12px" }}
                                        >
                                          {data}
                                        </MenuItem>
                                      );
                                    })}
                              </Select>
                            </FormControl>
                            {/* <Button className="button">
                              More&nbsp;&nbsp;&nbsp;
                              <IoIosArrowDown />{" "}
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="divGrid upperDiv"
                      style={{ padding: "30px 40px 0px 0" }}
                    >
                      <div>
                        <img
                          src="images/home.svg"
                          alt="#"
                          onClick={() => {
                            navigate("/add-services");
                          }}
                        />
                      </div>

                      <div>
                        <img
                          src="images/yourLocation.svg"
                          alt="#"
                          onClick={() => {
                            childRef.current.getCurrentLocation();
                          }}
                        />
                      </div>

                      <div className="cssdiv">
                        <FaPlus
                          style={{
                            color: "#000000",
                            fontSize: "18px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            childRef.current.handleZoomIn();
                          }}
                        />
                        <div className="divider"></div>
                        <FaMinus
                          style={{
                            color: "#000000",
                            fontSize: "18px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            childRef.current.handleZoomOut();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
