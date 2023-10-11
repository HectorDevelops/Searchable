import React from "react";

const Image = ({ data }) => {
  return (
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          className="h-64 w-full object-cover rounded-lg shadow-md hover:shadow-gray-900"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
    </div>
  );
};

export default Image;
