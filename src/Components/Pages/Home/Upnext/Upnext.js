import React from "react";

const Upnext = ({ item }) => {
  const { img, movie } = item;
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 p-2">
        <img className="h-20 rounded-md mt-auto w-full" src={img} alt="" />
      </div>
      <div className="my-2">
        <span className="text-sm">{movie}</span>
      </div>
    </div>
  );
};

export default Upnext;
