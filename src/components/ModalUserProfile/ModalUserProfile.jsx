import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userUpdateData } from "../../redux/auth/authOperations";

import Icon from "../../components/Icon/Icon";
import userIcon from "../../assets/icons/name.svg";

const ModalUserProfile = ({ name, avatar, onCloseEditModalHandler }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formatError, setFormatError] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    dispatch(
      userUpdateData({
        ...data,
        ...(selectedImage ? { avatar: selectedImage } : {}),
      })
    );
    onCloseEditModalHandler();
  };

  const onHandleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/svg+xml"
    ) {
      setFormatError(true);
      return;
    }
    setFormatError(false);

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-[480px] pt-6 pb-12 px-3 bg-white dark:bg-bgGray rounded-3xl">
      <Icon
        name="close"
        fill="none"
        color="black"
        hoverColor="green"
        stroke="currentColor"
        size="6"
        strokeWidth="2"
        additionalStyles="absolute right-6 mb-1 rounded-lg"
        onClickModal={onCloseEditModalHandler}
      />

      <div className="flex flex-col items-center mt-6">
        <div className="relative mb-8 flex items-center justify-center w-28 h-28 bg-lightGray rounded-full">
          <img
            className={`${avatar ? "w-28 h-28 rounded-full" : "w-7 h-7"}`}
            src={selectedImage || avatar || userIcon}
            alt="User's image"
          />
          <label>
            <input
              className="hidden"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onHandleFileChange}
            />

            <Icon
              name="plus"
              fill="none"
              color="white"
              stroke="currentColor"
              size="6"
              strokeWidth="2"
              additionalStyles="absolute bottom-0 right-3 bg-green rounded-full"
            />
          </label>
        </div>

        {formatError && (
          <p className="text-center mb-6 font-bold text-error ">
            Image extension is invalid !
          </p>
        )}

        <form id="formBtn" onSubmit={handleSubmit(onSubmitHandler)}>
          <label
            className={`${
              errors.name ? "border-error" : "border-green "
            } flex gap-2 mb-8 w-full py-4 px-3 border rounded`}
          >
            <Icon
              name="userIcon"
              fill="none"
              color={`${errors.name ? "error" : "green"}`}
              stroke="currentColor"
              size="6"
              strokeWidth="2"
            />

            <input
              className={`${
                errors.name
                  ? "placeholder:text-error font-medium animate-pulse"
                  : "placeholder:text-black"
              } bg-transparent outline-none w-80`}
              type="text"
              defaultValue={name}
              placeholder={
                errors.name ? errors.name.message : "Enter your first name"
              }
              {...register("name", {
                required: "This field is required",
                minLength: 2,
              })}
            />

            <Icon
              name="editPencil"
              fill="none"
              color={`${errors.name ? "error" : "green"}`}
              stroke="currentColor"
              size="6"
              strokeWidth="2"
            />
          </label>
          <button
            className="w-full py-4 bg-green hover:bg-black transition ease-in-out delay-75 text-white rounded-md cursor-pointer"
            form="formBtn"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

ModalUserProfile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.any,
  onCloseEditModalHandler: PropTypes.func,
};

export default ModalUserProfile;
