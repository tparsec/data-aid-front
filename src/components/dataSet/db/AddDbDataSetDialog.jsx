import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useAtom } from "jotai";
import dialogAtom from "../../../atoms/dialogAtom";
import { ADD_DB_DATA_SET } from "../../../constants/dialogs";
import { DB_CONNECTION } from "../../../constants/dataSets";
import useStore from "../../../../store/store";
import TextField from "../../shared/form/TextField";
import Form from "../../shared/form/Form";
import Dialog from "../../shared/dialog/Dialog";
import FormDialog from "../../shared/dialog/FormDialog";

const AddDbDataSetDialog = () => {
  const [dialogState, setDialogState] = useAtom(dialogAtom);
  const addDataSet = useStore((s) => s.dataSet.add);
  return (
    <FormDialog
      onClose={() => setDialogState(null)}
      open={dialogState?.type === ADD_DB_DATA_SET}
      title="Setup database connection"
      onConfirm={(vals) => addDataSet(DB_CONNECTION, vals)}
    >
      <TextField name="name" label="Name" />
      <TextField name="dbConnectionSource.server" label="Server" />
      <TextField name="dbConnectionSource.databaseName" label="Database" />
      <TextField name="dbConnectionSource.username" label="Username" />
      <TextField name="dbConnectionSource.password" label="Password" />
    </FormDialog>
  );
};

export default AddDbDataSetDialog;
