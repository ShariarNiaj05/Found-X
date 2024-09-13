import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}
const FXForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  let formConfig: IFormConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    resolver["resolver"] = resolver;
  }
  const methods = useForm();
  const SubmitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={SubmitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
