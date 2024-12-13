import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";

import Icon from "../Icon";

const ModalLogOut = ({ onCloseLogOutModalHandler }) => {
  const dispatch = useDispatch();

  const onLogOutButtonHandler = () => {
    dispatch(logOut());
  };

  return (
    <div className="relative w-[500px] pt-6 pb-12 px-12 bg-white rounded-3xl dark:bg-darkMode">
      <Icon
        name="close"
        fill="none"
        color="black"
        hoverColor="green"
        size="6"
        strokeWidth="2"
        additionalStyles="absolute right-6 mb-1 rounded-lg"
        onClickModal={onCloseLogOutModalHandler}
      />
      <div className="flex flex-col items-center gap-8 mt-6">
        <span className="text-lg font-normal">
          Are you sure you want to log out?
        </span>
        <div className="flex gap-4">
          <button
            className="py-4 px-14 bg-green hover:bg-black transition ease-in-out delay-75 text-white rounded-md cursor-pointer"
            onClick={onLogOutButtonHandler}
          >
            Log out
          </button>
          <button
            className="py-4 px-14 bg-lightGray hover:ring-1 hover:ring-black hover:ring-inset hover:bg-transparent transition ease-in-out delay-75 rounded-md cursor-pointer"
            onClick={onCloseLogOutModalHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ModalLogOut.propTypes = {
  onCloseLogOutModalHandler: PropTypes.func,
};

export default ModalLogOut;
