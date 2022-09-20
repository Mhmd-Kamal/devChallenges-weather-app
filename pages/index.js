import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import SideBar from '../components/SideBar';
import WeatherData from '../components/WeatherData';
import { weatherSelector } from '../utils/recoilAtoms';
import { getWeather } from '../utils/utils';

const Home = ({ weatherData }) => {
  const [weather, setWeather] = useState();

  // async function getWeather() {
  //   try {
  //     const res = await fetch(
  //       `http://api.weatherapi.com/v1/forecast.json?key=${process.env.APIKEY}&q=30.8396601,30.8662496&days=7`
  //     );
  //     const data = await res.json();
  //     setWeather(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log('error in fetching weather data!.', err);
  //   }
  // }

  // useEffect(() => {
  //   getWeather();
  // }, []);

  // const weatherData = useRecoilValue(weatherSelector);

  console.log(weatherData);

  return (
    <div className='flex flex-col md:flex-row items-stretch min-h-screen oldstyle-nums '>
      <SideBar />
      <WeatherData />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const weatherData = await getWeather();
  return {
    props: { weatherData },
  };
}
