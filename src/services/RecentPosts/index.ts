import envConfig from "@/src/config/envConfig";

export const getRecentPost = async () => {
  const res = await fetch(`${envConfig.baseApi}/items?sort=-createdAt&limit=9`);
  return res.json();
};
