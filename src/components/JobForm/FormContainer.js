import React, { useState } from "react";

import Form from "./Form";
import "./FormContainer.css";

function FormContainer(props) {
  const [questionIndex, setQuestionIndex] = useState(0)

  const [questionRoute, setQuestionRoute] = useState(["q1"]);;

  const question = props.questions.filter((question) => {
    return question.id === questionRoute[questionIndex];
  });
  
  const nextQuestion = nextQn => {
    if (nextQn[0] == "q") {
      setQuestionRoute((prevState) => {
        return [...prevState, nextQn]
      });

      setQuestionIndex((prevState) => {
        return prevState += 1;
      });
    } else {
      props.onFormFinished(nextQn);
    }
  }

  const backQuestion = () => {
    setQuestionIndex((prevState) => {
      return prevState -= 1;
    });
    
    setQuestionRoute((prevState) => {
      return prevState.slice(0, -1);
    });
  }

  return(
    <div className="form-container">
      <Form question={question} onNextBtnClick={nextQuestion} onBackBtnClick={backQuestion} />
    </div>
  );
}

export default FormContainer;