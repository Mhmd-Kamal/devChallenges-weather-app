import { formatDate } from '../utils/utils';

function DayCard({ day }) {
  const date = formatDate(day.valid_date);

  return (
    <div className='w-[120px] h-[177px] bg-sideBG p-[18px] flex flex-col items-center justify-between'>
      <p className='text-paleGreyFont text-sm'>{date}</p>

      <img className='w-14 pb-3' src='/sleet.png' alt='weather status' />

      <div className='flex justify-between w-full'>
        <p className='text-paleGreyFont'>{Math.round(day.max_temp)}&#186;C</p>
        <p className='text-greyFont'>{Math.round(day.min_temp)}&#186;C</p>
      </div>
    </div>
  );
}

export default DayCard;
