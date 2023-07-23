import { TextField as MuiTextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const TextField = ({ name, label }) => {
  const { register } = useFormContext();
  return <MuiTextField label={label} {...register(name)} />;
};

export default TextField;
