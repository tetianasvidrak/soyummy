import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PopularRecipe = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const onClickRecipeNavigation = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="flex flex-col mb-[20px]">
      <div
        className="flex gap-[11px] w-[319px] pb-[13px] border-b border-lightGray dark:border-[#2C2D34] cursor-pointer"
        onClick={() => onClickRecipeNavigation(id)}
      >
        <img src={image} className="shrink-0 w-[97px] h-[85px]" />
        <div>
          <h5 className="font-medium text-base text-black dark:text-white">
            {title}
          </h5>
          <p className="text-popularText dark:lightGrayDarkMode text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

PopularRecipe.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default PopularRecipe;
