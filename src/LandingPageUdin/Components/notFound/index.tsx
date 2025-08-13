import Lottie from "lottie-react";
import Animation404 from "../../Assets/animation404.json";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center -mt-8">
      <div className="w-[1000px] h-[500px]">
        <Lottie animationData={Animation404} loop={true} />
      </div>
    </div>
  );
};

export default NotFoundPage;
