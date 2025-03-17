import React from 'react';
import EventsHandling from './components/EventsHandling';
import EventProps from './EventProps';
import EventPrac from './EventPrac';
import { EventPropagation } from './EventPropagation';
import State from './components/hooks/State';
// import NetflixSeries from './components/NetflixSeries';
// import Profile from './components/Profile';
// import './components/Netflix.css';
import './components/EV.css';
import DerivedState from './components/hooks/DerivedState';

const App = () => {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'> List of Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <Profile />   */}
      {/* <EventsHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPrac /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      <DerivedState/>
    </section>
  );
};

export default App;
