import React from 'react';

const Profile = () => {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name='Munsif Khan'
        age={30}
        greetings={
          <div>
            <strong>Heyy Munsif Khan, Have a Great Day...</strong>
          </div>
        }
      >
        <p>Hobbies : Cricket , Football and Coding.</p>
        <button>Contack </button>
      </ProfileCard>
      <ProfileCard
        name='Ghost Dev'
        age={29}
        greetings={
          <div>
            <strong>Heyy Ghost Dev, Have a Great Day...</strong>
          </div>
        }
      >
        <p>Hobbies : Reading, Writing and Coding.</p>
        <button>Contack </button>
      </ProfileCard>
    </>
  );
};

export default Profile;
