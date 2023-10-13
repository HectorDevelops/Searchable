import React, { useState, useEffect } from "react";
import Switch from "react-switch";

// Creating the DarkModeSwtich component to change site's theme for accessibility inclusiness
const DarkModeSwitch = () => {
  // Creating this hook to toggle between true or false in the dark mode button
  const [toggle, setToggle] = useState(false);

  // Creating this function to set toggle to the current state's opposite
  const handleChange = (val) => {
    setToggle(val);
  };
  // The useEffect will help change the site's theme based once toggle is updated
  useEffect(() => {
    if (toggle === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);
  // This function 
  const handleModeSwitch = () => {
    setToggle(toggle === true ? false : true);
  };

  return (
    <div className="flex justify-center -mt-32 mb-10">
      <Switch
        checked={toggle}
        onChange={handleChange}
        onClick={handleModeSwitch}
        onColor="#9CA3AF"
        onHandleColor="#17A34A"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="#689b35"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </div>
  );
};

export default DarkModeSwitch;
