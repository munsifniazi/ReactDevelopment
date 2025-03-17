import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <h1>State Example</h1>
      <h2> {count} </h2>
      <button onClick={handleButtonClick}>Increase kro</button>
    </>
  );
};

export default State;

// import React, { useState } from 'react';
// const State = () => {
//   //   let value = 0;
//   //   const handleButtonClick = () => {
//   //     value++;
//   //     console.log('New State: ', value);
//   //   };
//   // console.log(useState());
//   let [count, setCount] = useState(0);
//   console.log(count);
//   const handleButtonClick = () => {
//     setCount(() => count + 1);
//   };
//   return (
//     <>
//       <section className='main-div'>
//         <h1>{count}</h1>
//         <button onClick={handleButtonClick}>Increment</button>
//       </section>
//     </>
//   );
// };

// export default State;
