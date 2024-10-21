import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromShoppingList,
  receiveShoppingList,
} from "../../redux/shoppingList/shoppingListOperations";

import Title from "../../components/Title";
import IngredientsBar from "../../components/IngredientsBar/IngredientsBar";
import Ingredient from "../../components/Ingredient/Ingredient";
import ErrorInformation from "../../components/ErrorInformation/ErrorInformation";
import Container from "../../components/Container/Container";

const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onRemoveFromShopingList = (_id, e, measure, recipe) => {
    dispatch(
      deleteFromShoppingList({
        ingredientId: _id,
        recipeId: recipe,
        measure: measure,
      })
    );
  };

  useEffect(() => {
    dispatch(receiveShoppingList());
  }, [dispatch]);

  return (
    <Container>
      <Title title={"Shopping list"} />
      {shoppingList && shoppingList.length >= 1 ? (
        <div className="mb-[195px]">
          <IngredientsBar text={"Remove"} />
          {shoppingList?.map((ingredient) => (
            <Ingredient
              key={nanoid()}
              {...ingredient}
              checked={true}
              onCheckIngredient={onRemoveFromShopingList}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-14 mt-[50%] translate-y-[-100%] h-full">
          <ErrorInformation errorMessage="There are no food items in the list yet" />
          <button
            className="btn-black px-[38px] py-[12px] "
            onClick={() => navigate("/categories")}
          >
            See recipes
          </button>
        </div>
      )}
    </Container>
  );
};

export default ShoppingList;
