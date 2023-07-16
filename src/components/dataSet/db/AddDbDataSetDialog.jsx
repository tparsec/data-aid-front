import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import dialogAtom from "../../../atoms/dialogAtom";
import { ADD_DB_DATA_SET } from "../../../constants/dialogs";
import { DB_CONNECTION } from "../../../constants/dataSets";
import useStore from "../../../../store/store";

const AddDbDataSetDialog = () => {
  const [dialogState, setDialogState] = useAtom(dialogAtom);
  const addDataSet = useStore((s) => s.dataSet.add);
  console.log(dialogState.type === ADD_DB_DATA_SET);
  return (
    <Dialog
      onClose={() => setDialogState(null)}
      open={dialogState.type === ADD_DB_DATA_SET}
    >
      <DialogTitle>Setup database connection</DialogTitle>
      <DialogActions>
        <Button onClick={() => setDialogState(null)}>Cancel</Button>
        <Button onClick={() => addDataSet(DB_CONNECTION)}>Connect</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDbDataSetDialog;
