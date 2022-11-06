import Carousel from "./Carousel/Carousel";
import Upnext from "./Upnext/Upnext";
import img1 from "../../../Images/image1.jpg";
import img2 from "../../../Images/image2.jpg";
import img3 from "../../../Images/image3.png";
import img4 from "../../../Images/image4.webp";
import img5 from "../../../Images/image5.jpg";
import img6 from "../../../Images/image6.jpeg";
import next from "../../../Images/next.webp";
import { Link } from "react-router-dom";
import Featured from "./Featured/Featured";
import { useEffect, useState } from "react";

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
  // const { movies, count } = useLoaderData();

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const url = `http://localhost:4000/movies?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setMovies(data.movies);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  return (
    <div data-theme="luxury">
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
            <Link>
              <button className="btn btn-outline btn-info">
                watch more
                <img className="ml-2 h-6 w-6 rounded-full" src={next} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-6">
        <h1 className="text-3xl ml-8 my-8">Featured today</h1>

        <div className="grid grid-cols-6">
          {movies.map((item) => (
            <Featured key={item._id} item={item}></Featured>
          ))}
        </div>
        <div className="flex justify-center py-8">
          <p>selected page :{page}</p>
          {[...Array(pages).keys()].map((number) => (
            <button
              className={
                page === number
                  ? "mx-4 border p-2 bg-white text-black"
                  : "mx-4 border p-2"
              }
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
          <select
            className="bg-black text-white"
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="3" selected>
              3
            </option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
