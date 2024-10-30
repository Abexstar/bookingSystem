import React from "react";
import MalhubLogo from "../assets/MalhubLogo.png";
import ImageSlider from "../component/ImageSlider";


function MainPage() {
  return (
    <div className="flex gap-40 pt-14 pl-10">
      
      <div className="w-[600px] h-[400px] rounded-2xl">
          <ImageSlider />
      </div>

      <div className="mt-5">
      <img
          className="w-[300px] h-[100px] ml-40"
          src={MalhubLogo}
          alt="Logo"
        />
        <i className="font-semibold">
          Makers and Leaders Hub <span>(MALhub) </span> <br />
          is an open, serene and beautiful shared workspace <br /> for startups and
          entrepreneurs at a lower cost than they <br /> would spend on space of their
          own. 
        </i>
       
      </div>
    </div>
  );
}

export default MainPage;
