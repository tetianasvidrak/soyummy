import { Link } from "react-router-dom";

import signUpImg from "../../assets/signUpImg.png";
import AuthForm from "../../components/AuthForm";

const SignUp = () => {
  const onSubmitSignUpHandler = (data) => {
    console.log(data);
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
        <div className="absolute bottom-0 z-0 h-[380px] w-full bg-cover bg-[url('./assets/bgAuthFloor.svg')]"></div>
      </div>
    </>
  );
};

export default SignUp;
