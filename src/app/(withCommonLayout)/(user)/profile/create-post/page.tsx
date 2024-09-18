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
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />
          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields?.map(field, index) => (
          <div key={field.id}>
            <FXInput name={`questions.${index + 1}.value`} label="Questions"/>
          </div>
          )}

          <Divider className="my-5" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
