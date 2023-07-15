import React from "react";
import AddDataSetButton from "../dataSet/AddDataSetButton";

const styles = {
  wrapper: (theme) => ({
    padding: "10px",
  }),
};

const Project = () => {
  return (
    <div css={styles.wrapper}>
      <AddDataSetButton title="Connect db" />
    </div>
  );
};

export default Project;
