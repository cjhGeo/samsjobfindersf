import React from "react";

import "./AnswerOption.css";

function AnswerOption(props) {

  const interviewAcceptHandler = event => {
    event.preventDefault();

    props.onAcceptedInterview(props.ansOption);
  }

  return (
    <div className="answer-option">
      <img className="answer-option__image" src={props.answers[props.ansOption]}></img>
      <button className="answer-option__btn" onClick={interviewAcceptHandler}>Accept ✔</button>
    </div>
  );
}

export default AnswerOption;