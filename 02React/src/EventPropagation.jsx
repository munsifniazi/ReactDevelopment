import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
        
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};





// import React from 'react';
// import './EV.css';

// const EventPropagation = () => {
//   const handleGrandParent = () => {
//     console.log('Grand Parent Clicked');
//   };
//   const handleParentClick = () => {
//     console.log('Parent Clicked');
//   };

//   const handleChildClick = (e) => {
//     console.log('Child Clicked');
//     console.log(e);
//   };

//   return (
//     <>
//       <h1>Hiiiiiiii</h1>
//       <section className='main-div'>
//         <div className='g-div' onClick={handleGrandParent}></div>
//         <div className='p-div' onClick={handleParentClick}></div>
//         <button className='c-div' onClick={handleChildClick}>
//           Child Dev
//         </button>
//       </section>
//     </>
//   );
// };

// export default EventPropagation;
