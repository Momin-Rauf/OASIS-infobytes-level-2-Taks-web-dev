import React from "react";

const KeyPad = ({ onButtonClick, isOn, theme }) => {
  const handleClick = (value) => {
    if (isOn) {
      onButtonClick(value);
    }
  };

  const buttons = [
    "clear",
    "%",
    "^",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  return (
    <div className={`md:w-full md:h-96 rounded-xl grid grid-cols-4 gap-4 p-1 mt-6 bg-gray-800 text-white`}>
      {buttons.map((value, index) => (
        <button key={index} onClick={() => handleClick(value)} className={`bg-gray-500 border-black w-auto border-[2px] rounded-2xl shadow-sm shadow-${theme === "bright" ? "white" : "black"} hover:bg-gray-700 text-lg`}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default KeyPad;
