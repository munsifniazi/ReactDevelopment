import React from 'react';

const Profile = () => {
  return (
    <>
      <ProfileCard
        name={'Munsif Khan'}
        age={22}
        greetings={
          <div>
            <strong>Heyy Munsif Khan, Have a Great Day...</strong>
          </div>
        }
      >
        <p>Hobbies : Aisa koi khas toh ni hai wese loll.</p>
        <button>Contact </button>
      </ProfileCard>
      <ProfileCard
        name={'Munsif Niazi'}
        age={22}
        greetings={
          <div>
            <strong>Heyy Munsif Mere Bhaii, Have a Great Day...</strong>
          </div>
        }
      >
        <p>Hobbies : Aisa koi khas toh ni hai wese loll.</p>
        <button>Contact </button>
      </ProfileCard>
    </>
  );
};

export default Profile;

function ProfileCard({ name, age, greetings }) {
  // const { name, age, greetings} = props;
  return (
    <>
      <h1>Name : {name} </h1>
      <p>Age : {age} </p>
      <p>Greetings : {greetings} </p>
    </>
  );
}
