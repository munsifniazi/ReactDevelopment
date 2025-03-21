import React from 'react';
import seriesData from '../api/seriesData.json';
import { SeriesData } from './SeriesData';
const NetflixSeries = () => {
  return (
    <>
      <ul className= "grid grid-three--cols">
        {seriesData.map((curElem) => {
          return  <SeriesData key={curElem.id} data = {curElem} />
    
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
