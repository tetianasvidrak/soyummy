import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import ingredientPlaceholder from "../../assets/ingredient-placeholder.png";
import Icon from "../Icon";

const Ingredient = ({
  _id,
  img,
  name,
  measure,
  checked = false,
  recipeId,
  onCheckIngredient,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="max-w-[1270px] m-auto px-[15px] mb-[24px]">
        <div className="flex justify-between px-12 bg-bgLogoFooter dark:bg-bgGray rounded-lg">
          <div className="flex items-center gap-[66px] w-[150px] h-[150px]">
            <img
              src={img || ingredientPlaceholder}
              className="object-cover h-full"
            />

            <span className="text-black dark:text-white text-2xl font-medium">
              {name}
            </span>
          </div>
          <div className="flex items-center gap-40">
            <span className="bg-green text-white py-1 px-2 rounded">
              {measure}
            </span>
            <div className="relative w-9 h-9">
              <input
                type="checkbox"
                className={`z-10 w-9 h-9 absolute peer appearance-none outline-none rounded bg-transparent cursor-pointer ${
                  pathname !== "/shoppinglist" &&
                  "inset-0 peer border-2 border-[#B4BBA9] cursor-pointer"
                }`}
                onChange={(e) => onCheckIngredient(_id, e, measure, recipeId)}
                checked={checked}
              />
              {pathname === "/shoppinglist" ? (
                <Icon
                  name="closeXMark"
                  size="6"
                  strokeWidth="1.5"
                  stroke="black"
                  fill="none"
                  additionalStyles="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-6 h-6 dark:stroke-white hover:stroke-green"
                />
              ) : (
                checked && (
                  <Icon
                    name="check"
                    size="6"
                    strokeWidth="2.5"
                    fill="none"
                    additionalStyles="absolute hidden left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-6 h-6 stroke-green peer-checked:block"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Ingredient.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.any,
  name: PropTypes.string,
  measure: PropTypes.string,
  checked: PropTypes.bool,
  recipeId: PropTypes.string,
  onCheckIngredient: PropTypes.func,
};

export default Ingredient;
