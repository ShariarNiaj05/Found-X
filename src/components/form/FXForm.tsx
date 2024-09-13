import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IProps {
  children: ReactNode;
}
const FXForm = ({ children }) => {
  const methods = useForm();
  const SubmitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={SubmitHandler}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
