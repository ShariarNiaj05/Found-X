import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IProps {
  children: ReactNode;
}
const FXForm = ({ children }: IProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
