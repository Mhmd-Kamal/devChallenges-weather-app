import { useRecoilState, useRecoilValue } from 'recoil';
import { tempUnitAtom, weatherAtom } from '../utils/recoilAtoms';
import DayCard from './DayCard';
import Highlights from './Highlights';

function WeatherData() {
  const { forecast } = useRecoilValue(weatherAtom);
  const [tempUnit, setTempUnit] = useRecoilState(tempUnitAtom);

  const forecastData = forecast.data.slice(1, 6);

  return (
    <div className='flex flex-col items-center w-full pb-20 bg-mainBG xl:px-44 md:pt-11'>
      <div className='self-end hidden gap-3 pb-16 text-lg font-bold md:flex'>
        <p
          onClick={() => setTempUnit('c')}
          style={
            tempUnit === 'c'
              ? { color: '#110E3C', backgroundColor: '#E7E7EB' }
              : {
                  color: '#E7E7EB',
                  backgroundColor: '#585676',
                }
          }
          className='flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-full cursor-pointer '
        >
          &#186;C
        </p>
        <p
          onClick={() => setTempUnit('f')}
          style={
            tempUnit === 'f'
              ? { color: '#110E3C', backgroundColor: '#E7E7EB' }
              : {
                  color: '#E7E7EB',
                  backgroundColor: '#585676',
                }
          }
          className='flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-full cursor-pointer '
        >
          &#186;F
        </p>
      </div>

      <div
        id='five-days'
        className='flex flex-wrap py-[52px] px-[54px] gap-[26px] xl:justify-between xl:p-0 xl:w-full'
      >
        {forecastData.map((day, index) => (
          <DayCard day={day} key={index} />
        ))}
      </div>

      <Highlights />
    </div>
  );
}

export default WeatherData;
