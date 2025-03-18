import React, { useState } from 'react';

const LiftingState = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <InputComp inputValue={inputValue}  setInputValue={setInputValue} />
      <DisplayComp inputValue={inputValue} />
    </>
  );
};

export default LiftingState;

const InputComp = ({inputValue, setInputValue}) => {
  return (
    <input
      type='text'
      value={inputValue}
      placeholder='Please enter your input value'
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    ></input>
  );
};

const DisplayComp = ({inputValue}) => {
  return (
    
      <p>Your Input: {inputValue} </p>
  );
};
