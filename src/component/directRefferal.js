import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast } from "react-toastify";
const useStyles = makeStyles((theme) => ({
  headbox: {
    borderRadius: "20px",
    "& h4": {
      color: "#fff",
      fontSize: "36px",
      fontStyle: "normal",
      fontFamily: "Saira Semi Condensed",
      fontWeight: "700",
      lineHeight: "54px",
    },
  },
  gridA: {
    background: "#161616",
    borderRadius: "26px",
    padding: "27px",
  },
  gridB: {
    paddingTop: "42px",

    color: "#fff",
  },
  gridC: {
    textAlign: "end",
    paddingTop: "50px",
  },
  planText: {
    color: "#fff",
  },
  Card1: {
    overflow: "hidden",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cards/div.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "26px",
    minHeight: "120px",
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },
  Card2: {
    overflow: "hidden",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cards/div1.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "26px",
    minHeight: "120px",
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },
  Card3: {
    overflow: "hidden",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cards/div2.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "26px",
    minHeight: "120px",
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },
  Card4: {
    overflow: "hidden",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cards/div3.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "26px",
    minHeight: "120px",
    "& .MuiCardContent-root": {
      padding: "0px",
    },
  },
  Card5: {
    overflow: "hidden",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cards/div4.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "26px",
    display: "grid",
    justifyContent: "center",
    "& .MuiCardContent-root": {
      padding: "0px",
    },
    "& .MuiCardContent-root:last-child": {
      padding: "0px",
    },
  },
  community: {
    color: "#fff",
    padding: "10px 0px 10px 0px",
    fontSize: "30px",
    fontFamily: "sans-serif",
  },
  cardTypography: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "26px",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    // paddingTop: '78px',
    "@media(max-width:1702px)": {
      // paddingTop: '40px',
    },
  },
  cardTypography1: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "39px",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    // paddingTop: '78px',
    "@media(max-width:1702px)": {
      // paddingTop: '40px',
    },
  },
  DirectR: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "39px",
    color: " #FFFFFF",
  },
}));

const data = [
  {
    item: "Card1",
    name: "Active member",
  },
  {
    item: "Card2",
    name: "Inactive member",
  },
  {
    item: "Card3",
    name: "Today’s Profit",
  },
  {
    item: "Card4",
    name: "Yesterday’s Profit",
  },
];
const DirectReferral = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState([]);
  const [totalProfit, setTotalProfit] = useState("");
  const infoDrop = () => {
    if (isOpen === true) {
      setIsOpen(null);
    } else {
      setIsOpen(true);
    }
  };
  // get directReferral count  api integration
  const directReferral = async (values) => {
    const token = localStorage.getItem("token");


    try {
      const res = await Axios({
        method: "GET",
        url: ApiConfig.directReferral,
        headers: { token: token },
      });

      if (res.data.statusCode === 200) {
       
        setCount([
          {
            item: "Card1",
            count: res.data.result.activeUser,
            name: "Active member",
          },
          {
            item: "Card2",
            count: res.data.result.inactiveUser,
            name: "Inactive member",
          },
          {
            item: "Card3",
            count: res.data.result.todayProfit,
            name: "Today’s Profit",
          },
          {
            item: "Card4",
            count: res.data.result.yesterdayProfit,
            name: "Yesterday’s Profit",
          },
        ]);
        setTotalProfit(res.data.result.totalProfit);
      } else {
        // toast.error("res.data.responseMessage");
      }
    } catch (error) {
      // toast.error(error.response.data.responseMessage);
    }
  };

  useEffect(() => {
    directReferral();
  }, []);

  return (
    <>
      <Box className={classes.headbox}>
        <Box style={{ marginTop: "20px" }} mb={3}>
          <Grid style={{ alignItems: "center" }}>
            <Grid lg={12} className={classes.gridA}>
              <Grid item lg={12} className={classes.community}>
                <Typography className={classes.DirectR}>
                  Direct Referral
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                {count &&
                  count.map((values) => {
                    let Cname = values.item;
                    return (
                      <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Card className={classes[Cname]}>
                          <CardContent
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              height: "120px",
                            }}
                          >
                            <Typography
                              className={classes.cardTypography}
                              style={{ fontSize: "39px", fontWeight: "700" }}
                            >
                              {values.count}
                            </Typography>
                            <Typography className={classes.cardTypography}>
                              {values.name}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                <Grid
                  xs={12}
                  lg={12}
                  sm={12}
                  md={12}
                  style={{ padding: "12px" }}
                >
                  <Card className={classes.Card5}>
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "120px",
                      }}
                    >
                      <Typography
                        className={classes.cardTypography}
                        style={{ fontSize: "39px", fontWeight: "700" }}
                      >
                        {totalProfit && totalProfit}
                      </Typography>
                      <Typography className={classes.cardTypography1}>
                    Total Profit
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DirectReferral;
