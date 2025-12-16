import api from "../lib/axios";
// Fetch all categories from API
export const getAllCategories = async (): Promise<CategoryType[]> => {
  const res = await api.get("/categories");
  return res.data;
};
