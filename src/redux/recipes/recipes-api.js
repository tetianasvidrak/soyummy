import axios from "../../axios/axios";

export async function fetchOwnRecipe(data) {
  const response = await axios.post("/recipes/ownRecipes", data);
  return response;
}

export async function getOwnRecipes() {
  const response = await axios.get("/recipes/ownRecipes/");
  return response;
}

export async function deleteOwnRecipe(id) {
  const response = await axios.delete(`/recipes/ownRecipes/${id}`);
  return response;
}

export async function getFavoriteRecipes() {
  const response = await axios.get("/recipes/favorite");
  return response;
}
