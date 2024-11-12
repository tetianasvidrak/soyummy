import { useFormContext } from "react-hook-form";

const AddRecipePreparation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[32px] ">
      <h3 className="font-semibold text-2xl text-darkGrey dark:text-white">
        Recipe Preparation
      </h3>
      <div>
        <textarea
          name="instructions"
          className={`w-[505px] h-[224px] py-[16px] px-[22px] bg-addRecipeBg rounded resize-none placeholder:text-lg  caret-green outline-none focus:border focus:border-green dark:bg-darkMode dark:border dark:text-white ${
            errors.instructions &&
            "border-error dark:border-error placeholder:text-error dark:placeholder:text-error"
          }`}
          placeholder={
            errors.instructions ? errors.instructions.message : "Enter recipe"
          }
          {...register("instructions", {
            required: "This field must not be empty",
            minLength: 10,
          })}
        ></textarea>
      </div>
    </div>
  );
};

export default AddRecipePreparation;
