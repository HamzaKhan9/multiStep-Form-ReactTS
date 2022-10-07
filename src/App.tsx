import React from "react";
import "./App.css";
import useMultistepForm from "./hooks/UseMultiStepForm";

const App = () => {
  const { steps, currentStep } = useMultistepForm([]);
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
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStep + 1}/{steps.length}
        </div>
      </form>
    </div>
  );
};

export default App;
