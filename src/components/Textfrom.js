import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clrTxt = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const copyToClipboard = () => {
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const [text, setText] = useState(""); // State variable

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="Mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#333" : "white",
              color: props.mode === "dark" ? "white" : "black",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={clrTxt}>
          Clear Text
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0)
              .length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview !!!"}
        </p>
      </div>
    </>
  );
}
