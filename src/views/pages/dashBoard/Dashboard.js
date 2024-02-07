import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Drawer,
  TextField,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
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
import { IoIosArrowForward } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  headbox: {
    "& .openBoxTag": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "16px",
      background: "#fff",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "300px",
    },
    "& .buttonCss": {
      borderRadius: "8px",
      background: "#172624",
      padding: "12px",
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      width: "100%",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#fff",
      boxShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
    },
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
    zIndex: "1",
  },
  locationDiv: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
    cursor: "pointer",
  },
  SwipeableDrawer: {
    width: "475px",
    // boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)",
    background: "#fff",
    "& .fence": {
      fontFamily: "'Noto Sans', sans-serif",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#5A5A5A",
    },
    "& .fenceTitle": {
      fontFamily: "Big Shoulders Display, sans-serif !important",
      fontStyle: "normal !important",
      fontWeight: "800 !important",
      fontSize: "30px !important",
      lineHeight: "100% !important",
      color: "#172624 !important",
      textTransform: "uppercase !important",

      "@media (max-width: 920px)": {
        fontSize: "28px !important",
      },
      "@media (max-width: 599px)": {
        fontSize: "26px",
      },
    },
    "& .imgvideoList": {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      overflow: "auto",
      marginTop: "10px",
    },
    "& .dividerin": {
      borderBottom: "1px solid #BFD9D5",
      margin: "25px 0",
    },
   "& .newCard":{
    width:"-webkit-fill-available",
    background:"#ECF3F2",
    borderRadius:"8px",
    display:"grid",
    justifyContent:"center",
    gap:"8px",
    padding:"10px",
    marginTop:"30px",
    marginRight:"24px"
   }
  },
  buttonCss1:{
    borderRadius: "8px",
    background: "#5572FF",
    padding: "12px",
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    width: "100%",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#fff",
    boxShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
    "&:hover":{
      background: "#5572FF",
      color: "#fff",
    }
  },
  Activebutton: {
    borderRadius: "8px",
    background: "#172624",
    padding: "12px",
    fontFamily: "'Noto Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#fff",
    textTransform:"uppercase",
    boxShadow: "0px 2px 20px 0px rgba(107, 107, 107, 0.20)",
    "&:hover":{
      background: "#172624",
      color: "#fff",
    }
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectPosition, setSelectPosition] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openBox, setopenBox] = useState(false);
  const [latLon, setLatLon] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState("");
  const [selectItem, setSelectItem] = useState("");
  const [bannerData, setBannerData] = useState([
    "images/picView.svg",
    "images/picView.svg",
    "images/picView.svg",
  ]);
  const [listItems, setListItems] = useState([]);
  const nominatum = "https://nominatim.openstreetmap.org/search?";
  const childRef = useRef();
  console.log(openBox, openDrawer, "openBox");
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
  function Item(props) {
    return (
      // <Paper style={{
      //   // height: "190px"
      //   }}>

      <img className={classes.imgCustom} src={props.item} alt="DashImage" />
      //  </Paper>
    );
  }

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
                  <Boston
                    ref={childRef}
                    latLon={latLon}
                    setopenBox={(value) => {
                      setopenBox(value);
                    }}
                  />
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
                                <MenuItem
                                  style={{ fontSize: "12px" }}
                                  value={"All"}
                                >
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
        {openBox && (
          <Box className="openBoxTag">
            <div>
              <Typography
                className="body"
                textAlign={"center"}
                style={{ lineHeight: "28px" }}
              >
                Business Name
              </Typography>
              <img
                src="images/picView.svg"
                alt=""
                style={{
                  width: "-webkit-fill-available",
                  borderRadius: "8px",
                  margin: "8px 0",
                }}
              />
              <Button
                onClick={() => {
                  setOpenDrawer(true);
                  setopenBox(false);
                }}
                className="buttonCss"
              >
                Contact Now
              </Button>
            </div>
          </Box>
        )}
        {openDrawer && (
          <Drawer
            anchor={"left"}
            open={openDrawer}
            onClose={()=>{setOpenDrawer(false)}}
          >
            <Box className={classes.SwipeableDrawer}>
              <div>
                <Carousel
                  height={100}
                  duration={1000}
                  animation="slide"
                  // autoPlay={false}
                  CarouselFullHeightHoverWrapper={{style: {maxHeight:"200px"}}}
                  indicatorIconButtonProps={{
                    style: {
                      color: "rgb(255, 255, 255)",
                    },
                  }}
                  activeIndicatorIconButtonProps={{
                    style: {
                      color: "rgb(255, 255, 255, 0.5)",
                    },
                  }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: "-24px",
                      textAlign: "center",
                    },
                  }}
                >
                  {bannerData &&
                    bannerData.map((item, i) => {
                      return <Item key={i} item={item} />;
                    })}
                </Carousel>
              </div>
              <div style={{ padding: "20px 0 10px 24px" }}>
                <div style={{marginRight:"24px"}}>
                <div>
                  <Typography className="fenceTitle">The Boston Fence Company</Typography>
                  <Typography className="fence">Fence contractor</Typography>
                </div>

                <div className="dividerin"></div>
                <Button className={classes.buttonCss1} >Contact Us</Button>
                <div className="dividerin"></div>
                <Typography className="fenceTitle" style={{fontSize:"20px"}}>Images & Videos</Typography></div>
                <div className="imgvideoList">
                  {bannerData.map((item, i) => {
                    return (
                      <img
                        src={item}
                        alt=""
                        style={{ height: "156px", borderRadius: "12px" }}
                      />
                    );
                  })}
                </div>
                <div className="newCard">
                  <Typography>Are you a Home Service Provider?</Typography>
                  <Button className={classes.Activebutton}>Join our pro network{" "}<IoIosArrowForward style={{color:"#fff", fontSize:"20px"}}/></Button>
                </div>
              </div>
            </Box>
          </Drawer>
        )}
      </Box>
    </Page>
  );
}
