import { useForm, FormProvider } from "react-hook-form";
import { Button, Grid } from "@mui/material";

const Form = ({
  children,
  submitButtonProps,
  submitText = "Submit",
  hideSubmitButton,
  onSubmit,
  actionButtons,
}) => {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            {actionButtons}
            {!hideSubmitButton && (
              <Button variant="contained" type="submit" {...submitButtonProps}>
                {submitText}
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Form;
