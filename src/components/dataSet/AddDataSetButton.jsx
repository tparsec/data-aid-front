import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import useStore from "../../../store/store";

const styles = {
  button: (theme) => ({
    backgroundColor: theme.color.dark,
    verticalAlign: "middle",
    height: "50px",
    width: "85px",
    fontSize: "0.7rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "3px",
    cursor: "pointer",
    padding: "8px 0 8px 8px",
  }),
  textWrapper: {
    width: "70%",
    display: "inline-block",
  },
  iconWrapper: {
    width: "30%",
    display: "inline-block",
  },
};

const AddDataSetButton = ({ title, handleClick }) => {
  return (
    <div css={styles.button} onClick={handleClick}>
      <div css={styles.textWrapper}>{title}</div>
      <div css={styles.iconWrapper}>
        <AddIcon />
      </div>
    </div>
  );
};

export default AddDataSetButton;
