import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

function VideoTitle({ title, overview }) {
  return (
    <div className=" aspect-video pt-64 mt-25 px-12 absolute text-white  ">
      {/* Title */}
      <h1 className=" text-2xl md:text-6xl font-bold mb-5 max-w-3xl">
        {title}
      </h1>

      {/* Overview */}
      <p className="py-6 text-lg max-w-xl hidden md:block">{overview}</p>

      {/* Buttons */}
      <div className="flex space-x-4 ">
        {/* Play Button */}
        <button className="bg-white text-black font-bold py-2 px-6 rounded-md text-lg flex items-center gap-2 hover:bg-opacity-80 transition duration-300">
          <FaPlay /> Play
        </button>

        {/* More Info Button */}
        <button className="bg-gray-700/80 text-white font-bold py-2 px-6 rounded-md text-lg flex items-center gap-2 hover:bg-gray-600 transition duration-300 ">
          <FaInfoCircle /> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
