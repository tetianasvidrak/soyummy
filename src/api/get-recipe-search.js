import axios from "../axios/axios";

export const getRecipesByQuery = async (q) => {
  try {
    const res = await axios.get(`/recipes/search?q=${q}`);

    return res;
  } catch (err) {
    throw Error(err);
  }
};
