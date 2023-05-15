import React from "react";

const ResultScreen = ({ expression, isOn, theme }) => {
  return (
    <div className={`mt-10 shadow-sm shadow-${theme === "bright" ? "white" : "black"} text-white md:w-full mb-2 rounded-2xl bg-gray-500 border-[4px]  flex flex-row justify-end items-end text-3xl p-2 border-gray-600 h-20`}>
      <p>{isOn ? expression : ""}</p>
    </div>
  );
};

export default ResultScreen;
