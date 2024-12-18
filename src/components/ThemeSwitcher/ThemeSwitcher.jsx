import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../redux/darkMode/darkMode-slice";

const ThemeSwitcher = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [toggle, setToggle] = useState(isDarkMode);
  const dispatch = useDispatch();

  const onToggleHandler = () => {
    dispatch(toggleMode());
    setToggle((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        toggle ? "pl-9 bg-green" : "p-1 bg-white"
      } flex items-center p-1 w-[61px] h-[27px] transition-all duration-500 delay-75 rounded-full shadow-inner shadow-slate-400 cursor-pointer`}
      onClick={onToggleHandler}
    >
      <div className="w-[21px] h-[21px] bg-white rounded-full shadow shadow-slate-500"></div>
    </div>
  );
};

export default ThemeSwitcher;
