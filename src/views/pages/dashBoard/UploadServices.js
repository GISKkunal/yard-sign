import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast, ToastContainer } from "react-toastify";
import CustomDropZone from "./UploadBox";

export default function UploadServices({classes, handleCallBack}) {
  const [isloading, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledVideo, setDisabledVideo] = useState(false);

  const [selector, setSelector] = useState([
    "Fence Sales & Installation",
    "Landscapers",
    "Home Builders",
    "Architectural Services",
    "General Contractors",
    "Engineering Services",
    "Fence Contractors",
    "Deck Builder",
    "Remodelers",
    "Tree Service",
  ]);
  const [selectItem, setSelectItem] = useState("");
  const [frontImagePreview, setFrontImagePreview] = useState([]);
  const [frontSide, setFrontSide] = useState([]);
  const [frontVideoPreview, setFrontVideoPreview] = useState([]);
  const [frontSideVideo, setFrontSideVideo] = useState([]);

  useEffect(() => {
    if (frontImagePreview.length >= 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [frontImagePreview]);
  useEffect(() => {
    if (frontImagePreview.length >= 3) {
      setDisabledVideo(true);
    } else {
      setDisabledVideo(false);
    }
  }, [frontVideoPreview]);

  const acceptedFileTypesVideo = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "video/mp4",
    "video/x-matroska",
    "video/svg+xml",
  ];
  const acceptedFileTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "video/svg+xml",
  ];
  const handleFormSubmit = async (values) => {
    setLoader(true);
    try {
      const res = await Axios({
        method: "POST",
        url: ApiConfig.login,
        data: {},
      });

      if (res.data.responseCode === 200) {
      }
    } catch (error) {
      console.log("ERROR", error);
      setLoader(false);
      if (error.response.data.responseMessage) {
        toast.error(error.response.data.responseMessage);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const previewImage = (file) => {
    return URL.createObjectURL(file);
  };
  const handleFrontSideChange = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFrontSide([...frontSide, file]);
  };
  const handleVideoUploader = (acceptedFiles) => {
    const file = acceptedFiles[0];

    setFrontSideVideo([...frontVideoPreview, previewImage(file)]);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className="flexBox">
          <Typography className="title">Add Services</Typography>
          <div className="divFlex">
            <Button className="buttoncss">ADD MANUAL</Button>
            <Button className="buttoncss">IMPORT CSV</Button>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="backGroundCard">
          <div>
            <img src="images/innerImage.svg" alt="" style={{ width: "100%" }} />
          </div>
          <div style={{ width: "-webkit-fill-available" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  className={classes.TextBoxFormControl}
                  fullWidth
                  variant="outlined"
                >
                  <Typography className="labelTitle">
                    Sector <span style={{ color: "#FE3B3B" }}>*</span>
                  </Typography>
                  <Select
                    margin="dense"
                    variant="outlined"
                    placeholder="Select Sector"
                    displayEmpty
                    // disabled={isloading}
                    value={selectItem}
                    InputProps={{
                      className: classes.TextBox,
                    }}
                    onChange={(e) => {
                      setSelectItem(e.target.value);
                    }}
                  >
                    <MenuItem value={""}>Select Sector</MenuItem>
                    {selector.map((data) => {
                      return (
                        <MenuItem value={data} style={{ fontSize: "12px" }}>
                          {data}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {/* <FormHelperText error>{"error"}</FormHelperText> */}
              </Grid>
            </Grid>
          </div>
          <Box className={classes.mainBox}>
            <Box
              className={classes.imageBox}
              style={{ width: "-webkit-fill-available" }}
            >
              <div>
                <Typography className="labelTitle">
                  Upload Slider Photos{" "}
                  <span style={{ color: "#FE3B3B" }}>*</span>
                </Typography>
                <CustomDropZone
                  setSide={handleFrontSideChange}
                  setBase64={(items) => {
                    setFrontImagePreview([...frontImagePreview, items]);
                  }}
                  acceptedFileTypes={acceptedFileTypes}
                />
              </div>
              <Box className="imageFlex">
                {frontImagePreview.map((values) => {
                  return (
                    <div className="iconImageDiv">
                      <img src={values} alt="" className="imagesList" />
                      <img
                        src="images/XCircle.svg"
                        alt=""
                        className="iconImage"
                        onClick={() => {
                          setFrontImagePreview(
                            frontImagePreview.filter((word) => word !== values)
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </Box>
            </Box>
            <Box
              className={classes.imageBox}
              style={{ width: "-webkit-fill-available" }}
            >
              <div>
                <Typography className="labelTitle">
                  Upload Images & Videos{" "}
                  <span style={{ color: "#FE3B3B" }}>*</span>
                </Typography>
                <CustomDropZone
                  setSide={handleVideoUploader}
                  disabled={disabled}
                  setBase64={(items) => {
                    setFrontVideoPreview([...frontVideoPreview, items]);
                  }}
                  acceptedFileTypes={acceptedFileTypesVideo}
                />
              </div>
              <Box className="imageFlex">
                {frontVideoPreview.map((values) => {
                  return (
                    <div className="iconImageDiv">
                      <img src={values} alt="" className="imagesList" />
                      <img
                        src="images/XCircle.svg"
                        alt=""
                        className="iconImage"
                        onClick={() => {
                          setFrontVideoPreview(
                            frontVideoPreview.filter((word) => word !== values)
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <div className={classes.checkDiv}>
            <Checkbox
              type="checkbox"
              name="check"
              // onChange={handleChange}
              // value={values.check}
              style={{ width: "20px", height: "20px" }}
            />
            <Typography className={classes.alreadyAccount}>
              By clicking you agree to the{" "}
              <span className={classes.newbox}>Terms & Condition</span> and{" "}
              <span className={classes.newbox}>Posting Rules.</span>
            </Typography>
          </div>
          <Box className={classes.twobtnBox}>
            <Button className={classes.transButton}>Add Another</Button>
            <Button className={classes.Explore} onClick={handleCallBack}>Submit</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
