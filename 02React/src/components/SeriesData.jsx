import React from 'react';

export const SeriesData = ({ data }) => {
  const {  name, img_url, rating, description, cast, genre, watch_url } =
    data;

  //   console.log(props);
  return (
    <>
      <li>
        <div>
          <img
            src={img_url}
            alt='Yeh kyn ni chal raha'
            width='40%'
            height='40%'
          />
        </div>
        <div className='card-content'>
          <h1>Name : {name}</h1>
          <p > <span className= {rating >=8.5 ? "superhit" : "average" } > Rating : {rating} </span></p>
          <p style={{ margin: '.2rem 0' }}>Description : {description}</p>
          <p>Genre : {genre.join(', ')}</p>
          <p>Cast : {cast.join(', ')} </p>
          <a href={watch_url} target='_blank'>
            <button style={{
              padding: "10px"
            }}>Watch Now</button>
          </a>
        </div>
      </li>
    </>
  );
};
