import { useRecoilValue } from 'recoil';
import { weatherAtom } from '../utils/recoilAtoms';
import { getWindDirection } from '../utils/utils';

export default function Highlights() {
  const { current } = useRecoilValue(weatherAtom);

  return (
    <div className='p-5 xl:p-0 xl:pt-20'>
      <h2 className='text-2xl pb-8 text-paleGreyFont font-bold'>
        Today's Highlights
      </h2>
      <div className='text-paleGreyFont font-medium flex justify-center flex-wrap gap-8  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-14'>
        <div
          id='wind-status'
          className='basis-[328px] h-[204px] p-5 bg-sideBG flex flex-col items-center '
        >
          <h3 className=''>Wind status</h3>
          <p className='font-bold text-[64px]'>
            {Math.round(current.data[0].wind_spd)}
            <span className='text-4xl pl-2 font-medium'>mph</span>
          </p>
          <div className='flex items-center gap-4 pt-2'>
            <div className='p-1 bg-white/30  rounded-full'>
              <svg
                style={{ transform: `rotate(${current.data[0].wind_dir}deg)` }}
                className='w-5 h-5 text-paleGreyFont'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z'
                />
              </svg>
            </div>
            <p>{current.data[0].wind_cdir}</p>
          </div>
        </div>

        <div
          id='humidity'
          className='basis-[328px] h-[204px] p-5 bg-sideBG flex flex-col items-center '
        >
          <h3 className=''>Humidity</h3>
          <p className='font-bold text-[64px]'>
            {Math.round(current.data[0].rh)}
            <span className='text-4xl font-medium'>%</span>
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
                style={{ width: `${current.data[0].rh}%` }}
              ></div>
            </div>
            <div className='flex w-full text-xs text-greyFont justify-end pt-1'>
              <p>%</p>
            </div>
          </div>
        </div>

        <div
          id='visibility'
          className='basis-[328px] h-[159px] p-5 bg-sideBG flex flex-col items-center '
        >
          <h3 className=''>Visibility</h3>
          <p className='font-bold text-[64px]'>
            {Math.round(current.data[0].vis / 1.60934)}{' '}
            <span className='text-4xl font-medium'>miles</span>
          </p>
        </div>

        <div
          id='air-pressure'
          className='basis-[328px] h-[159px] p-5 bg-sideBG flex flex-col items-center '
        >
          <h3 className=''>Air Pressure</h3>
          <p className='font-bold text-[64px]'>
            {Math.round(current.data[0].pres)}
            <span className='text-4xl pl-2 font-medium'>mb</span>
          </p>
        </div>
      </div>
    </div>
  );
}
