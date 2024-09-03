import PropTypes from "prop-types";

import imgSearchRecipe from "../../assets/searchRecipe.png";

const ErrorInformation = ({ errorMessage }) => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center">
      <span className="font-medium color-recipeDesc text-[24px] dark:text-white">
        {errorMessage}
      </span>
      <img className="w-[350px] h-[225px]" src={imgSearchRecipe} />
    </div>
  );
};

ErrorInformation.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorInformation;
