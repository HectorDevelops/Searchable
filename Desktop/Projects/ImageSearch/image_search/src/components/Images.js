import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";

const Images = () => {
  const { response, isLoading } = useContext(ImageContext);
  // console.log(response);
  return (
    <div className="border border-green-950 mt-12">
      <h1 className="text-center mt-3 text-2xl">Results for Cats</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-10">
        {response.map((data, key) => (
          <Image key={key} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Images;
