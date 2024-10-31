import React from "react";
import MalhubSpace from "../assets/MalhubSpace.jpeg";
import { Link } from "react-router-dom";

function Card({ title, subtitle, description, color, imageUrl }) {
  return (
    <div
      className={`p-6 h-80 rounded-[50px] ${
        color ? color : "bg-blue-gray-300"
      } flex flex-col items-center text-center`}
    >
      {imageUrl ? (
        <img
          src={MalhubSpace}
          alt="Card"
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        <>
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && <h2 className="text-lg mt-2">{subtitle}</h2>}
          {description && <p className="text-sm mt-4">{description}</p>}
        </>
      )}
    </div>
  );
}

function Boxes() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 p-8 min-h-screen">
      <div className="lg:col-span-1 hover:font-bold cursor-pointer">
        <Link to='/bookpland'>
        <Card
          title="Packages"
          subtitle="Comfortable"
          description="Immerse yourself in the Malhub community at our four office space packages."
        />
        </Link>
      </div>

      <div className="lg:col-span-1 hover:font-bold cursor-pointer">
        <Link to='/bookpland'>
        <Card
          title="2k"
          subtitle="Office Space"
          description="Join our thriving community and experience a good office space as low as N2,000. The power of your work is good as your comfort."
          color="bg-lime-500 text-black"
        />
        </Link>
      </div>

      <div className="lg:col-span-1">
        <Link>
        <Card
          imageUrl="https://example.com/sample-image.jpg"
          color="bg-black text-black"
        />
        </Link>
      </div>
      
      <div className="lg:col-span-1 hover:font-bold cursor-pointer">
        <Link to='/bookpland'>
        <Card
          title="Reservation"
          color="bg-red-300 text-black"
          description="You can reserve an office space anywhere anytime with ease"
        />
        </Link>
      </div>
      <div className="lg:col-span-1 hover:font-bold cursor-pointer">
        <Link>
        <Card
          title="Location"
          subtitle="Meetups"
          description="Experience Malhub working space by visiting at 1 Ilofa Rd, GRA, Ilorin 240101, Kwara."
        />
        </Link>
      </div>
    </div>
  );
}

export default Boxes;
