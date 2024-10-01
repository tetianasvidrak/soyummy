import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="flex mb-[100px] mt-[52px]">
      <h1 className="mt-[30px] text-categTitle dark:text-white font-semibold text-[44px]">
        {title}
      </h1>
      <div className="relative">
        <div className="absolute left-[-15px] w-[14px] h-[14px] rotate-45 bg-green rounded"></div>
        <div className="absolute left-[350px] top-20 w-[14px] h-[14px] rotate-45 bg-black dark:bg-white rounded"></div>
        <div className="absolute right-[-850px] w-[14px] h-[14px] rotate-45 bg-green rounded"></div>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
