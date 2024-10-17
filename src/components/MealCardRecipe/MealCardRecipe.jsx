import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Icon from "../Icon";

const MealCardRecipe = ({
  _id,
  title,
  description,
  time,
  thumb,
  trashBgColor,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10 p-10 bg-white dark:bg-bgGray rounded-lg shadow-md shadow-green">
      <img src={thumb} className="w-[318px] h-[327px] rounded object-cover  " />
      <div className="flex flex-col gap-[50px] w-full">
        <div className="flex justify-between">
          <h3 className="text-darkGrey dark:text-white font-medium text-2xl">
            {title}
          </h3>
          <div
            className={`flex justify-center items-center bg-${trashBgColor} dark:bg-green w-[44px] h-[44px] rounded cursor-pointer`}
            onClick={() => onDelete(_id)}
          >
            <Icon
              name="rubbish"
              fill="none"
              color="green"
              stroke="black"
              size="6"
              strokeWidth="1.5"
            />
          </div>
        </div>
        <p className="text-black dark:text-lightGray">{description}</p>
        <div className="flex justify-between">
          <span className="text-black dark:text-white">{time} min</span>
          <button
            className="btn-black px-[38px] py-[12px] "
            onClick={() => navigate(`/recipe/${_id}`)}
          >
            See recipe
          </button>
        </div>
      </div>
    </div>
  );
};

MealCardRecipe.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  thumb: PropTypes.any,
  trashBgColor: PropTypes.string,
  onDelete: PropTypes.func,
};

export default MealCardRecipe;
