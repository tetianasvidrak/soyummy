import axios from "../axios/axios";

export const getCategoryList = async () => {
  const res = await axios.get("/recipes/category-list");
  return res;
};
