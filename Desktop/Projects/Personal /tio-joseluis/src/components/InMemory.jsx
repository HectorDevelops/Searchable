import JLPicture from "../assets/jose-luis-pic.png";
const InMemory = () => {
  return (
    <div className="  bg-gray-300 rounded-3xl">
      <div className="max-w-screen flex-wrap px-10 py-3 flex mt-16 items-center shadow-lg">
        <div className="content-center text-black">
          <p className="text-5xl">Jose Luis Gonzalez - 1969 - 2022.</p>
          <p className="text-2xl">Un gran Padre, Hijo, Y Familiar. </p>
        </div>
        <div className="pr-5">
          <img
            src={JLPicture}
            alt="JoseLuisPicture"
            className="object-cover h-96 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default InMemory;
