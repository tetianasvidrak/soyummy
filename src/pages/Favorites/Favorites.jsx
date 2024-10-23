import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { favoriteRecipes } from "../../redux/recipes/recipesOperations";
import { deleteFromFavorites } from "../../redux/auth/authOperations";

import ErrorInformation from "../../components/ErrorInformation/ErrorInformation";
import MealCardRecipe from "../../components/MealCardRecipe/MealCardRecipe";
import Title from "../../components/Title";
import Container from "../../components/Container/Container";

const Favorites = () => {
  const { recipes } = useSelector((state) => state.recipes);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoriteRecipes());
  }, [dispatch]);

  const onDeleteRecipeHandler = (id) => {
    dispatch(deleteFromFavorites(id)).then(() => {
      dispatch(favoriteRecipes());
    });
  };

  return (
    <Container>
      <Title title={"Favorites"} />
      {recipes && recipes.length < 1 ? (
        <div className="flex flex-col items-center justify-between gap-14 mt-[50%] translate-y-[-100%] h-full">
          <ErrorInformation errorMessage="There are no favorite recipes yet" />
          <button
            className="btn-black px-[38px] py-[12px] "
            onClick={() => navigate("/categories")}
          >
            See recipes
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-[50px] mb-[200px]">
          {recipes?.map((recipe) => (
            <MealCardRecipe
              key={recipe._id}
              {...recipe}
              trashBgColor="bgLogoFooter"
              onDelete={() => onDeleteRecipeHandler(recipe._id)}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Favorites;
