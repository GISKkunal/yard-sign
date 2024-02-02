import React, { useState, useEffect } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";
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
    padding: "10px 0px 10px 0px",
    fontSize: "30px",
    fontFamily: "sans-serif",
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
  gridTeam: {
    padding: "45px",
    borderTopLeftRadius: "26px",
    borderTopRightRadius: "26px",
    background: "#272727",
    display: "flex",
    justifyContent: "center",
  },

  typo: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "36.324px",
    lineHeight: "16px",
    // background: 'linear-gradient(180.99deg, #2FF3FF -25%, #1E92AA 141.48%)',
    // '-webkit-background-clip': 'text',
    // '-webkit-text-fill-color': 'transparent',
    // 'background-clip': 'text',
    // 'text-fill-color': 'transparent',
    color: "#2FF3FF",
  },
  typoPeople: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "36.324px",
    lineHeight: "16px",
    background: "linear-gradient(180.99deg, #2FF3FF -25%, #1E92AA 141.48%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "background-clip": "text",
    "text-fill-color": "transparent",
  },
  typo1: {
    color: "#fff",
    fontSize: "34px",
    fontFamily: "Saira Semi Condensed",
  },
  div: {
    background: "#25BCCF",
    padding: "1rem",
    borderBottomLeftRadius: "26px",
    borderBottomRightRadius: "26px",
    display: "flex",
    justifyContent: "center",
  },
  v1rank: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16.144px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  forminput: {
    width: "15%",
    background: "#25BCCF",
  },
  formControl: {
    padding: "5px 15px",
    background: "#25BCCF",
    borderRadius: "5.045px",
    "& .MuiSelect-select": {
      color: "#fff",
      textAlign: "start",
    },
    "& .MuiSelect-icon": {
      color: "#fff",
    },
  },
  DirectR: {
    fontFamily: "Saira Semi Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "32px",
    lineHeight: "39px",
    color: " #FFFFFF",
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

const data = [
  {
    item: "14.03.23",
    item1: "rrpxl",
    item2: "rrpxl",
    item3: "1",
  },
  {
    item: "14.03.23",
    item1: "rrpxl",
    item2: "rrpxl",
    item3: "2",
  },
  {
    item: "14.03.23",
    item1: "rrpxl",
    item2: "rrpxl",
    item3: "3",
  },
  {
    item: "14.03.23",
    item1: "rrpxl",
    item2: "rrpxl",
    item3: "4",
  },
];
const ReferTeam = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("ALL");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.getReferralDetails(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.headbox}>
        <Box style={{ marginTop: "20px" }} mb={3}>
          <Grid style={{ alignItems: "center" }}>
            <Grid lg={12} className={classes.gridA}>
              <Grid item lg={12} className={classes.community}>
                <Typography className={classes.DirectR}>Team</Typography>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6} sm={6}>
                  <Grid container className={classes.gridTeam}>
                    <Typography className={classes.typo}>
                    {props.data.v2usersCount && props.data.v2usersCount}&nbsp;
                      <span className={classes.typoPeople}>People</span>
                    </Typography>
                  </Grid>
                  <div className={classes.div}>
                    <Typography className={classes.v1rank}>V2 RANK</Typography>
                  </div>
                </Grid>

                <Grid item xs={12} md={6} lg={6} sm={6}>
                  <Grid container className={classes.gridTeam}>
                    <Typography className={classes.typo}>
                      {props.data.v3usersCount && props.data.v3usersCount} <span className={classes.typoPeople}>People</span>
                    </Typography>
                  </Grid>

                  <div className={classes.div}>
                    <Typography className={classes.v1rank}>V3 RANK</Typography>
                  </div>
                </Grid>
              </Grid>
              <Grid style={{ marginTop: "20px", paddingBottom: "20px" }}>
                <Grid
                  xs={12}
                  lg={12}
                  sm={12}
                  md={12}
                  style={{
                    paddingTop: "50px",
                    paddingBottom: "30px",
                    background: "#272727",
                    borderRadius: "26px",
                  }}
                >
                  <Grid
                    container
                    xs={12}
                    md={12}
                    lg={12}
                    style={{ padding: "0px 40px 25px" }}
                  >
                    <Grid item xs={6} lg={6} md={6}>
                      <Typography className={classes.typo1}>
                        Direct referral details
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={6}
                      md={6}
                      style={{ textAlign: "end" }}
                    >
                      <FormControl className={classes.formControl}>
                        <Select
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={age}
                          onChange={handleChange}
                        >
               
                          <MenuItem value="ALL">All</MenuItem>
                          <MenuItem value="V1">V1</MenuItem>
                          <MenuItem value="V2">V2</MenuItem>
                          <MenuItem value="V3">V3</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid>
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
                            <TableCell
                              align="center"
                              className={classes.headCell}
                            >
                              Date
                            </TableCell>

                            <TableCell
                              align="center"
                              className={classes.headCell}
                            >
                              Email
                            </TableCell>
                      
                           
                            <TableCell
                              align="center"
                              className={classes.headCell}
                            >
                              Level
                            </TableCell>
                            <TableCell
                              align="center"
                              className={classes.headCell}
                            >
                              Number of team members
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody style={{}}>
                    
                          {props.data.data &&
                            props?.data.data.map((values, index) => {
                              return (
                                <TableRow>
                                  <TableCell
                                    align="center"
                                    className={classes.tables}
                                  >
                                    {moment(values.date).format("DD.MM.YY")}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes.tables}
                                  >
                                    {values.email}
                                  </TableCell>
                                
                              
                                  <TableCell
                                    align="center"
                                    className={classes.tables}
                                  >
                                    {values.userLevel}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes.tables}
                                  >
                                    {values.teamMember}
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ReferTeam;
