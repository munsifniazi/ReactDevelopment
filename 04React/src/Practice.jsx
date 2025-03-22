import { useState } from "react";
import "./App.css";

export const Practice = () => {
  const [value, setValue] = useState(0);
  const handleAddValue = () => {
    if (value >= 20) {
      console.log("Counter reached maximum value of 20");
      return;
    }
    setValue(value + 1);
    console.log("Value increased: ", value);
  };
  const handleSubtractValue = () => {
    if (value <= 0) {
      console.log("Counter reached minimum value of 0");
      return;
    }
    setValue(value - 1);
    console.log("Value decreased: ", value);
  };
  const handleMultiplyValue = () => {
    setValue(value * 2);
    console.log("Value doubled: ", value);
  };
  const handleDivideValue = () => {
    if (value === 0) {
      console.log("Cannot divide by zero");
      return;
    }
    setValue(Math.floor(value / 2));
    console.log("Value halved: ", value);
  };
  return (
    <>
      <h1>This is a Pratice Set.</h1>
      <p>Ohhh Ballayy Ballayy Yeh chal gya.</p>
      <p>Value : {value} </p>
      <button onClick={handleAddValue}>Add </button>
      <button onClick={handleSubtractValue}>Subtract</button>
      <button onClick={handleMultiplyValue}>Multiply</button>
      <button onClick={handleDivideValue}>Divide</button>
    </>
  );
};
