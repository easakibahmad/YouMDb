import React from "react";

const Featured = ({ item }) => {
  const { img, movie } = item;
  return (
    <div className="bg-black text-white border-r-2 ">
      <img src={img} className="h-72" alt="" />
      <div>
        <span className="block text-center p-2 text-sm">{movie}</span>{" "}
        <div className="flex justify-center pb-2">
          <button className="btn btn-xs">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
