import React from "react";
import AddDataSetButton from "../dataSet/AddDataSetButton";
import { DB_CONNECTION } from "../../constants/dataSets";
import useStore from "../../../store/store";
import dialogAtom from "../../atoms/dialogAtom";
import { ADD_DB_DATA_SET } from "../../constants/dialogs";
import { useAtom } from "jotai";
import AddDbDataSetDialog from "../dataSet/db/AddDbDataSetDialog";

const styles = {
  wrapper: (theme) => ({
    padding: "10px",
  }),
};

const Project = () => {
  const dataSets = useStore((s) => s.dataSet.items);
  const [dialogState, setDialogState] = useAtom(dialogAtom);
  console.log(dialogState);
  return (
    <div css={styles.wrapper}>
      {dataSets.map((x) => (
        <p>{x.id}</p>
      ))}
      <AddDataSetButton
        title="Connect db"
        type={DB_CONNECTION}
        handleClick={() => setDialogState({ type: ADD_DB_DATA_SET })}
      />
      <AddDbDataSetDialog />
    </div>
  );
};

export default Project;
