import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["user_registration"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      console.log("user creation completed");
    },
  });
};
