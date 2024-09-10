import { Link } from "react-router-dom";

import AuthForm from "../../components/AuthForm";

import signUpImg from "../../assets/signUpImg.png";

const SignIn = () => {
  const onSubmitSignInHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex items-center gap-28 z-10">
          <img className="w-[532px] h-[468px]" src={signUpImg} />
          <div className="flex flex-col items-center">
            <AuthForm title="Sign In" onSubmit={onSubmitSignInHandler} />
            <Link
              className="text-white mt-5 underline underline-offset-1"
              to="/signup"
            >
              Registration
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 z-0 h-[380px] w-full bg-cover bg-[url('./assets/bgAuthFloor.svg')]"></div>
      </div>
    </>
  );
};

export default SignIn;
