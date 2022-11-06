import React from "react";
import { Link } from "react-router-dom";

const Featured = ({ item }) => {
  const { _id, picture, filmName } = item;
  return (
    <div className="bg-black text-white border-r-2 ">
      <img src={picture} className="h-72" alt="" />
      <div>
        <span className="block text-center p-2 text-sm">{filmName}</span>{" "}
        <div className="flex justify-center pb-2">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-xs">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
