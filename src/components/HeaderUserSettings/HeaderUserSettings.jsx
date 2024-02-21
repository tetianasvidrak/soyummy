import PropTypes from "prop-types";

import Icon from "../../components/Icon/Icon";

const HeaderUserSettings = ({
  onShowEditModalHandler,
  onShowLogOutModalHandler,
}) => {
  return (
    <>
      <div className="flex flex-col gap-8 p-4 w-[200px] h-[134px] text-sm text-black dark:text-white bg-white dark:bg-darkMode transition ease-in-out delay-75 rounded-lg shadow-md shadow-slate-400">
        <div className="flex justify-between items-center">
          <span className="font-medium">Edit profile</span>
          <Icon
            name="editPencil"
            fill="none"
            color="green"
            stroke="currentColor"
            size="6"
            strokeWidth="2"
            onClickModal={onShowEditModalHandler}
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 px-8 py-3 text-white font-normal border border-transparent dark:hover:border-white bg-green hover:bg-[#22252A] transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl cursor-pointer"
          onClick={onShowLogOutModalHandler}
        >
          <span>Log out</span>
          <Icon
            name="arrowRight"
            fill="none"
            color="white"
            stroke="currentColor"
            // size="4"
            strokeWidth="2"
          />
        </button>
      </div>
    </>
  );
};

HeaderUserSettings.propTypes = {
  onShowEditModalHandler: PropTypes.func,
  onShowLogOutModalHandler: PropTypes.func,
};

export default HeaderUserSettings;
