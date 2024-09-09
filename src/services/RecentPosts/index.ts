export const getRecentPost = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/items?sort=-createdAt&limit=9"
  );
  return res.json();
};
