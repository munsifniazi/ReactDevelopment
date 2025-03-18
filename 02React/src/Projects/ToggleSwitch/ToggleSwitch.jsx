import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isOn, setIson] = useState(false);
  const handleToggleSwitch = () => {
    setIson(!isOn);
  };
  const checkIson = isOn ? "on" : "off"
  const toggleBGColor = {backgroundColor : isOn ? "#4caf50" : "" }
  return (
    <>
      <div className='toggle-switch' onClick={handleToggleSwitch } style={toggleBGColor}>
        <div className={`switch ${checkIson}`}>
          <span className='switch-state'> { checkIson} </span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
