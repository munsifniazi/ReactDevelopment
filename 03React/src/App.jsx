import React from "react";
import Intro from "./Intro";
import { Hehe } from "./Hehe";

const App = () => {
  return (
    <div>
      <h1>Code With Munsif Khan</h1>
      <p>Welcome to the React Tutorial.</p>
      <p>This is a simple React application.</p>
      <p>Developed by Munsif Khan</p>
      <p>React is a JavaScript library for building user interfaces.</p>
      <p>React is used to build single page applications.</p>
      <p>React allows us to create reusable UI components.</p>
      <p>React is created by Facebook.</p>
      <p>React is used by Netflix, BBC, Instagram, and many more...</p>
      <Intro />
      <Hehe />
      <p>This is the end of the tutorial.</p>
      <p>Thank You for Watching.</p>
    </div>
  );
};

export default App;
