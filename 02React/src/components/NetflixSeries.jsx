import React from 'react';
import seriesData from '../api/seriesData.json';
import { SeriesData } from './SeriesData';
const NetflixSeries = () => {
  return (
    <>
      <ul>
        {seriesData.map((curElem) => {
          return  <SeriesData key={curElem.id} data = {curElem} />
    
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
