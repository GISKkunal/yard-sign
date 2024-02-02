import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent, TextField, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
    height: "100%",
    padding: "25px 27px",
    display: "grid",
    gap: "32px",
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
  card: {
    width: "90%",
  },
  community: {
    color: "#fff",
    // padding: "10px 0px 10px 0px",
    fontSize: "32px",
    fontFamily: "sans-serif",
  },
  barcode: {
    padding: "10px",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "144px",
    height: "142px",
    "& svg": {
      width: "105px !important",
      height: "143px !important",
    },
  },
  TextBox1: {
    border: "1px solid #fff",
    height: "45px",
    "& .MuiOutlinedInput-input": {
      height: "25px",
    },
  },
  share: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "38px",
    color: " #FFFFFF",
  },
  facebook: {
    background: "#0088cc",
    width: "100%",
    height: "48px",
    borderRadius: "30px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  twitter: {
    background: "#0DCAF0",
    width: "100%",
    height: "48px",
    borderRadius: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  google: {
    background:
      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    width: "100%",
    height: "48px",
    borderRadius: "30px",
    fontStyle: "normal",
    textTransform: "none",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  emailButton: {
    background: "linear-gradient(-120deg,#7289da, #99aab5, #2c2f33, #23272a)",
    width: "100%",
    height: "48px",
    borderRadius: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    textTransform: "none",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  spacing: {
    padding: "15px 0px 22px 0px",
    justifyContent: "center",
  },
  gridButton: {
    padding: "0px 40px",
  },
  gridPadding: {
    paddingTop: "28px !important",
  },
}));

const data = [
  {
    item: <img src="images/div.png" style={{ height: "7.8rem" }} />,
  },
  {
    item: <img src="images/div (1).png" style={{ height: "7.8rem" }} />,
  },
  {
    item: <img src="images/div (2).png" style={{ height: "7.8rem" }} />,
  },
  {
    item: <img src="images/div (3).png" style={{ height: "7.8rem" }} />,
  },
];
const ReferFriends = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const infoDrop = () => {
    if (isOpen === true) {
      setIsOpen(null);
    } else {
      setIsOpen(true);
    }
  };
  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <>
      <Box className={classes.headbox}>
        <Box style={{ marginTop: "20px" }} mb={3}>
          <Grid style={{ alignItems: "center" }}>
            <Grid lg={12} className={classes.gridA}>
              <Grid item lg={12} className={classes.community}>
                Refer Friends & Earn Credits
              </Grid>
              <Grid container spacing={6} className={classes.spacing}>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sm={12}
                  md={12}
                  className={classes.barcode}
                >
                  <QRCode
                    value={
                      window.location.origin +
                      `${"/register/"}`?.concat(props.code)
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={9}
                  sm={12}
                  md={12}
                  className={classes.gridPadding}
                >
                  <Typography className={classes.share}>
                    {" "}
                    Share My Referral Links
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={10} md={10} sm={10} lg={10}>
                      <TextField
                        placeholder="mail@website.com"
                        type="text"
                        variant="outlined"
                        fullWidth
                        id="inputID"
                        size="small"
                        inputProps={{ maxLength: 256 }}
                        name="email"
                        className={classes.TextBox1}
                        value={
                          window.location.origin +
                          `${"/register"}?inviteCode=${props.code}`
                        }
                        InputProps={{
                          className: classes.TextBox,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={2}
                      sm={2}
                      lg={2}
                      style={{
                        marginLeft: "-160px",
                        marginTop: "1px",
                        textAlign: "end",
                      }}
                    >
                      <CopyToClipboard
                        text={
                          window.location.origin +
                          `${"/register"}?inviteCode=${props.code}`
                        }
                        onCopy={() => handleCopy()}
                      >
                        <Button
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(180.99deg, #2FF3FF -25%, #1E92AA 141.48%)",
                            height: "47px",
                            marginTop: "-1px",
                            width: "148px",
                            cursor: "pointer",
                            whiteSpace: "noWrap",
                            color: "#FFFFFF",
                            textTransform: "none",
                          }}
                        >
                          {copy == true ? "Copied" : " Copy Link"}
                        </Button>
                      </CopyToClipboard>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                spacing={2}
                className={classes.gridButton}
              >
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button className={classes.facebook}>
                    <FaFacebookF />
                    &nbsp; Telegram
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button className={classes.twitter}>
                    <FaTwitter />
                    &nbsp; Twitter
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button className={classes.google}>
                    <FaInstagram />
                    &nbsp; Instagram
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Button className={classes.emailButton}>
                    <FaDiscord />
                    &nbsp; Discord
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ReferFriends;
