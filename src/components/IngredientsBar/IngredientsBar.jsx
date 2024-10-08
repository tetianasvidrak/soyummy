import PropTypes from "prop-types";

const IngredientsBar = ({ text }) => {
  return (
    <>
      <div className="max-w-[1270px] m-auto px-[15px] mb-[50px]">
        <div className="flex justify-between px-10 py-[20px] bg-green text-white font-semibold text-lg rounded-lg">
          <span>Ingredients</span>
          <div className="flex gap-24">
            <span>Number</span>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </>
  );
};

IngredientsBar.propTypes = {
  text: PropTypes.string,
};

export default IngredientsBar;
