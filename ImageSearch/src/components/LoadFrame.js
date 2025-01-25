import React from "react";

const LoadFrame = ({ item }) => {
  // eslint-disable-next-line array-callback-return
  return [...Array(item).keys()].map(() => {
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>;
  });
};

export default LoadFrame;
