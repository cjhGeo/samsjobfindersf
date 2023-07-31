import React, { useState } from "react";

import AnswerList from "./AnswerList";
import "./Answer.css";

function Answer(props) {
  const [acceptedInterview, setAcceptedInterview] = useState(false);
  const[acceptedAns, setAcceptedAns] = useState();
  
  const acceptedInterviewHandler = acceptedAns => {
    setAcceptedAns(acceptedAns);
    setAcceptedInterview(true);
  }

  const imageToPrint = source => {
    return "<html><head><scri"+"pt>function step1(){\n" +
            "setTimeout('step2()', 10);}\n" +
            "function step2(){window.print();window.close()}\n" +
            "</scri" + "pt></head><body onload='step1()'>\n" +
            "<img src='" + source + "' /></body></html>";
  }
    
    const printPamphletHandler = () => {
      var Pagelink = "interview";
        var pwa = window.open(Pagelink, "_new");
        pwa.document.open();
        pwa.document.write(imageToPrint(props.answers[acceptedAns]));
        pwa.document.close();
    }

  if (acceptedInterview) {
    return (
      <div className="answer">
        <div className="container">
          <img className="answer__image" src={props.answers[acceptedAns]}></img>
          <button className="answer__btn" onClick={printPamphletHandler}>Print</button>
        </div>
      </div>
    );
  }

  return (
    <div className="answer">
      <AnswerList answers={props.answers} ansOptions={props.answer} onAcceptedInterview={acceptedInterviewHandler} />
    </div>
  );
}

export default Answer;