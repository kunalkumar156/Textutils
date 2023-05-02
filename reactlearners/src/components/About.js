import React, { useState } from "react";

export default function About() {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable light mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    }
  };
  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              Textutils gives you a way to analyze your text quickly and
              effeciently. Be it word count and character count.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              Textutils is a free character counter tool that procides instant
              character count & and word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatiable
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              This is counter software works in any web browsers such as Chrome,
              Firefox, Internet Explorer. Safari, Opera. It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
