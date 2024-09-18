"use client";
import FXInput from "@/src/components/form/FXInput";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

export default function page() {
  const { control } = useForm();
  const {} = useFieldArray({
    control,
    name: "questions",
  });
  return (
    <div>
      <FormProvider>
        <FXInput name="title" label="Title" />
      </FormProvider>
    </div>
  );
}
