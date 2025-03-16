import React from 'react';
import NetflixSeries from './components/NetflixSeries';
// import Profile from './components/Profile';
import './components/Netflix.css';

const App = () => {
  return (
    <section className='container'>
      <h1 className='card-heading'> List of Netflix Series</h1>
      <NetflixSeries />
      {/* <Profile />   */}
    </section>
  );
};

export default App;
