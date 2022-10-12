import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { weatherAtom } from '../utils/recoilAtoms';
import DayCard from './DayCard';
import Highlights from './Highlights';

function WeatherData() {
  const { forecast } = useRecoilValue(weatherAtom);
  const forecastData = forecast.data.slice(1, 6);

  return (
    <div className='flex flex-col items-center w-full pb-20 bg-mainBG xl:px-44 md:pt-11'>
      <div className='self-end hidden gap-3 pb-16 text-lg font-bold  md:flex'>
        <p className='flex cursor-pointer justify-center items-center w-10 h-10 rounded-full bg-paleGreyFont text-[#110E3C]'>
          &#186;C
        </p>
        <p className='flex cursor-pointer justify-center items-center w-10 h-10 rounded-full bg-[#585676] text-paleGreyFont'>
          &#186;F
        </p>
      </div>

      <div
        id='five-days'
        className='flex flex-wrap py-[52px] px-[54px] gap-[26px] xl:justify-between xl:p-0 xl:w-full'
      >
        {forecastData.map((day, index) => (
          <DayCard day={day} index={index} />
        ))}
      </div>

      <Highlights />
    </div>
  );
}

export default WeatherData;
