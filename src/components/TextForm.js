import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("TEXT CONVERTED TO UPPERCASE", "SUCCESS");
  };
  const onHandle = (event) => {
    setText(event.target.value);
  };
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("TEXT CONVERTED TO LOWERCASE", "SUCCESS");
  };

  const [text, setText] = useState("");

  var readabel_time = 0.008 * text.split(" ").length;
  return (
    <div className="container">
      <h1
        className="heading1"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          class="form-control"
          value={text}
          onChange={onHandle}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "#19334d",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>
        UPPERCASE
      </button>
      <button className="btn btn-primary mx-2" onClick={lowercase}>
        LOWERCASE
      </button>
      <div
        className="characters"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{text.length} CHARACTERS</h2>
        <p>{text.split(" ").length} WORDS</p>
        <p>{readabel_time} minutes read</p>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "TEXT AREA",
};
