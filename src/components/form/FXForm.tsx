import { FormProvider, useForm } from "react-hook-form";

const FXForm = () => {
  const methods = useForm();

  return <FormProvider>FXForm</FormProvider>;
};

export default FXForm;
