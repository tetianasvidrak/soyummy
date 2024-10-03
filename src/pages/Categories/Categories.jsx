import { useState, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getCategoryList } from "../../api/get-category-list";
import { getCategoryRecipes } from "../../api/get-category-recipes";

import Title from "../../components/Title";
import MealCard from "../../components/MealCard/MealCard";

const Categories = () => {
  const ref = useRef(true);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("sort");

  const [categoryList, setCategoryList] = useState([]);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getCategoryList()
        .then((res) => {
          setCategoryList(res.data.data.recipe);
          setSelectedCategory(sortValue ?? res.data.data.recipe[0].name);
          return getCategoryRecipes(sortValue ?? res.data.data.recipe[0].name);
        })
        .then((res) => setCategoryRecipes(res.data.data.recipes));
    } else {
      getCategoryRecipes(selectedCategory).then((res) =>
        setCategoryRecipes(res.data.data.recipes)
      );
    }
  }, [selectedCategory, location.pathname]);

  const onCategoryClickHandler = (category) => {
    setSelectedCategory(category);
    setSearchParams(new URLSearchParams({ ...searchParams, sort: category }));
  };

  return (
    <div className="max-w-[1270px] m-auto px-[15px] mb-[200px]">
      <Title title={"Categories"} />
      <div className="flex">
        <ul className="flex gap-12 mb-12 overflow-x-scroll no-scrollbar text-lightGray dark:text-lightGrayDarkMode text-lg border-b border-[#E0E0E0] dark:border-[#4A4B52]">
          {categoryList?.map((category, index) => (
            <li
              key={index}
              className={`px-2.5 border-b-2 ${
                category.name === selectedCategory
                  ? "border-green text-green"
                  : "border-transparent text-lightGray"
              }   hover:text-green hover:border-green pb-7 translate-y-px transition ease-in-out delay-75 cursor-pointer`}
              onClick={() => onCategoryClickHandler(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-x-3.5 gap-y-24">
        {categoryRecipes?.map((categoryRecipe) => (
          <div key={categoryRecipe._id}>
            <MealCard {...categoryRecipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
