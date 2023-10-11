import { createContext } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import { useState } from "react";
import Footer from "./components/Footer";

// Creating the createContext hook to pass values between components for usability
export const ImageContext = createContext();

function App() {
  // Fetching data from the unsplash API to display
  const { response, isLoading, error, dataFetch } = useAxios(
    // interpolating the Unplash Access Key to avoid exposure of API Key to unauthorized users
    `search/photos?page=2&per_page=50&query=pitbull&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  const [searchedImageName, setSearchedImageName] = useState("");

  // Creating the value object, passing it in the context function to access them in the nested components
  const value = {
    response,
    isLoading,
    error,
    dataFetch,
    searchedImageName,
    setSearchedImageName,
  };

  return (
    <div className="h-screen bg-gray-300">
      <ImageContext.Provider value={value}>
        <Header />
        <SearchField />
        <Images />
        <Footer />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
