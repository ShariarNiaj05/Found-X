"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async () => {
  try {
    const { data } = await axiosInstance.post("/auth/register");
  } catch (error: any) {
    throw new Error(error);
  }
};
