import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";

import { getCategoryList } from "../../api/get-category-list";

import AddRecipePhoto from "../AddRecipePhoto/AddRecipePhoto";

const AddRecipeDescription = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    getCategoryList().then((res) => setCategoryList(res.data.data.recipe));
  }, []);

  const options = categoryList?.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  return (
    <div className="flex items-center gap-14 mb-28">
      <AddRecipePhoto />
      <div className="flex flex-col gap-10 text-recipeDesc  flex-grow">
        <div className="relative">
          <input
            className={`outline-none bg-transparent w-full dark:text-white pb-5 border-b-2 dark:border-[#606167] placeholder:text-recipeDesc dark:placeholder:text-white ${
              errors.title
                ? "border-error dark:border-error"
                : "focus-within:border-green"
            }`}
            type="text"
            placeholder={"Enter title"}
            {...register("title", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Title must be at least 2 characters long",
              },
            })}
          />
          {errors.title && (
            <span
              className={`absolute left-0 bottom-[-20px] text-xs text-error`}
            >
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="relative">
          <input
            className={`outline-none bg-transparent w-full dark:text-white pb-5 border-b-2 dark:border-[#606167] placeholder:text-recipeDesc dark:placeholder:text-white ${
              errors.description
                ? "border-error dark:border-error"
                : "focus-within:border-green"
            } `}
            type="text"
            placeholder="Enter about recipe"
            {...register("description", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Title must be at least 2 characters long",
              },
            })}
          />
          {errors.description && (
            <span
              className={`absolute left-0 bottom-[-20px] text-xs text-error`}
            >
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            className={`flex justify-between items-center pb-5   text-recipeDesc dark:text-white border-b-2 dark:border-[#606167] ${
              errors.category
                ? "border-error dark:border-error"
                : "focus-within:border-green"
            }`}
          >
            Category
            <Controller
              control={control}
              name="category"
              rules={{ required: "Please select a category" }}
              render={({ field, fieldState }) => (
                <div>
                  <Select id="category" {...field} options={options} />
                </div>
              )}
            ></Controller>
          </label>
          {errors.category && (
            <span
              className={`absolute left-0 bottom-[-20px] text-xs text-error`}
            >
              {errors.category.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            className={`flex justify-between items-center pb-5 text-recipeDesc dark:text-white border-b-2 dark:border-[#606167] cursor-pointer ${
              errors.time
                ? "border-error dark:border-error"
                : "focus-within:border-green"
            }`}
          >
            Cooking time
            <div className="flex gap-4">
              <input
                className={`${
                  errors.time ? "border-error" : "border"
                } px-2 w-20 border rounded-lg outline-none bg-transparent dark:text-white placeholder:text-recipeDesc dark:placeholder:text-white`}
                type="number"
                {...register("time", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Title must be at least 2 characters long",
                  },
                })}
              />
              <span className={`${errors.time ? "text-error" : ""}`}>min</span>
            </div>
          </label>
          {errors.time && (
            <span className="absolute left-0 bottom-[-20px] text-xs text-error">
              {errors.time.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

AddRecipeDescription.propTypes = {
  onChangeRecipe: PropTypes.func,
  register: PropTypes.func,
};

export default AddRecipeDescription;
