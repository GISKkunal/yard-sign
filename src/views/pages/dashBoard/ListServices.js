import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListServices({ classes, handleCallBack }) {
  const [listData, setListData] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className="SideBarBox">
          <Box className="firstBox">
            <div className="backgroundDiv">
              <div style={{ display: "grid", gap: "20px" }}>
                <div className="imgMainDiv">
                  <div className="imgDiv">
                    <img
                      src="images/profilePic.svg"
                      alt=""
                      style={{ width: "100%", borderRadius:"50%" }}
                    />
                  </div>
                  <img src="images/editPen.svg" alt="" className="editImg" />
                </div>
                <div>
                  <Typography>Business Name</Typography>
                  <Typography className="labelTitle">
                    MillerFence.com
                  </Typography>
                </div>
                <Button 
                onClick={()=>{ navigate("/edit-profile");}}
                className="editButton">Edit Profile</Button>
              </div>
            </div>
            <div className="buttonGroup">
              <Button className="newButtoncss">
                create my company yard sign
              </Button>
              <Button className="newButtoncss">
                Revise my company yard sign
              </Button>
              <Button className="newButtoncss">
                <span>
                  Post company yard sign <br />{" "}
                  <span style={{ color: "#D19A1D" }}>
                    {" "}
                    “60 days free trail”
                  </span>
                </span>
              </Button>
              <Button className="newColorButtoncss">My Subscriptions</Button>
            </div>
          </Box>

          <Box className="SecondBox">
            <Box
              className="flexBox"
              style={{ marginBottom: "20px", gap: "8px" }}
            >
              <div>
                <Typography className="title">Add Services</Typography>
                <Typography className="CardText">
                  6/12 Yard Signs added{" "}
                  <span style={{ color: "#D19A1D" }}>Buy more</span>
                </Typography>
              </div>
              <div className="divFlex">
                <Button
                  className="buttoncss"
                  onClick={handleCallBack}
                  style={{ minWidth: "auto" }}
                >
                  ADD MANUAL
                </Button>
                <Button className="buttoncss" style={{ minWidth: "auto" }}>
                  IMPORT CSV
                </Button>
              </div>
            </Box>

            <Box>
              <div>
                <img
                  src="images/innerImage.svg"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div
                style={{
                  width: "-webkit-fill-available",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
                className="backGroundCard"
              >
                <img
                  src="images/image12.svg"
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <Typography className="cardTitle">Company Name</Typography>
                  <Typography className="CardText">Fence contractor</Typography>
                </div>
              </div>
              {listData.map((values) => {
                return (
                  <Box className="backGroundCard">
                    <div className="alignDiv">
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        <img src="images/markerLocation.svg" alt="" />
                        <Typography
                          className="CardText"
                          style={{ fontSize: "14px" }}
                        >
                          110 Park St, Beverly, MA 01915, United States
                        </Typography>
                      </div>
                      <div style={{ display: "flex", gap: "30px" }}>
                        <img src="images/zoomToMap.svg" alt="" />
                        <img src="images/PencilSimple.svg" alt="" />
                        <img src="images/TrashSimple.svg" alt="" />
                      </div>
                    </div>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
