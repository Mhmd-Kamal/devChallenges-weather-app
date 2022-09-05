import Head from 'next/head';
import { useEffect, useState } from 'react';

import SideBar from '../components/SideBar';

const Home = () => {
  const [weather, setWeather] = useState();

  async function getWeather() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.APIKEY}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.log('error in fetching weather data!.', err);
    }
  }

  useEffect(() => {
    getWeather();
  });

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <SideBar weather={weather} />
    </div>
  );
};

export default Home;
