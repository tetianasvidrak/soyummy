import axios from "../axios/axios";

export const getCategoryRecipes = async (data) => {
  const res = await axios.get(`/recipes/category/${data}`);
  return res;
};
