import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Draggable from "react-draggable";

function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

export default function ConfirmationPopup({ onClose, promptconfig, onSave, saveTask }) {
  const { title, subtitle, buttontxt, Logo, LogoColor } = promptconfig;
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div className="flex flex-col items-center justify-center px-6 py-3 text-center">
          <Logo
            className={`text-7xl text-${!LogoColor ? "black" : LogoColor}-600`}
          />

          <DialogTitle
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="text-center"
          >
            {title}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>{!subtitle ? "" : subtitle}</Typography>
          </DialogContent>

          <DialogActions className="flex justify-center gap-3">
            <Button variant="contained" autoFocus onClick={onClose}>
              Cancel
            </Button>
            <Button color="warning" variant="contained" onClick={()=>onSave(saveTask)}>
              {!buttontxt ? "" : buttontxt}
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
