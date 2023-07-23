import { TextField as MuiTextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const TextField = ({ name }) => {
  const { register } = useFormContext();
  return <MuiTextField {...register(name)} />;
};

export default TextField;
