import React from 'react';
import LocationForm from './LocationForm';
import TodayPanel from './TodayPanel';

function SideBar({ weather }) {
  return (
    <div className='w-full bg-sideBG'>
      {/* <LocationForm /> */}
      <TodayPanel weather={weather} />
    </div>
  );
}

export default SideBar;
