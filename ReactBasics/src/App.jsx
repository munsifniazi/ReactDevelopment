import React from 'react';

export const App = () => {
  return (
    <>
      <div>
        <img src='image.jpg' alt='The Hunting Party' />
      </div>
      <h1>Name : The Hunting Party</h1>
      <p>Rating : 9.6</p>
      <p>
        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique consequuntur nobis optio. Eius fugit delectus officiis sint
        quod sit modi ut voluptatum.
      </p>
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  const name = 'Dragon Ball zzzzzzzzzzz';
  const rating = '6.9';
  const returnGenre = () => {
    const genre = 'Action';
    return genre;
  };
  return (
    <>
      <div>
        <img src='dbz.jpg' alt='Dragon Ball Z' width='20%' height='20%' />
      </div>
      <h1>Name : {name}</h1>
      <p>Rating : {rating * 2} </p>
      <p>Genre : {returnGenre()}</p>
      <p>
        Description : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique consequuntur nobis optio. Eius fugit delectus officiis sint
        quod sit modi ut voluptatum.
      </p>
    </>
  );
};
