import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ recipes, filterRecipes }) => {
  const [hamburger, setHamburger] = useState(true);

  return (
    <div className="flex justify-center p-4 absolute w-full left-0 top-0 bg-[#fefefe]">
      <div className="flex items-center justify-between max-w-5xl w-full">
        <div className="font-semibold text-2xl">
          <span className="">HOT</span>
          <span className="text-[#32B769]">RECIPE</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          onClick={() => {
            setHamburger((hamburger) => !hamburger);
          }}
          className="md:hidden"
        >
          <path
            fill="gray"
            d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
          />
        </svg>
        <div className="gap-4 text-sm hidden md:flex">
          <Link to="/" className="p-2 transition duration-500 hover:font-bold">
            Home
          </Link>
          <Link
            to="/recipes"
            className="p-2 transition duration-500 hover:font-bold"
          >
            Recipes
          </Link>
          <Link
            to="/liked-recipes"
            className="p-2 transition duration-500 hover:font-bold"
          >
            Your Liked Recipes
          </Link>
        </div>
        <div className="hidden border-2 rounded-md md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="px-2 text-sm"
            type="text"
            placeholder="Search Recipe"
            onChange={(event) => filterRecipes(event, recipes)}
          />
        </div>
        <div
          className={
            hamburger
              ? "absolute flex flex-col gap-8 h-[100vh] w-72 top-0 left-0 z-10 bg-white shadow-2xl py-5 px-4"
              : "hidden"
          }
        >
          <div className="gap-8 text-sm flex flex-col ">
            <div className="font-semibold text-2xl">
              <span className="">HOT</span>
              <span className="text-[#32B769]">RECIPE</span>
            </div>
            <Link
              to="/"
              className="p-2 transition duration-500 hover:font-bold"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="p-2 transition duration-500 hover:font-bold"
            >
              Recipes
            </Link>
            <Link
              to="/liked-recipes"
              className="p-2 transition duration-500 hover:font-bold"
            >
              Your Liked Recipes
            </Link>
          </div>
          <div className="border-2 rounded-md flex gap-1 w-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              className="px-2 text-sm w-[100%]"
              type="text"
              placeholder="Search Recipe"
              onChange={(event) => filterRecipes(event, recipes)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
