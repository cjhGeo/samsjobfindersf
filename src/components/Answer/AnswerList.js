import React from "react";

import AnswerOption from "./AnswerOption";
import "./AnswerList.css";

function AnswerList(props) {
  const acceptedInterviewHandler = acceptedAns => {
    props.onAcceptedInterview(acceptedAns);
  }

  return (
    <div className="answer-list">
      {props.ansOptions.map(ansOption => <AnswerOption answers={props.answers} ansOption={ansOption} onAcceptedInterview={acceptedInterviewHandler} />)}
    </div>
  );
}

export default AnswerList;