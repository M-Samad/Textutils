import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let [darkColor, setDarkColor] = useState("#042743");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = darkColor;
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const handleGreyMode = (e) => {
    if (mode === "dark") {
      if (darkColor === "#042743") {
        setDarkColor("grey");
        e.target.style.backgroundColor = "grey";
        document.body.style.backgroundColor = darkColor;
      }
      if (darkColor === "grey") {
        setDarkColor("#042743");
        e.target.style.backgroundColor = "#042743";
        document.body.style.backgroundColor = darkColor;
      }
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Utils"
        mode={mode}
        toggleMode={toggleMode}
        handleGreyMode={handleGreyMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/"> */}
        <Textform
          heading="Enter the text"
          mode={mode}
          darkColor={darkColor}
          showAlert={showAlert}
        />
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
