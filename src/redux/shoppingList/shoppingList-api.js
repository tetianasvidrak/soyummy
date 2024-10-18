import axios from "../../axios/axios";

export const getShoppingList = async () => {
  const res = await axios.get("/ingredients/shopping-list");
  return res;
};

export const addToShoppingList = async (data) => {
  const res = await axios.post(
    "/ingredients/shopping-list/add-ingredient",
    data
  );
  return res;
};

export const removeFromShoppingList = async (data) => {
  const res = await axios.post(
    "/ingredients/shopping-list/remove-ingredient",
    data
  );
  return res;
};
