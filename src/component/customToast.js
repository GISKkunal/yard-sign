import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    paper: {
        width: "267px",
        height: "224px",
        background: "#273238",
        border: "none",
        borderRadius: "8px",
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        paddingTop: "57px"
    },
    icon: {
        display: "flex",
        justifyContent: "center",
    },
    message: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "7px"
    },
    messageContent: {
        fontFamily: "'Noto Sans', sans-serif",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "130%",
        textAlign: "center",
        color: "#FFFFFF",
    }
}));

export default function CustomToast(props) {
    const { type, open, handleClose, message } = props;
    const classes = useStyles();
    //   const [open, setOpen] = React.useState(false);

    //   const handleOpen = () => {
    //     setOpen(true);
    //   };
    console.log(type, open);
    const handleCloseModal = () => {
        handleClose(false);
    };
    console.log(open, "open");
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.icon}>
                            {type === "success" ? (
                                <img src="images/success.svg"></img>
                            ) : type === "error" ? (
                                <img src="images/error.svg"></img>
                            ) : (
                                <img src="images/warn.svg" />
                            )}
                        </div>
                        <div className={classes.message}>
                            <p id="transition-modal-description" className={classes.messageContent}>
                                {message}
                            </p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
