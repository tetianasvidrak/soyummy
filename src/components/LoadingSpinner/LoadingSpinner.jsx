import PropTypes from "prop-types";

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <p className="font-medium text-2xl">{loadingMessage}</p>
      <div className="w-14 h-14 border-4 border-green border-t-gray-500 rounded-full animate-spin"></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};

export default LoadingSpinner;
