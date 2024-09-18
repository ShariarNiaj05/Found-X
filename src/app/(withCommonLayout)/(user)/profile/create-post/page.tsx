"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

export default function page() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />
          <Divider className="my-5" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
