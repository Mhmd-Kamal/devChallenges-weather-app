import React from 'react';

function TodayPanel({ weather }) {
  return (
    <div className='relative flex flex-col items-center w-full px-3 py-5 bg-no-repeat text-greyFont overflow-clip'>
      <img
        className='absolute scale-[165%] top-32 opacity-10'
        src='/Cloud-background.png'
        alt=''
      />

      <div className='flex justify-between w-full'>
        <button className='text-paleGreyFont cursor-pointer bg-[#6E707A] px-5'>
          Search for places
        </button>
        <button className='bg-[#6E707A] rounded-full p-2 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6'
          >
            <path
              className='stroke-paleGreyFont'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              className='stroke-paleGreyFont'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            />
          </svg>
        </button>
      </div>
      <img
        className='pt-20 w-36'
        src='/shower.png'
        alt='weather status image'
      />

      <p className='text-[144px] text-paleGreyFont oldstyle-nums font-semibold'>
        15<span className='text-6xl font-medium text-greyFont'>&deg;C</span>
      </p>

      <p className='pt-6 text-4xl font-semibold'>Shower</p>

      <div className='flex gap-4 pt-12 oldstyle-nums'>
        <p>Today</p>
        <p>&#8226;</p>
        <p>Fri, 5 Jun</p>
      </div>

      <div className='flex items-center gap-2 pt-8 pb-24 text-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          class='w-5 h-5'
        >
          <path
            fill-rule='evenodd'
            d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
            clip-rule='evenodd'
          />
        </svg>
        <p className='text-lg font-semibold'>Helsinki</p>
      </div>
    </div>
  );
}

export default TodayPanel;
