import PropTypes from "prop-types";
import { useState } from "react";

const SearchForm = ({ onSubmit, styles }) => {
  const [searchRecipe, setSearchRecipe] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(searchRecipe);
  };

  return (
    <form onSubmit={onSubmitHandler} className="z-10">
      <label
        className={`flex justify-between ${styles} ring-1 ring-lightGray ring-inset shadow-md shadow-transparent hover:shadow-green focus-within:shadow-green transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl`}
      >
        <input
          className="px-6 bg-transparent outline-none text-black dark:text-white w-full"
          type="text"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
        <button
          className={`btn-black px-[44px] py-[22px] ${
            searchRecipe.trim() ? "" : "cursor-not-allowed"
          } `}
          disabled={searchRecipe.trim() ? false : true}
        >
          Search
        </button>
      </label>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  styles: PropTypes.string,
};

export default SearchForm;
