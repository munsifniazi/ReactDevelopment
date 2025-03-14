import React from 'react';

const Pratice = () => {
  const students = [1];
  return (
    <>
      <h1>Hello Jee , LO MAIN AGYA WITH INTERVIEW QUESTION</h1>
      {/* <p> {students.length === 0 && 'No Studens Found.'}</p> */}
      <p> {!students.length && 'No Studens Found.'}</p>
      <p>Number of Students : {students.length} </p>
    </>
  );
};

export default Pratice;
