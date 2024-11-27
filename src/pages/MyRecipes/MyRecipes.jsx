import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteMyRecipe,
  getMyRecipes,
} from "../../redux/recipes/recipesOperations";

import TitlePage from "../../components/Title/Title";
import MealCardRecipe from "../../components/MealCardRecipe/MealCardRecipe";
import ErrorInformation from "../../components/ErrorInformation/ErrorInformation";

const MyRecipes = () => {
  const myRecipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes());
  }, []);

  const onDeleteRecipeHandler = (id) => {
    dispatch(deleteMyRecipe(id));
  };

  return (
    <div className="max-w-[1270px] m-auto px-[15px] mb-[50px]">
      <TitlePage title="My recipes" />
      {myRecipes && myRecipes.length < 1 ? (
        <ErrorInformation errorMessage="There are no recipes yet" />
      ) : (
        <div className="flex flex-col gap-[50px]">
          {myRecipes?.map((recipe, index) => (
            <MealCardRecipe
              key={index}
              {...recipe}
              trashBgColor="green"
              onDelete={onDeleteRecipeHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
