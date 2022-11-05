import React from "react";
import video from "../../../../Images/video-watch.jpg";
import { Link } from "react-router-dom";

const Upnext = ({ item }) => {
  const { img, movie } = item;
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 p-2">
        <img className="h-20 rounded-md mt-auto w-full" src={img} alt="" />
      </div>
      <div className="my-2">
        <span className="text-sm">{movie} </span>

        <Link>
          <img className="h-6 w-6 rounded-full" src={video} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Upnext;
