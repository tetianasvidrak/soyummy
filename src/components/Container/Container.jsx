import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1270px] m-auto px-[15px] h-full">{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
