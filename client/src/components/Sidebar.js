import React from "react";
import NFTCards from "./NFTCards";
import { NFTDATA } from "../utils/data";
import uuid from "react-uuid";
import SiteLogo from "../widgets/SiteLogo";

function Sidebar() {
  const searchNFT = (e) => {};
  return (
    <aside className="w-96" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded h-screen dark:bg-gray-800">
        {/* Sidebar Logo */}
        <a href="/" className="flex items-center text-center pl-2.5 mb-5">
          <SiteLogo className="mr-3 mt-6 h-12 sm:h-7" alt="Site Logo" />
        </a>

        {/* Search Bar */}
        <div>
          <form className="my-16">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={searchNFT}
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search NFTs & Collections..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#14E2B2] dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-8 ">
          {NFTDATA.map((data, index) => {
            return (
              <NFTCards
                key={uuid()}
                id={data.id}
                imgURL={data.imgURL}
                title={data.title}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
