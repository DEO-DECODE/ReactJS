import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (event) => {
    // console.log("You Have clicked the button");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = (event) => {
    // console.log("You Have clicked the button");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopyText = (event) => {
    // Get the text field
    let copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
  };
  const handleClearText = (event) => {
    // Get the text field
    setText("");
    // alert("Copied the text: " + copyText.value);
  };
  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#05357b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#05357b'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length} Words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to read </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter the text in the textbox to preview here"}</p>
        </div>
      </div>
    </>
  );
}
