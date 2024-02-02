import React from "react";
import { useCookies } from "react-cookie";
import { Typography } from "@mui/material";

const CookiesPop = () => {
  const [cookies, setCookie] = useCookies(["name"]);

  function onChange(newName) {
    setCookie("name", newName, { path: "/" });
  }
  return (
    <div>
    
      <Typography onChange={onChange} name={cookies.name}>
        Hellowgdhgkdshsdkhndjkshngskdlj
      </Typography>
      {cookies.name && <h1>Hellogsfgdfjksdfjksgnjkdfsnjk {cookies.name}!</h1>}
    </div>
  );
};

export default CookiesPop;
