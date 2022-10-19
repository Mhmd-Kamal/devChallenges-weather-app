import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';
import { weatherAtom, weatherSelector } from '../utils/recoilAtoms';
import { fetchWeatherData } from '../utils/utils';

const Home = () => {
  const [weather, setWeather] = useRecoilState(weatherAtom);

  useEffect(() => {
    fetchWeatherData(setWeather);
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-stretch min-h-screen md:flex-row oldstyle-nums '>
      <SideBar />
      <WeatherData />
    </div>
  );
};

export default Home;
