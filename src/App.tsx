import React, { FormEvent } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import "./App.css";
import useMultistepForm from "./hooks/useMultistepForm";
import UserForm from "./UserForm";

const App = () => {
  const { steps, currentStep, step, back, next, isFirst, isLast } =
    useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  function Submit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "3px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={Submit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStep + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirst && (
            <button type="button" onClick={back}>
              back
            </button>
          )}
          <button>{isLast ? "Finish" : "next"}</button>
        </div>
      </form>
    </div>
  );
};

export default App;
