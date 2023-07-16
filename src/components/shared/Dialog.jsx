import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

const Dialog = ({ title }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Dialog;
