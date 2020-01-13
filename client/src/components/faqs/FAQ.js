import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div
        className="faq-question"
        style={{ fontFamily: "Comic Sans MS", fontWeight: "600" }}
      >
        {faq.question}
      </div>
      <div
        className="faq-answer "
        style={{ color: "red", fontFamily: "Comic Sans MS", fontWeight: "600" }}
      >
        {faq.answer}
      </div>
    </div>
  );
}

export default FAQ;
