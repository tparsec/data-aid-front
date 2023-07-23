import Dialog from "./Dialog";
import Form from "../form/Form";

const FormDialog = ({
  title,
  hideTitle,
  onClose,
  onConfirm,
  open,
  actionButtons,
  children,
  submitButtonProps,
  submitText,
  hideSubmitButton,
}) => {
  const dialogProps = {
    title,
    hideTitle,
    onClose,
    open,
  };

  const formProps = {
    submitButtonProps,
    submitText,
    hideSubmitButton,
    onSubmit: onConfirm,
    actionButtons,
    children,
  };

  return (
    <Dialog {...dialogProps} hideActions>
      <Form {...formProps} />
    </Dialog>
  );
};

export default FormDialog;
