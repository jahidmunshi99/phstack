import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsModal({ onClose, noteMsg }) {
  return (
    <React.Fragment>
      <Dialog
        open
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            minWidth: 500,
          },
        }}
      >
        <DialogTitle>{"Project Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {noteMsg == "" ? <div>No note set yet !</div> : noteMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
