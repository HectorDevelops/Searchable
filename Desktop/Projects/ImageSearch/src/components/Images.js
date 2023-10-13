import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import LoadFrame from "./LoadFrame";

const Images = () => {
  const { response, isLoading, searchedImageName } = useContext(ImageContext);
  return (
    <div className="flex justify-center h-3/5 ">
      <div className="max-w-6xl mt-6 h-5/6 pb-3">
        <h1 className="text-center mt-8 text-2xl dark:text-white ">
          {/* if no text has been inputted, the message will show "your search" as a string, otherwise, it will show the searched image's name as a result */}
          Results for {searchedImageName || "your search"}
        </h1>
        <div className="h-full grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-10 max-w-4xl mx-auto px-4 pt-2 overflow-y-auto no-scrollbar ">
          {isLoading ? (
            <LoadFrame item={10} />
          ) : (
            // The map function will iterate through the list of images being fetched from the promise and display them
            response.map((data, key) => (
              <div key={key} className="max-w-full shadow-l hover:scale-105">
                <Image data={data} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Images;
