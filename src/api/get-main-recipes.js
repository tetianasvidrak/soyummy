import axios from "../axios/axios";

export const getMainRecipes = async () => {
  try {
    const res = await axios.get("/recipes/main-page");
    return res;
  } catch (err) {
    throw Error("Oops! Something went wrong. Please try again later.");
  }
};
