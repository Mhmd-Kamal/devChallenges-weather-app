import React from 'react';

function DayCard() {
  return (
    <div className='w-[120px] h-[177px] bg-sideBG p-[18px] flex flex-col items-center justify-between'>
      <p className='text-paleGreyFont'>Tomorrow</p>

      <img className='w-14 pb-3' src='/sleet.png' alt='weather status' />

      <div className='flex justify-between w-full'>
        <p className='text-paleGreyFont'>16&#186;C</p>
        <p className='text-greyFont'>11&#186;C</p>
      </div>
    </div>
  );
}

export default DayCard;
