import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ownRecipe } from "../../redux/recipes/recipesOperations";

import Title from "../../components/Title";
import AddRecipeDescription from "../../components/AddRecipeDescription/AddRecipeDescription";
import AddRecipeIngredients from "../../components/AddRecipeIngredients/AddRecipeIngredients";
import AddRecipePreparation from "../../components/AddRecipePreparation/AddRecipePreparation";
import FollowUs from "../../components/FollowUs/FollowUs";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";

const AddRecipe = () => {
  const methods = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitRecipeHandler = (data, e) => {
    e.preventDefault();
    const id = nanoid(12);
    const { ingredient, measure, instructions, image, ...rest } = data;

    const ingredients = ingredient.reduce((acc, curr, index) => {
      return [...acc, { id: curr.value, measure: measure[index] }];
    }, []);

    let readyImage;

    const reader = new FileReader();
    reader.onload = () => {
      readyImage = reader.result;
      const readyRecipe = {
        ...rest,
        recipeImg: readyImage,
        category: data.category.value,
        instructions: instructions.split("\n"),
        ingredients,
      };

      dispatch(ownRecipe({ data: { ...readyRecipe, _id: id } })).then(
        ({ payload }) => {
          navigate(`/recipe/${payload.data.recipe._id}`);
        }
      );
    };
    reader.readAsDataURL(image[0]);
  };
  return (
    <div className="max-w-[1270px] m-auto px-[15px] mb-[200px]">
      <Title title={"Add recipe"} />
      <div className="flex justify-between gap-20">
        <FormProvider {...methods}>
          <form
            id="own-recipe-form"
            className="w-full"
            onSubmit={methods.handleSubmit(onSubmitRecipeHandler)}
          >
            <AddRecipeDescription />
            <AddRecipeIngredients />
            <AddRecipePreparation />
            <button
              form="own-recipe-form"
              type="submit"
              className="w-[161px] px-[64px] py-[14px] mt-4 text-white font-normal border border-transparent dark:hover:border-white bg-black hover:bg-green transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl cursor-pointer"
            >
              Add
            </button>
          </form>
        </FormProvider>
        <aside>
          <FollowUs />
          <PopularRecipes />
        </aside>
      </div>
    </div>
  );
};

export default AddRecipe;
