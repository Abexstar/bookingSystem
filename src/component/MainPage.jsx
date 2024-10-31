import React from "react";
import MalhubLogo from "../assets/MalhubLogo.png";
import ImageSlider from "../component/ImageSlider";
import Navbar from "./Navbar";
import Boxes from "./Boxes";

function MainPage() {
  return (
    <div className="bg-light-blue-50">
      <Navbar />
      <div className="">
        <div className="flex gap-[400px] pt-20 pl-10">
          <img className="w-[300px] h-[100px]" src={MalhubLogo} alt="Logo" />
          <div className="pt-[130px]">
            <i className="font-semibold text-[18px]">
              Makers and Leaders Hub <span>(MALhub) </span> <br />
              is an open, serene and beautiful shared workspace <br /> for
              startups and entrepreneurs at a lower cost than <br /> they would
              spend on space of their own.
            </i>
          </div>
        </div>
      </div>

      <div className="mt-20 ml-[10%] w-[80%] h-[400px] rounded-2xl">
        <ImageSlider />
      </div>

      <div className="text-[50px] text-black font-serif text-center mt-32">
        <p>Services</p>
      </div>

      <div className="mt-5">
        <Boxes />
      </div>
    </div>
  );
}

export default MainPage;
