import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-10  ">
      <div className=" mx-auto borderw-screen">
        <h1 className="text-green-600 text-center text-8xl font-bold mb-5">
          Searchable
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
