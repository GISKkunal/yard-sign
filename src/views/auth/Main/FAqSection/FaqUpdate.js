import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import FaqData from "./FaqData";
import ApiConfig from "src/config/APICongig";
import Axios from "axios";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import DataNotFoundIMG from "src/component/DataNotFoundIMG";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headbox: {
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "90px",
    minHeight: "50vh",
    fontSize: "36px",
    background:
      "linear-gradient(180deg, rgba(182, 113, 236, 0.8) 0%, rgba(44, 0, 169, 0.8) 100%)",
    "& h4": {
      fontFamily: 'Saira Semi Condensed',
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "54px",
      color: "#004AAD",
      textAlign: "start"
    },

    "& a": {
      color: "#b26b23",
    },
  },
  bottomNavigation: {
    display: "flex",
    gap: "0.5rem",
    paddingBottom: "1rem",
    marginTop: "12px"
  },
  bottomNavigationText: {
    fontFamily: "Saira Semi Condensed",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "17px",

    color: "#004AAD !important",
    paddingTop: "0.8rem",

  },
}));

function Faq() {
  const classes = useStyles();
  const [dataList, setDataList] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const FaqSListHander = async () => {
    try {
      const res = await Axios({
        method: "GET",
        url: ApiConfig.faqList,
      });

      if (res.data.responseCode === 200) {
        setDataList(res.data.result.docs);
        setIsLoader(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoader(false);
    }
  };

  useEffect(() => {
    FaqSListHander();
  }, []);
  // width: 100%;
  // max-width: 1248px;
  // padding-left: 27px;
  // padding-right: 27px;
  return (
    <>
      <Box className={classes.headbox}>
        <Container maxWidth="lg">
          <Box className="termcondition">
            <Box align="center" mt={2}>
              <Typography variant="h4">Frequently asked questions</Typography>
            </Box>

            <Box mt={5} mb={3}>
              {isLoader ? (
                <ButtonCircularProgress />
              ) : (
                <Grid container spacing={1}>
                  {dataList &&
                    dataList.map((data, i) => {
                      return (
                        <Grid item xs={12} sm={12} md={12} key={i}>
                          <FaqData data={data} index={i} />
                        </Grid>
                      );
                    })}
                </Grid>
              )}

              {dataList && dataList.length === 0 && <DataNotFoundIMG />
              }
              <Box className={classes.bottomNavigation}>
                <Link to="/">
                  <img src="images/backIcon.svg" alt="backIcon" />
                </Link>
                <Typography className={classes.bottomNavigationText}>
                  Back
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Faq;
