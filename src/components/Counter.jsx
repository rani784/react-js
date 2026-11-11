
import React, { useState } from "react";
import "./Counter.css";

function Counter() {

  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [theme, setTheme] = useState("light");

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme}`}>

      <div className="counter-card">

        <h1>React Counter App</h1>

        <p className="theme-text">
          Current Theme: {theme === "light" ? "Light Mode" : "Dark Mode"}
        </p>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <h2>Counter Value</h2>

        <h1 className="count">{count}</h1>

        <div className="button-group">

          <button className="increment" onClick={increment}>
            Increment +
          </button>

          <button className="decrement" onClick={decrement}>
            Decrement -
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Counter;