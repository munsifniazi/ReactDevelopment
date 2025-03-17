import React from 'react';

const EventProps = () => {
  const handleWelcomeUser = (user) => {
    console.log('Welcome, Munsif Khan!');
    alert(`Heyy, ${user}`);
  };
  const handleHover = () => {
    console.log('Hovering over the button');
    alert('You are hovering over the button');
  };
  return (
    // }
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser('Munsif Khan')}
        onMouseEnter={handleHover}
      ></WelcomeUser>
    </>
  );
};

export default EventProps;


const WelcomeUser = (props) => {
    const handleGreeting = () => {
        alert('Hello from WelcomeUser component');
        props.onClick();
    }
    return (
        <>

       
        <button onClick={props.onClick }>Click Me</button>
        <button onMouseEnter={props.onMouseEnter} >Click Me</button>
        <button onClick={handleGreeting} >Click Me</button>
        </>
    )
}
