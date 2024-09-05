import { useEffect } from "react";
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";

import Icon from "../Icon";

const AuthForm = ({ title, onSubmit }) => {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    title === "Sign In" && unregister("name");
  }, [title]);

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div className="w-[500px] py-11 px-12 bg-bgGray rounded-3xl ">
      <h3 className="mb-8 text-2xl font-semibold text-white">{title}</h3>
      <form
        id="formBtn"
        className="flex flex-col gap-6 mb-12"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {title === "Sign In" || (
          <div>
            <label
              className={`group ${
                errors.name?.type === "minLength"
                  ? "border border-warning"
                  : errors.name
                  ? "border border-error"
                  : touchedFields.name && !errors.name
                  ? "border border-greenBorder"
                  : "border border-inputBorder"
              } flex gap-2 w-[400px] py-4 px-2 rounded focus-within:border-white`}
            >
              <span
                className={`${
                  errors.name?.type === "minLength"
                    ? "*:stroke-warning"
                    : touchedFields.name && !errors.name
                    ? "*:stroke-greenBorder"
                    : errors.name
                    ? "*:stroke-error"
                    : ""
                } group-has-[:focus]:*:stroke-white`}
              >
                <Icon
                  name="user"
                  fill="none"
                  stroke="gray"
                  size="6"
                  strokeWidth="1.5"
                />
              </span>

              <input
                className="bg-transparent outline-none w-[330px] text-white"
                type="text"
                placeholder="Name"
                {...register("name", { required: true, minLength: 2 })}
              />

              {errors.name && errors.name.type === "minLength" ? (
                <Icon name="warningCircle" additionalStyles="stroke-warning" />
              ) : errors.name && touchedFields.name ? (
                <Icon name="deleteCircle" additionalStyles="stroke-error" />
              ) : touchedFields.name && !errors.name ? (
                <Icon
                  name="correctCircle"
                  additionalStyles="stroke-greenBorder"
                />
              ) : (
                ""
              )}
            </label>
            {errors.name && errors.name.type === "minLength" ? (
              <p className="text-warning text-sm absolute">Name is too short</p>
            ) : (
              errors.name && (
                <p className="text-error text-sm absolute">Enter your name</p>
              )
            )}
          </div>
        )}
        <div>
          <label
            className={`group ${
              errors.email && errors.email.type === "pattern"
                ? "border border-warning"
                : errors.email
                ? "border border-error"
                : touchedFields.email && !errors.email
                ? "border border-greenBorder"
                : "border border-inputBorder"
            } flex gap-2 w-[400px] py-4 px-2 rounded focus-within:border-white`}
          >
            <span
              className={`${
                touchedFields.email && !errors.email
                  ? "*:stroke-greenBorder"
                  : errors.email && errors.email.type === "pattern"
                  ? "*:stroke-warning"
                  : errors.email
                  ? "*:stroke-error"
                  : ""
              } group-has-[:focus]:*:stroke-white`}
            >
              <Icon
                name="envelop"
                fill="none"
                stroke="gray"
                size="6"
                strokeWidth="1.5"
              />
            </span>

            <input
              className="bg-transparent outline-none w-[330px] text-white "
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            {errors.email && errors.email.type === "pattern" ? (
              <Icon name="warningCircle" additionalStyles="stroke-warning" />
            ) : errors.email && touchedFields.email ? (
              <Icon name="deleteCircle" additionalStyles="stroke-error" />
            ) : touchedFields.email && !errors.email ? (
              <Icon
                name="correctCircle"
                additionalStyles="stroke-greenBorder"
              />
            ) : (
              ""
            )}
          </label>
          {errors.email && errors.email.type === "pattern" ? (
            <p className="text-warning text-sm absolute">
              Please, include &#64; in the email address
            </p>
          ) : (
            errors.email && (
              <p className="text-error text-sm absolute">Enter your email</p>
            )
          )}
        </div>
        <div>
          <label
            className={`group ${
              errors.password && errors.password.type === "minLength"
                ? "border border-warning"
                : errors.password
                ? "border border-error"
                : touchedFields.password && !errors.password
                ? "border border-greenBorder"
                : "border border-inputBorder"
            } flex gap-2 w-[400px] py-4 px-2 rounded focus-within:border-white`}
          >
            <span
              className={`${
                touchedFields.password && !errors.password
                  ? "*:stroke-greenBorder"
                  : errors.password && errors.password.type === "minLength"
                  ? "*:stroke-warning"
                  : errors.password
                  ? "*:stroke-error"
                  : ""
              } group-has-[:focus]:*:stroke-white`}
            >
              <Icon
                name="lock"
                fill="none"
                stroke="gray"
                size="6"
                strokeWidth="1.5"
              />
            </span>

            <input
              className="bg-transparent outline-none w-[330px] text-white"
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === "minLength" ? (
              <Icon name="warningCircle" additionalStyles="stroke-warning" />
            ) : errors.password && touchedFields.password ? (
              <Icon name="deleteCircle" additionalStyles="stroke-error" />
            ) : touchedFields.password && !errors.password ? (
              <Icon
                name="correctCircle"
                additionalStyles="stroke-greenBorder"
              />
            ) : (
              ""
            )}
          </label>
          {errors.password && errors.password.type === "minLength" ? (
            <p className="text-warning text-sm absolute">
              Password must be at least 8 characters long.
            </p>
          ) : (
            errors.password && (
              <p className="text-error text-sm absolute">Enter your email</p>
            )
          )}
        </div>
      </form>
      <button
        className="w-full  bg-green py-4 rounded text-white text-base"
        form="formBtn"
      >
        {title === "Registration" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.any,
};

export default AuthForm;
