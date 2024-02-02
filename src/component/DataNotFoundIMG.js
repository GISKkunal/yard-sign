import { Box, Typography } from "@mui/material";
import React from "react";

export default function DataNotFoundIMG() {
  return (
    <Box
      style={{
        margin: "0 auto",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <img
          // onClick={() => navigate('/login')}
          src="/images/dataNotFound.png"
          alt="Data Not Found"
          style={{ cursor: "pointer" }}
        // {...props}
        />
      </div>

      <Typography
        style={{
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Saira Semi Condensed",
          textAlign: "center",
        }}
      >
        No Records
      </Typography>
    </Box>
  );
}
