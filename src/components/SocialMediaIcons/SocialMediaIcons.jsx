import PropTypes from "prop-types";
import Icon from "../Icon";

const SocialMediaIcons = ({ styles, fill }) => {
  return (
    <div className={styles}>
      <Icon
        name="twitter"
        size="6"
        strokeWidth="2"
        fill={fill}
        additionalStyles="align-middle"
      />

      <Icon
        name="youtube"
        size="6"
        strokeWidth="2"
        fill={fill}
        additionalStyles="align-middle"
      />

      <Icon
        name="facebook"
        size="6"
        strokeWidth="2"
        fill={fill}
        additionalStyles="align-middle"
      />

      <Icon
        name="instagram"
        size="6"
        strokeWidth="2"
        fill={fill}
        additionalStyles="align-middle"
      />
    </div>
  );
};

SocialMediaIcons.propTypes = {
  styles: PropTypes.string,
  fill: PropTypes.string,
};

export default SocialMediaIcons;
