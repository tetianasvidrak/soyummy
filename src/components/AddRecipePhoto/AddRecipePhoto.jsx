import { useState } from "react";
import Icon from "../Icon";
import { useFormContext } from "react-hook-form";

const AddRecipePhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const onHandleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const urlImage = URL.createObjectURL(file);

      setSelectedImage(urlImage);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="group flex justify-center items-center bg-green rounded w-[357px] h-[344px] flex-shrink-0">
        <label className="w-[357px] h-[344px] flex items-center justify-center">
          {selectedImage ? (
            <img
              className={`${
                selectedImage
                  ? "w-full h-full object-fill rounded cursor-pointer"
                  : ""
              }`}
              src={selectedImage}
              alt="Recipe photo"
            />
          ) : (
            <Icon
              name="camera"
              fill="none"
              color="white"
              stroke="currentColor"
              size="7"
              strokeWidth="2"
            />
          )}
          <input
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
            {...register("image", {
              required: "Image is required",
              onChange: (e) => onHandleFileChange(e),
            })}
          />
        </label>
      </div>
      {errors.image && (
        <p className="text-error text-xs">{errors.image.message}</p>
      )}
    </div>
  );
};

export default AddRecipePhoto;
