import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const handleAddValue = () => {
    if (value >= 20) {
      console.log("Counter reached maximum value of 10");
      return;
    }
    setValue((value) => value + 1);
    console.log("Value increased: ", value);
  };
  const handleRemoveValue = () => {
    if (value <= 0) {
      console.log("Counter reached minimum value of 0");
      return;
    }
    setValue((value) => value - 1);
    console.log("Value decreased: ", value);
  };
  return (
    <>
      <h1>Munsif aur Code</h1>
      <h1>Counter Project</h1>
      <h3>Current Value : {value} </h3>
      <button onClick={handleAddValue}>Add</button>
      <br />
      <button onClick={handleRemoveValue}>Remove</button>
    </>
  );
}

export default App;
