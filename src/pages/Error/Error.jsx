import errorImg from "../../assets/error404.png";

const Error = () => {
  return (
    <div className="max-w-[1270px] m-auto px-[15px] mb-[203px]">
      <div className="flex flex-col gap-32">
        <div className="relative">
          <div className="absolute left-[240px] top-14 w-[14px] h-[14px] rotate-45 bg-green rounded"></div>
          <div className="absolute right-[530px] top-36 w-[14px] h-[14px] rotate-45 bg-black dark:bg-white rounded"></div>
          <div className="absolute right-[100px] top-16 w-[14px] h-[14px] rotate-45 bg-green rounded"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <img src={errorImg} className="w-[494px] h-[331px]" />
          <p className="flex flex-col items-center text-lightGrayDarkMode text-lg font-normal">
            <span className="font-semibold text-2xl text-black dark:text-white">
              We are sorry,
            </span>
            but the page you were looking for can't be found.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
