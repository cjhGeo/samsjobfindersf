import React, { useState } from "react";
import a1 from "./assets/images/a1.png";
import a2 from "./assets/images/a2.png";
import a3 from "./assets/images/a3.png";
import a4 from "./assets/images/a4.png";
import a5 from "./assets/images/a5.png";
import a6 from "./assets/images/a6.png";
import a7 from "./assets/images/a7.png";
import a8 from "./assets/images/a8.png";
import a9 from "./assets/images/a9.png";
import a10 from "./assets/images/a10.png";
import a11 from "./assets/images/a11.png";
import a12 from "./assets/images/a12.png";
import a13 from "./assets/images/a13.png";
import a14 from "./assets/images/a14.png";
import a15 from "./assets/images/a15.png";
import a16 from "./assets/images/a16.png";

import FormContainer from "./components/JobForm/FormContainer";
import Answer from "./components/Answer/Answer";
import './App.css';

const QUESTIONS = [
  {"id": "q1", "question": "What kind of work are you looking for?", "options": [{"id": "o1", "option": "Paid Work", "followUp": "q2"}, {"id": "o2", "option": "Unpaid Position", "followUp": "q12"}]},
  {"id": "q2", "question": "What are you using this app for?", "options": [{"id": "o3", "option": "Looking to enter the job market as a salaried employee", "followUp": "q3"}, {"id": "o4", "option": "Looking for work Experience and Career Opportunities", "followUp": "q7"}]},
  {"id": "q3", "question": "What work are you interested in?", "options": [{"id": "o5", "option": "Human Relations", "followUp": "q4"}, {"id": "o6", "option": "Food & Beverage", "followUp": "q4"}, {"id": "o7", "option": "Administrative Work", "followUp": "q5"}, {"id": "o8", "option": "Educational", "followUp": "q6"}]},
  {"id": "q4", "question": "Do you have any experience? (E.g. School Positions)", "options": [{"id": "o9", "option": "yes", "followUp": "q5"}, {"id": "o10", "option": "no", "followUp": "q5"}]},
  {"id": "q5", "question": "What are your strengths?", "options": [{"id": "o11", "option": "Leadership", "followUp": ["a1"]}, {"id": "o12", "option": "Communicative Skills", "followUp": ["a2"]}]},
  {"id": "q6", "question": "What experience do you have?", "options": [{"id": "o13", "option": "Specialising in certain subjects", "followUp": ["a6", "a7"]}, {"id": "o14", "option": "Schools", "followUp": ["a7"]}, {"id": "o15", "option": "Taught students before", "followUp": ["a7"]}, {"id": "o16", "option": "No experience", "followUp": ["a11"]}]},
  {"id": "q7", "question": "What are your strengths?", "options": [{"id": "o17", "option": "Administrative Skills", "followUp": "q8"}, {"id": "o18", "option": "Communicative Skills", "followUp": "q9"}, {"id": "o19", "option": "Hands-on Work", "followUp": "q11"}]},
  {"id": "q8", "question": "What are you interested in?", "options": [{"id": "o20", "option": "Pastoral Work", "followUp": ["a3"]}, {"id": "o21", "option": "Educational Work", "followUp": ["a4"]}]},
  {"id": "q9", "question": "What are you interested in?", "options": [{"id": "o22", "option": "Pastoral Work", "followUp": "q10"}, {"id": "o23", "option": "Teaching", "followUp": "q6"}]},
  {"id": "q10", "question": "What groups of people do you want to work with?", "options": [{"id": "o24", "option": "Elderly", "followUp": ["a8"]}, {"id": "o25", "option": "Young adults", "followUp": ["a5"]}, {"id": "o26", "option": "Schools", "followUp": ["a7"]}]},
  {"id": "q11", "question": "What groups of people do you enjoy working with?", "options": [{"id": "o27", "option": "Students", "followUp": "q6"}, {"id": "o28", "option": "Elderly", "followUp": ["a8"]}]},
  {"id": "q12", "question": "What are you using this app for?", "options": [{"id": "o29", "option": "Looking for charitable activities", "followUp": "q13"}, {"id": "o30", "option": "Looking to fill your portfolio", "followUp": "q13"}]},
  {"id": "q13", "question": "What kind of activites are you interested in?", "options": [{"id": "o31", "option": "Elderly Care", "followUp": "q14"}, {"id": "o32", "option": "Teaching activities", "followUp": "q15"}, {"id": "o33", "option": "Cultural Activities", "followUp": "q16"}, {"id": "o34", "option": "Environmental Work", "followUp": "q17"}]},
  {"id": "q14", "question": "What are your strengths?", "options": [{"id": "o35", "option": "Communicative Skills", "followUp": ["a8"]}, {"id": "o36", "option": "Administrative Skills", "followUp": ["a9"]}]},
  {"id": "q15", "question": "What are your strengths?", "options": [{"id": "o37", "option": "Artistic Subjects", "followUp": ["a10"]}, {"id": "o38", "option": "No Experience", "followUp": ["a11"]}, {"id": "o39", "option": "Academic Subjects", "followUp": ["a12"]}]},
  {"id": "q16", "question": "What are your strengths?", "options": [{"id": "o40", "option": "Communication Skills", "followUp": ["a13"]}, {"id": "o41", "option": "Administrative Skills", "followUp": ["a13"]}]},
  {"id": "q17", "question": "What are your strengths?", "options": [{"id": "o42", "option": "Fieldwork", "followUp": ["a14"]}, {"id": "o43", "option": "Research and Data Collection", "followUp": ["a15"]}, {"id": "o44", "option": "Administrative Skills", "followUp": ["a16"]}]}
];

const ANSWERS = {
  "a1": a1,
  "a2": a2,
  "a3": a3,
  "a4": a4,
  "a5": a5,
  "a6": a6,
  "a7": a7,
  "a8": a8,
  "a9": a9,
  "a10": a10,
  "a11": a11,
  "a12": a12,
  "a13": a13,
  "a14": a14,
  "a15": a15,
  "a16": a16
}

function App() {
  const [displayAns, setDisplayAns] = useState(false);
  const [ans, setAns] = useState([]);

  const formFinishedHandler = ans => {
    setAns(ans);
    setDisplayAns(true);
  }

  console.log(displayAns);

  if (displayAns) {

    return(
      <div className="App">
        <Answer answers={ANSWERS} answer={ans} />
      </div>
    );
  }

  return (
    <div className="App">
      <FormContainer questions={QUESTIONS} onFormFinished={formFinishedHandler}/>
    </div>
  );
}

export default App;
