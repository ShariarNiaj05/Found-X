import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";

export const useUserRegistration = (userData) => {
  return useMutation({
    mutationKey: ["user_registration"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      console.log("user creation completed");
    },
  });
};
