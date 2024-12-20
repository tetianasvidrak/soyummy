import axios from "../axios/axios";

export const getIngredientsList = async () => {
  const res = await axios.get("/ingredients/list");
  return res;
};
