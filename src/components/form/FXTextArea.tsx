import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}
const FXTextArea = ({ name, label, variant = "bordered" }: IProps) => {
  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
};

export default FXTextArea;
