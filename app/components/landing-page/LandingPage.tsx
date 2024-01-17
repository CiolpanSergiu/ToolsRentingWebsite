import MainTitle from "./titles/MainTitle";
import LandingPageOverlay from "./overlay/LandingPageOverlay";
import NavigationBtn from "./buttons/NavigationBtn";
import Image from "./banner/Image";

const LandingPage = () => {
  return (
    // <div className="mb-8 absolute w-full h-screen top-0 -z-10 left-0 mt-100">
    <div className="h-full w-full">
      <LandingPageOverlay />
      <Image />
      <div className="flex flex-col text-center mt-16 md:mt-20 [&>*]:z-20">
        <MainTitle />
        <span className="text-white font-light text-2xl md:text-3xl lg:text-4xl mx-4 my-2">
          Gama larga de produse
        </span>
        <span className="text-white font-light text-3xl md:text-4xl lg:text-5xl mx-4 my-2">
          Toate la un pas distanta!
        </span>
        <NavigationBtn link="#items-page" />
      </div>
      {/* <img
        src="https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A stylish man using a miter saw on a wood plank"
        className="max-h-screen w-full"
      /> */}
    </div>
    // </div>
  );
};

export default LandingPage;
