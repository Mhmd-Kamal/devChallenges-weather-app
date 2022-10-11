import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';
import { weatherAtom, weatherSelector } from '../utils/recoilAtoms';
import { fetchWeatherData } from '../utils/utils';

const Home = ({ weatherData }) => {
  const [weather, setWeather] = useRecoilState(weatherAtom);

  useEffect(() => {
    fetchWeatherData(setWeather);
  }, []);

  console.log(weather);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className='flex flex-col md:flex-row items-stretch min-h-screen oldstyle-nums '>
      <SideBar />
      <WeatherData />
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const weatherData = await getWeather();
//   return {
//     props: { weatherData },
//   };
// }
