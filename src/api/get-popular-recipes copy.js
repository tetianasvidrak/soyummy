import axios from "../axios/axios";

export const getPopularRecipe = async () => {
  const res = await axios.get("/recipes/popular-recipe");
  return res;
};
