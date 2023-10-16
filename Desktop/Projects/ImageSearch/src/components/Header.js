import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-10 dark:bg-neutral-900">
      <div className=" mx-auto w-screen sm:w-screen md:w-3/4 lg:w-1/2 xl:w-1/3 text-7xl">
        <h1 className="text-green-600 text-center sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl font-bold mb-5">
          Searchable
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
