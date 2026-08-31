import Lottie from "lottie-react";
import spinner from "../assets/spinner.json";

function Spinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <Lottie animationData={spinner} loop={true} />
    </div>
  );
}

export default Spinner;