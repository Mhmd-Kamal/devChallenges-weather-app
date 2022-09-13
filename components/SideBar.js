import React from 'react';
import LocationForm from './LocationForm';
import TodayPanel from './TodayPanel';

function SideBar({ weather }) {
  return (
    <div className=' bg-sideBG md:w-[375px] shrink-0'>
      {/* <LocationForm /> */}
      <TodayPanel weather={weather} />
    </div>
  );
}

export default SideBar;
