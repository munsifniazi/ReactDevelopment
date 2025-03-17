import React from 'react';

const EventPrac = () => {
  const handleWelcomeUser = (name) => {
    console.log(`Welcome ${name}!`);
    alert(`Welcome ${name}`);
  };
  const handleHover = () => {
    console.log('Hovered on the button');
    alert('Hovered on the button');
  };
  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser('Munsif Niazi')}
        onMouseEnter={() => handleHover()}
      />
    </>
  );
};

export default EventPrac;

const WelcomeUser = (props) => {
  const handleGreetings = () => {
    alert('Salaam Bro');
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <button onMouseEnter={props.onMouseEnter}>Hello Jee</button>
      <button onClick={handleGreetings}> Salaam Bro </button>
    </>
  );
};
