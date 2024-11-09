import React from "react";

const FXTextArea = () => {
  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
};

export default FXTextArea;
