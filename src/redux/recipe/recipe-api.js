import axios from "../../axios/axios";

export async function getRecipeById(id) {
  const res = await axios.get(`/recipes/${id}`);
  return res;
}

export const addFavoriteRecipe = async (id) => {
  const res = await axios.put(`/recipes/favorite/${id}`);
  return res;
};

export const deleteFavoriteRecipe = async (id) => {
  const res = await axios.delete(`/recipes/favorite/${id}/`);
  return res;
};
