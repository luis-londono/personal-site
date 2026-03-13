import banner from "./images/Banner_Skyline_Subtle_Smaller.png";
import bannerMobile from "./images/Banner_Skyline_Subtle_Mobile.png";

const Banner = () => {
  /* Banner image generated using ChatGPT  */
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet={bannerMobile} />
      <img id="banner" src={banner} alt="Luis Londono" />
    </picture>
  );
};

export default Banner;
