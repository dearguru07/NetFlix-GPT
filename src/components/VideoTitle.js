import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-25 px-10">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="text-2xl py-6 w-1/3">{description}</p>
      <div className="">
        <button class="cursor-pointer relative group overflow-hidden border-2 px-4 py-2 border-black m-5">
          <span class="font-bold text-black text-xl relative z-10 group-hover:text-green-500 duration-500">
            ▶ PLAY
          </span>
        </button>
        <button class="cursor-pointer relative group overflow-hidden border-2 px-5 py-2 border-black">
          <span class="font-bold text-black text-xl relative z-10 group-hover:text-green-500 duration-500">
            ℹ More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
