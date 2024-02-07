import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Dropzone from "react-dropzone";
import { convertToBase64 } from "src/utils/index";
import { ToastContainer, toast } from "react-toastify";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px dashed rgba(177,191,208)",
    background: "#FFF",
  },
  icon: {},
  drag: {
    color: "rgba(33, 33, 33, 0.65)",
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
    margin: "30px 0 10px 0",
    "& span": {
      color: "#0B1426",
    },
  },
  format: {
    color: "#676767",
    textAlign: "center",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "18px",
  },
});

const UploadBox = ({ setSide, setBase64, acceptedFileTypes }) => {
  const classes = useStyles();

  const handleDrop = async (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFileTypes);
    console.log(acceptedFiles[0].type);
    if (acceptedFileTypes.includes(acceptedFiles[0].type)) {
      const file = acceptedFiles[0];
      const imageBase64 = await convertToBase64(file);
      setBase64(imageBase64);
    } else {
      toast.error(
        `Unsupported file formats: ${acceptedFiles[0].type}. Please upload files in PNG, JPG, JPEG, WEBP, mp4, or mkv format.`
      );
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <Dropzone onDrop={handleDrop} >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={classes.container}>
            <input {...getInputProps()} />
            <div>
              <img src="images/UploadIcon.svg" alt="upload" />
            </div>
            <p className={classes.drag}>
              Drop your image here, or <span>Browse</span>
            </p>
            <p classNAme={classes.format}>Supports: PNG, JPG, JPEG, WEBP</p>
            <p classNAme={classes.format}>Max 3</p>
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default UploadBox;
