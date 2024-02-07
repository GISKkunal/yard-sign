import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

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
    padding: "10px 0px 19px 0px",
    fontSize: "32px",
    fontFamily: "sens-serif",
  },
  barcode: {
    textAlign: "end",
  },
  TextBox1: {
    border: "1px solid",
  },
  share: {
    color: "#fff",
  },
  facebook: {
    background: "#0D6EFD",
    width: "180px",
    height: "48px",
    borderRadius: "30px",
  },
  twitter: {
    background: "#0DCAF0",
    width: "180px",
    height: "48px",
    borderRadius: "30px",
  },
  google: {
    background: "#212529",
    width: "180px",
    height: "48px",
    borderRadius: "30px",
  },
  emailButton: {
    background: "#DC3545",
    width: "180px",
    height: "48px",
    borderRadius: "30px",
  },
  spacing: {
    padding: "15px 0px 22px 0px",
  },
  gridButton: {
    padding: "0px 0px 2rem 6rem",
  },
  headCell: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
  },
  tables: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#FFFFFF",
  },
}));

const ReferralSummary = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const infoDrop = () => {
    if (isOpen === true) {
      setIsOpen(null);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <Box className={classes.headbox}>
        <Box style={{ marginTop: "20px" }} mb={3}>
          <Grid style={{ alignItems: "center" }}>
            <Grid lg={12} className={classes.gridA}>
              <Grid item lg={12} className={classes.community}>
                Referral summary
              </Grid>
              <Grid xs={12} lg={12} sm={12} md={12}>
                <TableContainer className="TableContainerBox">
                  <Table
                    aria-label="simple table"
                    style={{ minWidth: "900px" }}
                  >
                    <TableHead
                      style={{
                        minWidth: "900px",
                        background:
                          "linear-gradient(180.99deg, #2FF3FF -25%, #1E92AA 141.48%)",
                      }}
                    >
                      <TableRow>
                        <TableCell align="center" className={classes.headCell}>
                          Reffered Members
                        </TableCell>

                        <TableCell align="center" className={classes.headCell}>
                          Total Spend
                        </TableCell>

                        <TableCell align="center" className={classes.headCell}>
                          Referral Bounces
                        </TableCell>
                        <TableCell align="center" className={classes.headCell}>
                          Tokens Purchased
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{}}>
                      {props.refferalSummary &&
                        props.refferalSummary.map((values, index) => {
                          return (
                            <TableRow>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.referralCode}
                              </TableCell>

                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.totalSpend}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.refferalBonus}
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.tables}
                              >
                                {values.tokenPurchase}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ReferralSummary;
