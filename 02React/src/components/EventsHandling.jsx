import React from 'react';
import './EV.css';

export const EventsHandling = () => {
  //   function handleButtonClick() {
  //     alert('Button clicked');
  //     console.log('Button clicked');
  //   }
  const handleButtonClick = (e) => {
    console.log(e);
    alert('Button clicked through Fat Arrow Function');
    console.log('Button clicked');
  };
  const handleWelcomeUser = (name) => {
    alert(`Welcome, ${name}`);
    console.log(`Welcome, ${name}`);
  };
  return (
    <>
      <button onClick={handleButtonClick}>click me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>
        Dabao Mujhyy
      </button>
      <br />
      <button onClick={() => handleWelcomeUser('Munsif Khan')}>Khan</button>
      <button onClick={() => handleWelcomeUser('Munsif Niazi')}>Niazi</button>
    </>
  );
};

export default EventsHandling;
