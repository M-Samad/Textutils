import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = function () {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLoClick = function () {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleNsClick = function () {
    let newText = text.split(" ").join().replaceAll(",", "");
    setText(newText);
    props.showAlert("Converted to No space", "success");
  };

  const handleOnChange = function (e) {
    setText(e.target.value);
  };

  const handleClearClick = function () {
    setText("");
    props.showAlert("Space has been cleared", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",

              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.darkColor === "grey" ? "primary" : "secondary"
          } mx-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.darkColor === "grey" ? "primary" : "secondary"
          }`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.darkColor === "grey" ? "primary" : "secondary"
          } mx-2`}
          onClick={handleNsClick}
        >
          No spaces
        </button>
        <button
          className={`btn btn-${
            props.darkColor === "grey" ? "primary" : "secondary"
          }`}
          onClick={handleClearClick}
        >
          Clear space
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.lastIndexOf(" ") === text.length - 1
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in text box to preview"}
        </p>
      </div>
    </>
  );
}
