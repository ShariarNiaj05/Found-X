import { FormProvider, useForm } from "react-hook-form";

const FXForm = ({ children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
