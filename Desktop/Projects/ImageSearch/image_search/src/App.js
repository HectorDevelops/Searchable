import { createContext } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, dataFetch } = useAxios(
    `search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    dataFetch,
  };

  return (
    <div className="h-screen bg-gray-300">
      <ImageContext.Provider value={value}>
        <Header />
        <SearchField />
        <Images />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
