import React from "react";

const Footer = ({ onThemeChange, theme, isOn, togglePower }) => {
  const handleThemeChange = () => {
    onThemeChange();
  };

  return (
    <div className="bg-gray-950 text-white h-auto mt-2 rounded-xl flex flex-row">
      <button onClick={handleThemeChange} className="m-2 border-[.5px] p-2 hover:bg-gray-800 rounded-lg" type="button">
        {theme === "bright" ? "Dark" : "Bright"}
      </button>
      <button onClick={togglePower} className="m-2 border-[.5px] p-2 hover:bg-gray-800 rounded-lg" type="button">
        {isOn ? "Off" : "On"}
      </button>
      <p className="m-2 border-[.5px] w-full p-2 hover:animate-bounce hover:bg-gray-800 rounded-lg">Project for: OASIS INFOBYTES</p>
    </div>
  );
};

export default Footer;
