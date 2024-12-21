import { useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { getMainRecipes } from "../../api/get-main-recipes";

import Container from "../../components/Container/Container";
import SearchForm from "../../components/SearchForm/SearchForm";
import RecommendedMeals from "../../components/RecommendedMeals/RecommendedMeals";
import ErrorInformation from "../../components/ErrorInformation/ErrorInformation";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Icon from "../../components/Icon/Icon";

import bgDish from "../../assets/bgHomePlate.png";
import bgLeft from "../../assets/bgHomeLeavesLeft.png";
import bgRight from "../../assets/bgHomeLeavesRight.png";
import bgArrowPlate from "../../assets/bgArrowPlate.svg";

const Home = () => {
  const [recipes, setRecipes] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isTryAgainClicked, setIsTryAgainClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    setIsTryAgainClicked(false);

    getMainRecipes()
      .then((res) => setRecipes(res.data.data.recipe))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [isTryAgainClicked]);

  const onChangeSearchRecipeHandler = (recipe) => {
    navigate(`/searchrecipe?q=${recipe}`);
  };

  return (
    <>
      <div
        className="absolute -mt-16 w-full h-screen overflow-hidden bg-no-repeat bg-auto bg-[position:left_top,_right_bottom]"
        style={{ backgroundImage: `url(${bgLeft}), url(${bgRight})` }}
      ></div>
      <Container>
        <div className="mt-[-62px] flex items-center justify-between h-screen">
          <div className="flex flex-col gap-12 w-[510px]">
            <div className="text-left">
              <h1 className="text-8xl mb-3.5 dark:text-white transition ease-in-out delay-75">
                <span className="text-green">So</span>Yummy
              </h1>
              <p className="text-lg dark:text-white transition ease-in-out delay-75">
                &ldquo;What to cook?&rdquo; is not only a recipe app, it is, in
                fact, your cookbook. You can add your own recipes to save them
                for the future.
              </p>
            </div>
            <SearchForm
              onSubmit={onChangeSearchRecipeHandler}
              styles="w-full"
            />
          </div>
          <div className="relative ">
            <img
              className="max-w-full object-cover h-auto"
              src={bgDish}
              alt="Dish"
            />
            <div className="absolute w-72 p-4 bottom-12 -right-16  dark:text-white bg-white dark:bg-darkMode transition ease-in-out delay-75 rounded-md z-10">
              <p className="text-sm  font-medium text-left mb-2">
                <span className="text-green mr-1">Coloured text</span>
                Heloo salad healnafnnfeifnvcivndsy
              </p>
              <NavLink
                className="flex items-center justify-end gap-1 text-sm hover:text-green cursor-pointer"
                to="/myrecipes"
              >
                See recipe
                <Icon
                  name="arrowRight"
                  color="black"
                  stroke="currentColor"
                  strokeWidth="2"
                  hoverColor="green"
                  size="6"
                />
              </NavLink>
            </div>
            <span
              className="absolute -bottom-40 right-0 bg-right-top bg-no-repeat bg-auto h-64 w-64"
              style={{ backgroundImage: `url(${bgArrowPlate})` }}
            ></span>
          </div>
        </div>

        {loading && <LoadingSpinner loadingMessage="Loading recipes..." />}

        {error && <ErrorInformation errorMessage={error} />}

        {recipes?.map((recipe, index) => (
          <RecommendedMeals
            key={index}
            category={recipe.category}
            recipes={recipe.recipes}
          />
        ))}

        {error ? (
          <button
            className="btn-greenBorder w-64 mb-24"
            type="button"
            onClick={() => setIsTryAgainClicked(true)}
          >
            Try again
          </button>
        ) : (
          <NavLink className="btn-greenBorder w-64 mb-24" to="/categories">
            Other categories
          </NavLink>
        )}
      </Container>
    </>
  );
};

export default Home;
