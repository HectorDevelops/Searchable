import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-10 dark:bg-neutral-900">
      <div className=" mx-auto w-screen">
        <h1 className="text-green-600 text-center text-8xl font-bold mb-5">
          Searchable
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
