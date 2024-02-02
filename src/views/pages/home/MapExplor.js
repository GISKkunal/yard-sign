import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import GoogleMapReact from "google-map-react";
import { FaArrowRight } from "react-icons/fa6";
const useStyles = makeStyles((theme) => ({
  largeText: {
    color: "#172624 !important",
    textAlign: "center",
    fontFamily: "Big Shoulders Display, sans-serif !important",
    fontSize: "42px !important",
    fontStyle: "normal",
    fontWeight: "800 !important",
    lineHeight: "51px !important",
    textTransform: "uppercase",
    "@media (max-width: 920px)": {
      fontSize: "38px !important",
      lineHeight: "44px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "26px !important",
      lineHeight: "35px !important",
    },
  },
  body1: {
    fontFamily: "'Noto Sans', sans-serif !important ",
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "150%",
    color: "#172624 !important",
    margingTop: "20px",
    textAlign: "center",
    margingTop: "8px",
    "@media (max-width: 920px)": {
      fontSize: "18px !important",
      lineHeight: "20px !important",
    },
    "@media (max-width: 599px)": {
      fontSize: "17px !important",
      lineHeight: "20px !important",
    },
  },
  typoSeparate: {
    marginTop: "24px",
    display: "grid",
    gap: "16px",
    marginBottom: "40px",
  },
  transButton: {
    fontFamily: "'Noto Sans', sans-serif !important",
    borderRadius: "6px !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    minHeight:"56px !important",
    fontSize: "15.2381px !important",
    lineHeight: "18px",
    color: "#fff !important",
    cursor: "pointer",
    padding: "12px 24px !important",
    maxWidth: "350px !important",
    background: "#172624 !important",
    width: "100% !important",
    "&:hover": {
      color: "#fff !important",
      background: "#172624 !important",
    },
    "@media (max-width: 920px)": {
      maxWidth: "290px !important",
    },
    "@media (max-width: 599px)": {
      maxWidth: "80px !important",
      padding: "8px !important",
      minHeight:"30px !important",
    },
  },
  displayButtonText: {
    "@media (max-width: 599px)": {
      display: "none !important",
    },
  },
  newButtonDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-9%",
    "@media (max-width: 920px)": {
      marginTop: "-13%",
    },
    "@media (max-width: 599px)": {
      marginTop: "-12%",
    },
    "@media (max-width: 410px)": {
      marginTop: "-15%",
    },
  },
  manageCategory: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    overflow: "auto",

    "& .button": {
      borderRadius: "30px",
      border: "0.5px solid #172624",
      padding: "5px 20px",
      color: "#172624",
    },
  },
}));
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function MapExplor() {
  const classes = useStyles();
  const [category, setCategory] = useState([
    "All",
    "Builder/Contractor",
    "Architect/Designer",
    // "Fence Sales & Installation",
    "Garage Door & Repair",
  ]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1130 && window.innerWidth > 899) {
        console.log(1130);
        const updatedCategory = [...category];
        updatedCategory.splice(3, updatedCategory.length);
        setCategory(updatedCategory);
      } else if (window.innerWidth < 900 && window.innerWidth > 699) {
        const updatedCategory = [...category];
        updatedCategory.splice(2, updatedCategory.length);
        setCategory(updatedCategory);
      } else if (window.innerWidth < 700) {
        const updatedCategory = [...category];
        updatedCategory.splice(1, updatedCategory.length);
        setCategory(updatedCategory);
      } else {
        setCategory([
          "All",
          "Builder/Contractor",
          "Architect/Designer",
          "Garage Door & Repair",
        ]);
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.largeText}>
              New Home Improvement Map Search Engine
            </Typography>
            <div className={classes.typoSeparate}>
              <Typography className={classes.body1}>
                <img src="images/Star.svg" style={{ marginRight: "12px" }} />{" "}
                Find Hundreds of the top pro's for any project - Right in the
                Neighborhood
              </Typography>
              <Typography className={classes.body1}>
                <img src="images/Star.svg" style={{ marginRight: "12px" }} />{" "}
                Click Map Marker for Instant Access
              </Typography>
              <Typography className={classes.body1}>
                <img src="images/Star.svg" style={{ marginRight: "12px" }} />{" "}
                Complete Smart Map Search for complete list of service providers
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={classes.manageCategory}>
                {category.map((values) => {
                  return (
                    <Button
                      style={values.length > 10 ? { minWidth: "265px" } : {}}
                      className="button"
                    >
                      {values}{" "}
                    </Button>
                  );
                })}
                <Button style={{ minWidth: "127px" }} className="button">
                  See All&nbsp;&nbsp;&nbsp;
                  <FaArrowRight />{" "}
                </Button>
              </div>
            </div>
            <div>
              <img src="images/mapImage.svg" alt="" style={{ width: "100%" }} />
              <div className={classes.newButtonDiv}>
                <Button className={classes.transButton}>
                  <span className={classes.displayButtonText}>
                    Go To YardSignPro Map &nbsp;&nbsp;&nbsp;
                  </span>

                  <FaArrowRight />
                </Button>
              </div>
            </div>

            {/* <Box style={{ height: "60vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
