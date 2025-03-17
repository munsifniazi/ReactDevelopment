import React from 'react';

const users = [
  { id: 1, name: 'Munsif Khan', age: 28 },
  { id: 2, name: 'Hadi Khan', age: 26 },
  { id: 3, name: 'Toufeeq Khan', age: 29 },
  { id: 4, name: 'Talha Khan', age: 27 },
  { id: 5, name: 'Rocky bhai ', age: 25 },
];

const DerivedState = () => {
  return (
    <div className='main-div'>
      <h1>Users List using Normal Method</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} years old.
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DerivedState;

import React, { useState } from 'react';

const DerivedState = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Munsif Khan', age: 28 },
    { id: 2, name: 'Hadi Khan', age: 26 },
    { id: 3, name: 'Toufeeq Khan', age: 29 },
    { id: 4, name: 'Talha Khan', age: 27 },
    { id: 5, name: 'Rocky bhai ', age: 25 },
  ]);
  return (
    <div className='main-div'>
      <h1>UseState ke through Users add krne hain.</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={curElem.id}>
              {curElem.name} - {curElem.age}yrs old.
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DerivedState;
