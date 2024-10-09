import PropTypes from "prop-types";

const RecipePreparation = ({ instructions, image }) => {
  const removeNumbers = (item) => {
    const replaced = item.replace(/[0-9]\./, "");
    return replaced;
  };

  return (
    <div className="max-w-[1270px] m-auto px-[15px]">
      <div className="flex justify-between mt-[100px]">
        <div className="flex flex-col gap-[32px] text-black dark:text-white">
          <h3 className="font-semibold text-2xl">Recipe Preparation</h3>
          <ul className="flex flex-col gap-[18px] max-w-[722px] text-sm">
            {instructions?.map(
              (item, index) =>
                !!item && (
                  <li key={index} className="flex gap-2">
                    <span className="flex justify-center items-center flex-shrink-0 text-white font-semibold bg-green w-[21px] h-[21px] rounded-full">
                      <span>{index + 1}</span>
                    </span>
                    {removeNumbers(item)}
                  </li>
                )
            )}
          </ul>
        </div>
        <img className="w-[433px] h-[332px] rounded object-cover" src={image} />
      </div>
    </div>
  );
};

RecipePreparation.propTypes = {
  instructions: PropTypes.array,
  image: PropTypes.any,
};

export default RecipePreparation;
