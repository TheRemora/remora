import React from "react";
import siteLogo from "../assets/site-logo.svg";

function Sidebar() {
  const searchNFT = (e) => {
    console.log(e.target.value);
  };

  return (
    <aside className="w-96" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded h-screen dark:bg-gray-800">
        {/* Sidebar Logo */}
        <a
          href="https://localhost:3000/"
          className="flex items-center text-center pl-2.5 mb-5"
        >
          <img
            src={siteLogo}
            className="mr-3 h-12 sm:h-7 "
            alt="Flowbite Logo"
          />
        </a>

        {/* Search Bar */}
        <div>
          <form className="my-16">
            <label
              htmlFor="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
        <div className="space-y-8">
          {[1, 2, 3].map((item, key) => {
            return (
              <img
                src="https://picsum.photos/380/300"
                className="rounded-lg cursor-grab"
                alt={item}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
