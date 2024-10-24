import axios from "../../axios/axios";

export async function getFavoriteRecipes() {
  const response = await axios.get("/recipes/favorite");
  return response;
}
