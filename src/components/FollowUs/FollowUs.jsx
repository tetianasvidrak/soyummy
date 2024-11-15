import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const FollowUs = () => {
  return (
    <div className="flex flex-col gap-10 mb-[100px]">
      <h3 className="font-semibold text-2xl text-darkGrey dark:text-white">
        Follow us
      </h3>
      <SocialMediaIcons styles="flex gap-5" />
    </div>
  );
};

export default FollowUs;
