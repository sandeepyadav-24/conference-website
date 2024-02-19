import Body from "./Body";
import Intro from "./Intro";
import Swiper from "./FooterSpeaker";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mx-8">
        <Intro />
        <Body />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Swiper />
      </div>
    </div>
  );
};
export default Home;
