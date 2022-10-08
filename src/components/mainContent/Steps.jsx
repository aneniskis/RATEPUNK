import React from "react";
import { steps } from "../../constant/constant";
import "./steps.scss";

const Steps = () => {
  return (
    <div className="stepContent">
      {steps.map((step, i) => (
        <div key={i} className="StepContainer">
          <div className="logoContainer">
            <img src={step.image} alt="logo" />
          </div>
          <div className="content">
            <h4>{step.step}</h4>
            <h1>{step.title}</h1>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
