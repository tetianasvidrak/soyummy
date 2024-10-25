import axios from "../../axios/axios";

export async function fetchOwnRecipe(data) {
  const response = await axios.post("/recipes/ownRecipes", data);
  return response;
}

export async function getFavoriteRecipes() {
  const response = await axios.get("/recipes/favorite");
  return response;
}
