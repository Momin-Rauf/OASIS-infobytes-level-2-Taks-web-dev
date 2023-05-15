import React, { useState } from "react";
import Footer from "./components/Footer";
import KeyPad from "./components/KeyPad";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOn, setIsOn] = useState(true);
  const [expression, setExpression] = useState("");

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleButtonClick = (value) => {
    if (isOn) {
      if (value === "=") {
        try {
          const result = eval(expression);
          setExpression(result.toString());
        } catch (error) {
          setExpression("Error");
        }
      } else if (value === "clear") {
        setExpression("");
      } else {
        setExpression((prevExpression) => prevExpression + value);
      }
    }
  };

  return (
    <div className={`flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} justify-center items-center w-screen h-screen p-4`}>
      <div className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-3xl shadow-2xl w-96`}>
        <ResultScreen expression={expression} isOn={isOn} isDarkMode={isDarkMode} />
        <KeyPad onButtonClick={handleButtonClick} isOn={isOn} isDarkMode={isDarkMode} />
        <Footer
          onThemeChange={handleThemeChange}
          isDarkMode={isDarkMode}
          isOn={isOn}
          togglePower={() => setIsOn(!isOn)}
        />
      </div>
    </div>
  );
}

export default App;
