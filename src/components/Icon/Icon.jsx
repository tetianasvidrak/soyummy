import PropTypes from "prop-types";
import sprite from "../../assets/icons/sprite.svg";

const Icon = ({
  name,
  fill = "none",
  color,
  stroke = "",
  size = "6",
  hoverColor,
  strokeWidth = "1.5",
  additionalStyles = "",
  onClickModal,
}) => {
  return (
    <svg
      className={`w-${size} h-${size} text-${color} hover:text-${hoverColor} hover:ease-out focus:text-${hoverColor} transition duration-100 cursor-pointer ${additionalStyles}`}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClickModal}
    >
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  stroke: PropTypes.string,
  hoverColor: PropTypes.string,
  strokeWidth: PropTypes.string,
  additionalStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClickModal: PropTypes.any,
};

export default Icon;
