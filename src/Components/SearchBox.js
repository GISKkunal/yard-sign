import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));
const nominatum = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};
export default function SearchBox(props) {
  const { selectPositionPops, setSelectPosition, handlesetLat } = props;
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  console.log(inputText);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          Search Box
          <OutlinedInput
            style={{ width: "100%" }}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Stack>
            <ColorButton
              variant="contained"
              color="primary"
              onClick={() => {
                const params = {
                  q: inputText,
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
                    console.log(JSON.parse(result));
                    setListItems(JSON.parse(result));
                  })
                  .catch((err) => console.log("err", err));
              }}
            >
              Search
            </ColorButton>
          </Stack>
        </div>
      </div>
      <div>
        <List components="nav" aria-label="main mailbox folders">
          {listItems.map((item) => {
            return (
              <div key={item?.osm_id}>
                <ListItem
                  onClick={() => {
                    setSelectPosition(item);
                    handlesetLat([item.lon, item.lat]);
                    console.log(item, "itemssss");
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="images/icons/placeholder.svg"
                      alt="placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
              </div>
            );
          })}
        </List>
      </div>
    </>
  );
}
