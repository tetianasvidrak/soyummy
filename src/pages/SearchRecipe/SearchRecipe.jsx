import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getRecipesByQuery } from "../../api/get-recipe-search";

import Container from "../../components/Container/Container";
import Title from "../../components/Title";
import MealCard from "../../components/MealCard/MealCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import ErrorInformation from "../../components/ErrorInformation/ErrorInformation";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const SearchRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useSearchParams();
  const isQuery = queryParams.get("q");

  useEffect(() => {
    setLoading(true);

    const query = queryParams.get("q");

    getRecipesByQuery(query)
      .then((res) => setRecipes(res.data.data.recipe))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [queryParams]);

  const onSubmitHandler = (recipe) => {
    setQueryParams({ q: recipe });
  };

  return (
    <Container>
      <Title title={"Search"} />
      <div className="flex flex-col items-center mb-[200px]">
        <SearchForm onSubmit={onSubmitHandler} styles="w-[510px] mb-10" />

        {loading ? (
          <LoadingSpinner />
        ) : !isQuery ? (
          <ErrorInformation errorMessage="Enter a name or an ingredient to find a recipe..." />
        ) : error ? (
          <ErrorInformation errorMessage={error} />
        ) : !recipes.length ? (
          <ErrorInformation
            errorMessage={`There are no recipes with ${queryParams.get(
              "q"
            )} name`}
          />
        ) : (
          <div className="grid grid-cols-4 gap-y-[100px] gap-x-[14px]">
            {recipes?.map((recipe, index) => (
              <MealCard key={index} {...recipe} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchRecipe;
