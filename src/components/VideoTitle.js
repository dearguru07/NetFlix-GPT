import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-10 absolute text-white w-screen aspect-video overflow-x-hidden min-h-screen">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-[15px] py-6 w-1/3">{overview}</p>
      <div className="text-white -ml-4 -mt-5">
        <button className="font-bold text-lg text-black cursor-pointer  bg-white px-6 py-2 m-5 rounded-sm hover:bg-gray-400">
          ▶ PLAY
        </button>
        <button className="font-bold text-lg text-white hover:text-black cursor-pointer  bg-gray-600 opacity-70 px-6 py-2 rounded-sm  hover:bg-amber-100">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
