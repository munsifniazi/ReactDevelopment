import seriesData from '../api/seriesData.json';

const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((curElem) =>{
          return (
            <li key={curElem.id}>
              <div>
                <img src={curElem.img_url} alt={curElem.name} height="40%" width="40%" />
              </div>
              <h1> name : {curElem.name} </h1>
              <p> Rating : {curElem.rating} </p>
              <p> Description : {curElem.description} </p>
              <p> Genre : {curElem.genre} </p>
              <p> Cast : {curElem.cast} </p>
              <a href={curElem.watch_url} target='_blank'>
                <button> Watch Now </button>
              </a>
            </li>
          )

        })
      }
    
    </ul>
  );
};

export default NetflixSeries;
