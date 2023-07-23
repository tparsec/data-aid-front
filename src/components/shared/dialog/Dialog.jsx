import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const Dialog = ({
  title,
  hideTitle,
  hideActions,
  onClose,
  onConfirm,
  children,
  open,
}) => {
  return (
    <MuiDialog onClose={onClose} open={open}>
      {!hideTitle && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {!hideActions && (
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Connect</Button>
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
