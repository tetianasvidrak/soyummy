import { NavLink } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-no-repeat bg-cover bg-bottom bg-[url('./assets/welcomeBg.png')]">
      <div className="flex flex-col items-center w-[544px]">
        <img className="w-[68px] mb-[44px]" src={logo} />
        <div className="flex flex-col items-center gap-[14px] mb-[62px] text-white">
          <h1 className="font-semibold text-3xl mb-3.5">Welcome to the app!</h1>
          <p className="text-center font-normal text-lg">
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
        </div>
        <div className="text-white">
          <NavLink
            className="px-[44px] py-[22px] border border-transparent bg-green hover:bg-[#22252A] transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl cursor-pointer"
            to="/signup"
          >
            Registration
          </NavLink>
          <NavLink
            className="px-[44px] py-[22px] ml-4 border border-white hover:border-green hover:text-green transition ease-in-out delay-75 rounded-tl-3xl rounded-bl-[44px] rounded-tr-[44px] rounded-br-3xl cursor-pointer"
            to="/signin"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
