"use client";
import { useFieldArray, useForm } from "react-hook-form";

export default function page() {
  const { control } = useForm();
  const {} = useFieldArray({});
  return (
    <div>
      <h1> Create Post Page </h1>
    </div>
  );
}
