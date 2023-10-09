import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import LoadFrame from "./LoadFrame";

const Images = () => {
  const { response, isLoading, searchedImageName } = useContext(ImageContext);
  return (
    <div className="mt-18  flex justify-center h-3/4  ">
      <div className="max-w-6xl mt-6 ">
        <h1 className="text-center mt-8 text-2xl mb-15 ">
          Results for {searchedImageName || "your search"}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-10 max-w-4xl mx-auto px-4 overflow-y-auto h-3/4 ">
          {isLoading ? (
            <LoadFrame item={10} />
          ) : (
            response.map((data, key) => (
              <div key={key} className="max-w-full">
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
