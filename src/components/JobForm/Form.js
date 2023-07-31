import React, { useState } from "react";

import "./Form.css";

function Form(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const optionSelectHandler = event => {
    setSelectedOption(event.target.value);
  }

  const nextBtnClickHandler = event => {
    event.preventDefault();

    if (selectedOption === "") {
      alert("Please Select an Option");
    } else {
      const nextQn = props.question[0].options.filter((option) => {
        return option.id == selectedOption
      });
      props.onNextBtnClick(nextQn[0].followUp);
    }

    setSelectedOption("");
  }

  const backBtnClickHandler = event =>{
    event.preventDefault();

    props.onBackBtnClick();
  }

  return(
    <form className="form">
      <br></br>
      <div>
        <h1 className="form__question">{props.question[0].question}</h1>
        <br></br>
        {props.question[0].options.map((option) => (
          <>
            <label className="form__option" htmlFor={option.option}>
              <input id={option.option} type="radio" name="Qn Options" value={option.id} onChange={optionSelectHandler} checked={selectedOption == option.id}></input>
              {option.option}
            </label>
            <br></br>
          </>
        ))}
      </div>

      <div className="form__btns">
        {props.question[0].id === "q1" || <button className="form__back-btn" onClick={backBtnClickHandler}>Back</button>}
        <button className="form__next-btn" onClick={nextBtnClickHandler}>Next</button>
      </div>
      <br></br>
    </form>
  );
}

export default Form;