import React, { useContext } from "react";
import withStyles from '@mui/styles/withStyles';
import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsContext from "src/context/SettingsContext";
import moment from "moment";



const rows = [
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Active" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Pending" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Active" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Pending" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Active" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Pending" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Active" },
  { ReferredDate: "01-01-2023", UserName: "john.doe1", Name: "john.doe1", status: "Pending" },

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ referralHistoryData }) {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: themeSeeting.settings.theme === "LIGHT" ? "#0B1426" : "#fff",
      color: themeSeeting.settings.theme === "LIGHT" ? "#fff" : "#172031",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: themeSeeting.settings.theme === "LIGHT" ? "#fff" : "#0B1426",
    },
  }))(TableRow);

  const maxLength = 15;

  return (
    <TableContainer component={Paper}>
      {referralHistoryData && <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ReferredDate</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {referralHistoryData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={themeSeeting.settings.theme === "LIGHT" ? { color: "#172031" } : { color: "#fff" }} align="center">{row.referredDate ? moment(row.referredDate).format('DD-MM-YYYY') : "--"}</StyledTableCell>
              <StyledTableCell style={themeSeeting.settings.theme === "LIGHT" ? { color: "#172031" } : { color: "#fff" }} align="center">{row.userName ? (row.userName > maxLength ? row.userName.slice(0, maxLength) + "..." : row.userName) : "--"}</StyledTableCell>
              <StyledTableCell style={themeSeeting.settings.theme === "LIGHT" ? { color: "#172031" } : { color: "#fff" }} align="center">{row.firstName ? (row.firstName > maxLength ? row.firstName.slice(0, maxLength) + "..." : row.firstName) : "--"}</StyledTableCell>
              <StyledTableCell style={themeSeeting.settings.theme === "LIGHT" ? { color: "#172031" } : { color: "#fff" }} align="center">{row.status ? (row.status == "ACTIVE" ? "Active" : "Pending") : "--"}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>}
    </TableContainer>
  );
}
