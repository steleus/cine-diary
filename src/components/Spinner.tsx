import { Lottie } from "lottie-react";
import spinner from "../assets/spinner.json";

function Spinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <Lottie src={spinner} autoplay loop />
    </div>
  );
}

export default Spinner;