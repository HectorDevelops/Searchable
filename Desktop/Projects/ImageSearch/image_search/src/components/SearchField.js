const SearchField = () => {
  return (
    <div className=" w-full bg-gray-900 h-6 ">
      <div className="w-full max-w-2xl flex mx-auto ">
        <input
          className="bg-gray-50 border borde-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring rounded-tl rounded-bl "
          type="search"
          placeholder="Search over 1.7B images . . ."
        />
        <button className="bg-blue-600 py-2.5 text-white focus:ring rounded-tr rounded-br w-20">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchField;
