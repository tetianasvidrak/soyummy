import { useState, useEffect, useMemo } from "react";

import { getPopularRecipe } from "../../api/get-popular-recipes";
import { shuffle } from "../../utils/shuffle";

import PopularRecipe from "../PopularRecipe/PopularRecipe";

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipe().then((res) => setPopularRecipes(res.data.data.recipe));
  }, []);

  const shuffleRecipes = useMemo(
    () => shuffle(popularRecipes, 4),
    [popularRecipes]
  );

  return (
    <div className="flex flex-col">
      <h3 className="mb-10 font-semibold text-2xl text-darkGrey dark:text-white">
        Popular recipes
      </h3>
      {shuffleRecipes?.map(({ _id, title, description, thumb }, index) => (
        <PopularRecipe
          key={index}
          id={_id}
          title={title}
          description={description}
          image={thumb}
        />
      ))}
    </div>
  );
};

export default PopularRecipes;
