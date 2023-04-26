import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05357b";
      showAlert(" Dark Mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled !", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      {/* <div className="container my-3">
        {/* <TextForm heading="Enter the text below"/> */}
      {/* <About/> */}
      {/* </div> */}
      <TextForm
        showAlert={showAlert}
        heading="Eneter the text to Analyze"
        mode={mode}
      />
    </>
  );
}

export default App;
