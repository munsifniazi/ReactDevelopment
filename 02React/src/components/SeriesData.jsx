import React from 'react';

export const SeriesData = ({data}) => {
  const { id, name, img_url, rating, description, cast, genre, watch_url } = data;

  //   console.log(props);
  return (
    <>
      <li >
        <div>
          <img
            src={img_url}
            alt='Yeh kyn ni chal raha'
            width='40%'
            height='40%'
          />
        </div>
        <h1>Name : {name}</h1>
        <p>Rating : {rating}</p>
        <p>Description : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast} </p>
        <a href={watch_url} target='_blank'>
          <button>Watch Now</button>
        </a>
      </li>
    </>
  );
};
