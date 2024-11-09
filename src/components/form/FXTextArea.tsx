import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

const FXTextArea = () => {
  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
};

export default FXTextArea;
