import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import MealCard from "../MealCard/MealCard";

const RecommendedMeals = ({ category, recipes }) => {
  return (
    <div>
      <h2 className="mb-12 text-categTitle dark:text-white text-left font-semibold text-5xl">
        {category}
      </h2>
      <div className="flex justify-between mb-12">
        {recipes.map((recipe, index) => (
          <MealCard key={index} {...recipe} />
        ))}
      </div>
      <div className="flex justify-end">
        <NavLink
          className="text-white bg-green p-2.5 px-6 rounded-md shadow hover:shadow-black transition ease-in-out delay-75 cursor-pointer"
          to={`/categories?sort=${category}`}
        >
          See all
        </NavLink>
      </div>
    </div>
  );
};

RecommendedMeals.propTypes = {
  category: PropTypes.string,
  recipes: PropTypes.array,
};

export default RecommendedMeals;
