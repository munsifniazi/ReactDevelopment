import React, { useState } from 'react';

const users1 = [
  { id: 1, name: 'Practice User 1', age: 22 },
  { id: 2, name: 'Practice User 2', age: 22 },
  { id: 3, name: 'Practice User 3', age: 22 },
];

const PracHooks = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'UseState User 1', age: 22 },
    { id: 2, name: 'UseState User 2', age: 22 },
    { id: 3, name: 'UseState User 3', age: 22 },
  ]);
  return (
    <>
      <div>
        <h1>Hello Jee Practice wali File hon </h1>
        <h2>Using Map Method</h2>
        <ul>
          {users1.map((curElem, index) => {
            return (
              <li key={index}>
                name : {curElem.name} - age : {curElem.age}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Using UseState</h2>
        <ul>
          {users.map((curElem, index) => {
            return (
              <li key={index}>
                name : {curElem.name} - age : {curElem.age}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PracHooks;
