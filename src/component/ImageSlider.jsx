import { Carousel } from "@material-tailwind/react";
import MalCenter from '../assets/MalCenter.jpeg';
import Mws from '../assets/Mws.jpeg';
import CoWorking from '../assets/CoWorking.jpeg';

 
 function ImageSlider() {
  return (
    <Carousel autoplay={true} loop={true} className="rounded-2xl">
      <img
        src={ MalCenter }
        alt="image 1"
        className="w-[100%] h-[400px]"
      />
      <img
        src={ Mws }
        alt="image 2"
        className="w-[100%] h-[400px]"
      />
      <img
        src={ CoWorking }
        alt="image 3"
        className="w-[100%] h-[400px]"
      />
    </Carousel>
  );
}

export default ImageSlider;