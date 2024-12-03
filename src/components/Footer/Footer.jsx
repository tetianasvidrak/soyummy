import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import Container from "../Container/Container";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <footer className="relative">
      <div className="absolute w-full z-10 overflow-visible bg-no-repeat bg-auto bg-[url('./assets/bgLeavesBottom.png'),_url('./assets/footerLeaves.png')] bg-[position:left_bottom_15px,_right] bg-footerBg dark:bg-green">
        <Container>
          <div className="flex justify-between text-white pt-16 pb-28">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Logo bgColor={"#EBF3D4"} itemColor={"#8BAA36"} />
                <h3 className="font-bold text-[28px]">So Yummy</h3>
              </div>
              <ul className="w-[418px] text-left list-disc space-y-3 pl-5">
                <li>Database of recipes that can be replenished</li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </ul>
            </div>
            <ul className="flex flex-col gap-5">
              <ScrollToTop>
                <Link to="/categories">Ingredients</Link>
                <Link to="/addrecipe">Add recipes</Link>
                <Link to="/myrecipes">My recipes</Link>
                <Link to="/favorites">Favorite</Link>
                <Link to="/shoppinglist">Shopping list</Link>
              </ScrollToTop>
            </ul>
            <div className="w-[339px]">
              <div className="flex flex-col items-start gap-3.5 mb-7">
                <h4 className="font-bold text-lg">
                  Subscribe to our Newsletter
                </h4>
                <p className="font-normal text-sm text-left">
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label className="py-4 px-4 mb-4 rounded group focus-within:border-green flex gap-2 border border-footerInputBorder dark:focus-within:border-white dark:border-footerInputDarkMode">
                  <Icon
                    name="envelop"
                    fill="none"
                    color="white"
                    stroke="currentColor"
                    size="6"
                    strokeWidth="2"
                  />
                  <input
                    className="bg-transparent focus:outline-none placeholder:text-white w-full"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </label>
                <button className="w-full py-5 px-32 bg-green hover:text-black dark:bg-darkMode dark:hover:text-green transition delay-75 ease-in-out rounded-md cursor-pointer">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="pb-10">
            <SocialMediaIcons
              styles="flex justify-center items-center gap-5"
              fill="white"
            />
          </div>
        </Container>
        <div className="flex justify-center gap-3 py-10 bg-white dark:bg-black text-[#8E8F92] dark:text-white">
          <span className="font-medium">©2024 All Rights Reserved.</span>
          <span className="font-normal">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
