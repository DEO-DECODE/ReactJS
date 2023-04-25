import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05357b";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      {/* <div className="container my-3">
        {/* <TextForm heading="Enter the text below"/> */}
      {/* <About/> */}
      {/* </div> */}
      <TextForm heading="Eneter the text to Analyze" mode={mode} />
    </>
  );
}

export default App;
