export async function getWeather(lat = 51.5085, lon = -0.1257) {
  const forecasrResponse = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.APIKEY}&lat=${lat}&lon=${lon}`
  );
  // if (!res.status) {
  //   throw new Error('Data fetching error.');
  // }
  const forecast = await forecasrResponse.json();

  const currentResponse = await fetch(
    `https://api.weatherbit.io/v2.0/current?key=${process.env.APIKEY}&lat=${lat}&lon=${lon}`
  );

  const current = await currentResponse.json();
  return { current, forecast };
}

export function formatDate(dateUTC) {
  return new Date(dateUTC).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

export async function fetchWeatherData(setWeather) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const weather = await getWeather(
          position.coords.latitude,
          position.coords.longitude
        );
        setWeather(weather);
      },
      async () => {
        const weather = await getWeather();
        setWeather(weather);
        alert(
          'Location sevice is not activated!\nDefault Location is the city of London'
        );
      }
    );
  } else {
  }
}
