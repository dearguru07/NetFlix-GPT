import React from "react";

const GptSearchBar = () => {
  return <div className="pt-[5%] flex justify-center" >
    <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="p-4 m-4 col-span-9 bg-amber-50 rounded-sm" type="search" placeholder="Search Here....."></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-sm cursor-pointer">Search</button>
    </form>
  </div>;
};

export default GptSearchBar;
