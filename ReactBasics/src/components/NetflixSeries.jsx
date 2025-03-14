const NetflixSeries = () => {
  const name = 'Dragon Ball zzzzzzzzzzz';
  const rating = '6.9';
  const returnGenre = () => {
    const genre = 'Action';
    return genre;
  };
  let age = 19;
  let canWatch = () => {
    if (age >= 18) return 'Watch Now';
    if (age < 18) return 'Restricted Content';
  };
  // let canWatch = 'Not Available';
  // if (age > 18) canWatch = 'Watch Now';
  // if (age < 18) {
  //   return <p>Restricted Content</p>;
  // } else if (age >= 18) {
  //   return <p>Adult Content</p>;
  // }
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
      {/* <button> {age > 18 ? "Watch Now" : "Sorrryy"} </button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </>
  );
};

export default NetflixSeries;

export const Header = () => {
  return (
    <header>
      <h1>Netflix Series Header!</h1>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Munsif Khan</p>
    </footer>
  );
};
