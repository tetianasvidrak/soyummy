import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { getIngredientsList } from "../../api/get-ingredients-list";

import AddRecipeIngredient from "../AddRecipeIngredient/AddRecipeIngredient";
import Icon from "../Icon";

const AddRecipeIngredients = () => {
  const [ingredientsList, setIngredientsList] = useState();
  const [addIngredients, setAddIngredients] = useState([{ _id: nanoid() }]);

  const ingredientsOptions = ingredientsList?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  useEffect(() => {
    getIngredientsList().then((res) =>
      setIngredientsList(res.data.data.ingredients)
    );
  }, []);

  const onPlusClickHandler = () => {
    setAddIngredients((prevState) => [...prevState, { _id: nanoid() }]);
  };

  const onDeleteIngredientHandler = (id) => {
    if (id && addIngredients.length > 1) {
      setAddIngredients((prevState) =>
        prevState.filter((item) => item._id !== id)
      );
    } else if (addIngredients.length > 1) {
      setAddIngredients((prevState) => prevState.slice(0, -1));
    }
    return;
  };

  return (
    <div className="mb-[100px]">
      <div className="flex gap-[362px] mb-[36px]">
        <h3 className="font-semibold text-2xl text-darkGrey dark:text-white">
          Ingredients
        </h3>
        <div className="flex justify-around items-center border border-lightGray w-[110px] h-[32px] rounded-[18px]">
          <button
            className="text-lightGray"
            type="button"
            onClick={() => onDeleteIngredientHandler()}
          >
            <Icon
              name="minus"
              fill="none"
              stroke="currentColor"
              size="6"
              strokeWidth="2"
            />
          </button>
          <span className="text-black dark:text-white">
            {addIngredients.length}
          </span>

          <button
            className="text-lightGray"
            type="button"
            onClick={onPlusClickHandler}
          >
            <Icon
              name="plus"
              fill="none"
              stroke="currentColor"
              size="6"
              strokeWidth="2"
            />
          </button>
        </div>
      </div>
      {addIngredients.map((ingredient, index) => (
        <AddRecipeIngredient
          key={ingredient._id}
          index={index}
          fields={addIngredients.length}
          ingredient={ingredient}
          ingredientsOptions={ingredientsOptions}
          onDelete={() => onDeleteIngredientHandler(ingredient._id)}
        />
      ))}
    </div>
  );
};

AddRecipeIngredients.propTypes = {
  watch: PropTypes.object,
};

export default AddRecipeIngredients;
