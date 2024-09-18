"use client";

import FXInput from "@/src/components/form/FXInput";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

export default function page() {
  const methods = useForm();
  const { control } = methods;
  const {} = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(postData);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />
        </form>
      </FormProvider>
    </div>
  );
}
