import {useRecoilValue} from "recoil";

import {formatDate} from '../utils/utils';
import {tempUnitAtom} from "../utils/recoilAtoms";

function DayCard({day, index}) {
    const tempUnit = useRecoilValue(tempUnitAtom);
    const date = index === 0 ? 'Tomorrow' : formatDate(day.valid_date);

    return (
        <div className='w-[120px] h-[177px] bg-sideBG p-[18px] flex flex-col items-center justify-between'>
            <p className='text-sm text-paleGreyFont'>{date}</p>

            <img
                className='pb-3 w-14'
                src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                alt='weather status'
            />

            <div className='flex justify-between w-full'>
                <p className='text-paleGreyFont'>{Math.round(tempUnit === 'c' ? day.max_temp : (day.max_temp * 9 / 5) + 32)}&#186;{tempUnit==='c'?'C':'F'}</p>
                <p className='text-greyFont'>{Math.round(tempUnit === 'c' ? day.min_temp : (day.min_temp * 9 / 5) + 32)}&#186;{tempUnit==='c'?'C':'F'}</p>
            </div>
        </div>
    );
}

export default DayCard;
