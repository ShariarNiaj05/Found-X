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
  return (
    <div>
      <FormProvider {...methods}>
        <FXInput name="title" label="Title" />
      </FormProvider>
    </div>
  );
}
