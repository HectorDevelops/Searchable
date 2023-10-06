const SearchField = () => {
  return (
    <div className="border border-green-800 ">
      <div className="flex border border-red-500 max-w-2xl ">
        <input
          className="bg-gray-50 border borde-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring rounded-tl rounded-bl"
          type="search"
          placeholder="Search"
        />
        <button className="bg-blue-600 px-6 py-2.5 text-white focus:ring rounded-tr rounded-br w-20">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchField;
