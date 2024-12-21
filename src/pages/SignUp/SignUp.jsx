import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as authOperations from "../../redux/auth/authOperations";

import signUpImg from "../../assets/signUpImg.png";
import bgAuthFloor from "../../assets/bgAuthFloor.svg";
import AuthForm from "../../components/AuthForm";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const onSubmitSignUpHandler = (data) => {
    setSignUpData((prevState) => ({ ...prevState, ...data }));
    dispatch(authOperations.register({ ...signUpData, ...data }));
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex items-center gap-28 z-10">
          <img className="w-[532px] h-[468px]" src={signUpImg} />
          <div className="flex flex-col items-center">
            <AuthForm title={"Registration"} onSubmit={onSubmitSignUpHandler} />
            <Link
              className="text-white mt-5 underline underline-offset-1"
              to="/signin"
            >
              Sign in
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-0 z-0 h-[380px] w-full bg-cover"
          style={{ backgroundImage: `url(${bgAuthFloor})` }}
        ></div>
      </div>
      {isLoggedIn && <Navigate to="/" />}
    </>
  );
};

export default SignUp;
