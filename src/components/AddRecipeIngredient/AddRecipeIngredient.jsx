import PropTypes from "prop-types";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";

import Icon from "../Icon";

const AddRecipeIngredient = ({
  index,
  fields,
  ingredient,
  ingredientsOptions,
  onDelete,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex gap-[32px] mb-[24px]">
      <label className="flex items-start gap-4 w-[398px]">
        <Controller
          control={control}
          name={`ingredient[${index}]`}
          rules={{ required: "Please select ingredient" }}
          render={({ field, fieldState }) => (
            <div className="relative">
              <Select id="ingredient" {...field} options={ingredientsOptions} />
              {errors.ingredient?.[index] && (
                <p
                  className={`absolute left-0 bottom-[-20px] text-xs text-error`}
                >
                  {errors.ingredient[index].message}
                </p>
              )}
            </div>
          )}
        ></Controller>
        <div className="relative">
          <input
            className={`w-24 rounded border bg-[#F5F5F5] p-1 px-2 text-lg outline-none dark:text-white dark:bg-darkMode ${
              errors.measure ? "border-error" : "border"
            }`}
            type="text"
            {...register(`measure[${index}]`, {
              required: "This field is required",
              minLength: 2,
            })}
          />
          {errors.measure?.[index] && (
            <p
              className={`absolute left-0 bottom-[-25px] text-xs text-error whitespace-nowrap`}
            >
              {errors.measure?.[index].message}
            </p>
          )}
        </div>
        {fields > 1 ? (
          <button type="button" onClick={() => onDelete(ingredient._id)}>
            <Icon
              name="close"
              fill="none"
              stroke="currentColor"
              size="6"
              strokeWidth="2"
            />
          </button>
        ) : undefined}
      </label>
    </div>
  );
};

AddRecipeIngredient.propTypes = {
  index: PropTypes.number,
  fields: PropTypes.number,
  ingredient: PropTypes.object,
  ingredientsOptions: PropTypes.array,
  onDelete: PropTypes.func,
};

export default AddRecipeIngredient;
