import { useState } from 'react';
import DayCard from './DayCard';

function WeatherData() {
  return (
    <div className='bg-mainBG flex flex-col pb-20 items-center xl:px-44 md:pt-11'>
      <div className=' hidden text-lg font-bold  gap-3 self-end md:flex pb-16'>
        <p className='flex justify-center items-center w-10 h-10 rounded-full bg-paleGreyFont text-[#110E3C]'>
          &#186;C
        </p>
        <p className='flex justify-center items-center w-10 h-10 rounded-full bg-[#585676] text-paleGreyFont'>
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

      <div className='p-5 xl:p-0 xl:pt-20'>
        <h2 className='text-2xl pb-8 text-paleGreyFont font-bold'>
          Today's Highlights
        </h2>
        <div className='text-paleGreyFont font-medium flex justify-center flex-wrap gap-8 xl:w-full xl:justify-between xl:gap-14'>
          <div
            id='wind-status'
            className='w-[328px] h-[204px] p-5 bg-sideBG flex flex-col items-center '
          >
            <h3 className=''>Wind status</h3>
            <p className='font-bold text-[64px]'>
              7<span className='text-4xl font-medium'>mph</span>
            </p>
            <div className='flex items-center gap-4 pt-2'>
              <div className='p-1 bg-white/30  rounded-full'>
                <svg className='w-5 h-5 text-paleGreyFont ' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z'
                  />
                </svg>
              </div>
              <p>WSW</p>
            </div>
          </div>

          <div
            id='humidity'
            className='w-[328px] h-[204px] p-5 bg-sideBG flex flex-col items-center '
          >
            <h3 className=''>Humidity</h3>
            <p className='font-bold text-[64px]'>
              84<span className='text-4xl font-medium'>%</span>
            </p>
            <div>
              <div className='flex text-xs text-greyFont justify-between px-[2px]'>
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div
                id='progress-bar'
                className='w-[230px] bg-buttonBG h-2 rounded-full'
              >
                <div
                  className='bg-[#FFEC65] h-2 rounded-full'
                  style={{ width: `${30}%` }}
                ></div>
              </div>
              <div className='flex w-full text-xs text-greyFont justify-end pt-1'>
                <p>%</p>
              </div>
            </div>
          </div>

          <div
            id='visibility'
            className='w-[328px] h-[159px] p-5 bg-sideBG flex flex-col items-center '
          >
            <h3 className=''>Visibility</h3>
            <p className='font-bold text-[64px]'>
              6.4 <span className='text-4xl font-medium'>miles</span>
            </p>
          </div>

          <div
            id='air-pressure'
            className='w-[328px] h-[159px] p-5 bg-sideBG flex flex-col items-center '
          >
            <h3 className=''>Air Pressure</h3>
            <p className='font-bold text-[64px]'>
              998 <span className='text-4xl font-medium'>mb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
