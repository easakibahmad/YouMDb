import React from "react";
import Carousel from "./Carousel/Carousel";
import Upnext from "./Upnext/Upnext";
import img1 from "../../../Images/image1.jpg";
import img2 from "../../../Images/image2.jpg";
import img3 from "../../../Images/image3.png";
import img4 from "../../../Images/image4.webp";
import img5 from "../../../Images/image5.jpg";
import img6 from "../../../Images/image6.jpeg";

const dataCarousel = [
  {
    img: img1,
    movie: "Titanic",
    id: 1,
  },
  {
    img: img2,
    movie: "The Lost Warrior",
    id: 2,
  },
  {
    img: img3,
    movie: "The GodFather",
    id: 3,
  },
  {
    img: img4,
    movie: "Little Women",
    id: 4,
  },
  {
    img: img5,
    movie: "Fairy Tail",
    id: 5,
  },
  {
    img: img6,
    movie: "Wakanda Forever",
    id: 6,
  },
];

const dataUpNext = [
  {
    img: img1,
    movie: "Titanic",
    id: 1,
  },
  {
    img: img2,
    movie: "The Lost Warrior",
    id: 2,
  },
  {
    img: img3,
    movie: "The GodFather",
    id: 3,
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        <div className="grid grid-cols-6">
          {dataCarousel.map((item) => (
            <Carousel key={item.id} item={item}></Carousel>
          ))}
        </div>
      </div>
      <div data-theme="coffee" className="col-span-1">
        <div className="grid grid-cols-1 h-4/5">
          {dataUpNext.map((item) => (
            <Upnext key={item.id} item={item}></Upnext>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn btn-outline btn-info">watch more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
