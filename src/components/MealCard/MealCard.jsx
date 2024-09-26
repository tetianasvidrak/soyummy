import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MealCard = ({ _id, title, thumb }) => {
  const navigate = useNavigate();
  const onClickRecipeHandler = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div
      className="relative w-[300px] h-[323px] rounded-lg cursor-pointer transition ease-in-out delay-150 duration-700 hover:scale-105 shadow hover:shadow-md hover:shadow-black"
      onClick={() => onClickRecipeHandler(_id)}
    >
      <img className="h-full rounded-lg object-cover" src={thumb} />
      <div className="absolute bottom-4 left-4 text-left bg-white dark:bg-bgGray p-4 w-[268px] truncate rounded-lg">
        <h3 className="font-medium text-darkGrey dark:text-white">{title}</h3>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
};

export default MealCard;
