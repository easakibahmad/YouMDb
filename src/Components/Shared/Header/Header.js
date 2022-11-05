import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      data-theme="forest"
      className="navbar flex justify-between bg-base-100 shadow-2xl"
    >
      <div>
        <Link className="btn btn-ghost normal-case text-xl">YouMDb</Link>
        <div className="lg:block hidden">
          <Link className="px-4 link link-accent" to="/">
            Home
          </Link>
          <Link className="px-4 link link-accent" to="/watch">
            Watchlist
          </Link>
          {!user?.uid && (
            <Link className="px-4 link link-accent" to="/login">
              Login
            </Link>
          )}
        </div>

        <div className="dropdown dropdown-bottom md:hidden block">
          <label className="text-2xl" tabIndex={0}>
            <HiMenuAlt1></HiMenuAlt1>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link className="py-2 link link-accent" to="/">
              Home
            </Link>
            <Link className="py-2 link link-accent" to="/watch">
              Watchlist
            </Link>
            {!user?.uid && (
              <Link className="py-2 link link-accent" to="/login">
                Login
              </Link>
            )}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="w-5/6 input input-bordered"
              />
            </div>
          </ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control md:block hidden">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        {user?.uid && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.uid && <img src={user.photoURL} alt="" />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                {user?.uid && (
                  <Link
                    className="px-4 link link-accent"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
