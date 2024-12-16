import { useState } from "react";

import PropTypes from "prop-types";

import HeaderUserSettings from "../HeaderUserSettings";
import Modal from "../Modal/Modal";
import ModalUserProfile from "../ModalUserProfile";
import ModalLogOut from "../ModalLogOut";

const HeaderUser = ({ name, avatar }) => {
  const [toggle, setToggle] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isLogOutModalVisible, setIsLogOutModalVisible] = useState(false);

  const onShowEditModalHandler = () => {
    setIsEditModalVisible(true);
    setToggle(false);
  };

  const onCloseEditModalHandler = () => {
    setIsEditModalVisible(false);
  };

  const onShowLogOutModalHandler = () => {
    setIsLogOutModalVisible(true);
    setToggle(false);
  };

  const onCloseLogOutModalHandler = () => {
    setIsLogOutModalVisible(false);
  };

  return (
    <>
      {isEditModalVisible ? (
        <Modal onClose={onCloseEditModalHandler}>
          <ModalUserProfile
            name={name}
            avatar={avatar}
            onCloseEditModalHandler={onCloseEditModalHandler}
          />
        </Modal>
      ) : isLogOutModalVisible ? (
        <Modal onClose={onCloseLogOutModalHandler}>
          <ModalLogOut onCloseLogOutModalHandler={onCloseLogOutModalHandler} />
        </Modal>
      ) : (
        ""
      )}
      <div className="relative flex items-center gap-2.5">
        <div className="flex items-center justify-center w-11 h-11 bg-lightGray rounded-full">
          <img
            className="rounded-full w-full h-full object-cover"
            src={avatar}
          />
        </div>
        <span
          className="text-black text-sm font-bold cursor-pointer dark:text-white"
          onClick={() => setToggle(!toggle)}
        >
          {name}
        </span>
        {toggle && (
          <div className="absolute top-12">
            <HeaderUserSettings
              onShowEditModalHandler={onShowEditModalHandler}
              onShowLogOutModalHandler={onShowLogOutModalHandler}
            />
          </div>
        )}
      </div>
    </>
  );
};

HeaderUser.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.any,
};

export default HeaderUser;
