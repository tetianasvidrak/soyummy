import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { normilizeTimeOfCooking } from "../../utils/normalizeTimeOfCooking";

import {
  addToFavorites,
  deleteFromFavorites,
} from "../../redux/auth/authOperations";
import {
  addIngredientToShoppingList,
  deleteFromShoppingList,
} from "../../redux/shoppingList/shoppingListOperations";
import { getRecipe } from "../../redux/recipe/recipeOperations";

import IngredientsBar from "../../components/IngredientsBar/IngredientsBar";
import Ingredient from "../../components/Ingredient/Ingredient";
import Modal from "../../components/Modal/Modal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import RecipePreparation from "../../components/RecipePreparation/RecipePrepation";
import Icon from "../../components/Icon";

import bgRecipe from "../../assets/bgRecipe.png";

const Recipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { favorites } = useSelector((state) => state.auth.user);
  const { recipe, loading } = useSelector((state) => state.recipe);
  const { shoppingList } = useSelector((state) => state.shoppingList);

  const onCheckIngredientHandler = (_id, e, measure) => {
    dispatch(
      e.target.checked
        ? addIngredientToShoppingList({
            ingredientId: _id,
            recipeId: id,
            measure: [measure],
          })
        : deleteFromShoppingList({
            ingredientId: _id,
            recipeId: id,
            measure: [measure],
          })
    );
  };

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  return (
    <>
      {loading === "pending" || loading === "idle" ? (
        <Modal>
          <LoadingSpinner />
        </Modal>
      ) : (
        <div className="mt-[-62px]">
          <div
            className="pt-[62px] h-full bg-no-repeat bg-cover bg-bottom"
            style={{ backgroundImage: `url(${bgRecipe})` }}
          >
            <div className="flex flex-col justify-center items-center mt-[164px]">
              <h1 className="text-green mb-[24px] font-semibold text-[44px]">
                {recipe?.title}
              </h1>
              <p className=" text-black text-center mb-[30px] w-[656px]">
                {recipe?.description}
              </p>
              <button
                className="px-[44px] py-[18px] mb-[48px] border border-green hover:bg-green hover:text-white transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl cursor-pointer"
                onClick={() => {
                  favorites?.includes(id)
                    ? dispatch(deleteFromFavorites(id))
                    : dispatch(addToFavorites(id));
                }}
              >
                {favorites?.includes(id)
                  ? "Remove from favorites"
                  : "Add to favorite recipes"}
              </button>
              <div className="flex items-center gap-[8px] mb-[32px]">
                <Icon
                  name="clock"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  size="6"
                />
                <span>{normilizeTimeOfCooking(recipe.time)}</span>
              </div>
            </div>
          </div>
          <div className="mt-[50px] mb-[200px]">
            <IngredientsBar text={"Add to list"} />
            {recipe.ingredients?.map((ingredient) => (
              <Ingredient
                key={nanoid()}
                recipe={id}
                {...ingredient}
                checked={shoppingList.some(
                  (item) => item.recipeId === id && item._id === ingredient._id
                )}
                onCheckIngredient={onCheckIngredientHandler}
              />
            ))}

            <RecipePreparation
              instructions={
                recipe?.instructions?.length > 1
                  ? recipe.instructions
                  : recipe?.instructions?.[0].split("\n\r")
              }
              image={recipe?.thumb}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
