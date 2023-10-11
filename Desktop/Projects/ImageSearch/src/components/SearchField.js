import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  // Creating searchData variable to update the fetched data url to retrieve the desired images
  const [searchData, setSearchData] = useState("");
  // Created dataFetch function to pass the data inputted into the searchField and access them in the child components
  const { dataFetch, setSearchedImageName } = useContext(ImageContext);

  // Setting the search bar inputted string as an event and assigning it to the useState setSearchData hook
  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };
  // Creating this event to update the url being fetched upon the 'Search' button being pressed
  const handleButtonSearch = () => {
    dataFetch(
      `search/photos?page=2&per_page=50&query=${searchData}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchData("");
    setSearchedImageName(searchData);
  };
  // Creating this event to update the url being fetched upon the 'Enter' key being pressed
  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      dataFetch(
        `search/photos?page=2&per_page=50&query=${searchData}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchData("");
      setSearchedImageName(searchData);
    }
  };

  return (
    <div className=" w-full bg-gray-900 h-6 ">
      <div className="w-full max-w-2xl flex mx-auto ">
        <input
          className="bg-gray-50 border borde-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring rounded-tl rounded-bl "
          type="search"
          placeholder="Search over 1.7B images . . ."
          value={searchData}
          onChange={handleInputChange}
          onKeyDown={handlePressEnter}
        />
        <button
          className="bg-blue-600 py-2.5 text-white focus:ring rounded-tr rounded-br w-20 hover:bg-green-600 "
          onClick={handleButtonSearch}
          disabled={!searchData}
        >
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchField;
