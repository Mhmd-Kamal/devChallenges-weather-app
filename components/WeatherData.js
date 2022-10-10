import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { weatherAtom } from '../utils/recoilAtoms';
import DayCard from './DayCard';
import Highlights from './Highlights';

function WeatherData() {
  const { forecast } = useRecoilValue(weatherAtom);
  cosnt;

  return (
    <div className='bg-mainBG flex flex-col pb-20 items-center xl:px-44 md:pt-11 w-full'>
      <div className=' hidden text-lg font-bold  gap-3 self-end md:flex pb-16'>
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
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>

      <Highlights />
    </div>
  );
}

export default WeatherData;
