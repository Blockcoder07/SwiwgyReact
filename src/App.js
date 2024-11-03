import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client in React 18+
import Body from "./components/Body";
import Navbar from "./components/Navbar";

const App = () => {
  // Capitalized the component name
  return (
    <div className="app">
      <Navbar />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Use the capitalized component name
