export async function getWeather(lat = 51.5085, lon = -0.1257) {
  const forecasrResponse = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.APIKEY}&units=metric`
  );
  // if (!res.status) {
  //   throw new Error('Data fetching error.');
  // }
  const forecast_40Sample = await forecasrResponse.json();
  const forecast = {
    ...forecast_40Sample,
    list: [
      forecast_40Sample.list[0],
      forecast_40Sample.list[8],
      forecast_40Sample.list[16],
      forecast_40Sample.list[24],
      forecast_40Sample.list[32],
    ],
  };

  const currentResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.APIKEY}&units=metric`
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

export function getWindDirection(angle) {
  // function to convert wind angle got form weather API to  cardinal direction specified in the design.
  const windAngleToString = [
    { name: 'N', min: 0, max: 11.25 },
    { name: 'NNE', min: 11.25, max: 33.75 },
    { name: 'NE', min: 33.75, max: 56.25 },
    { name: 'ENE', min: 56.25, max: 78.25 },
    { name: 'E', min: 78.25, max: 101.25 },
    { name: 'ESE', min: 101.25, max: 123.75 },
    { name: 'SE', min: 123.75, max: 146.25 },
    { name: 'SSE', min: 146.25, max: 168.75 },
    { name: 'SSW', min: 168.75, max: 191.25 },
    { name: 'SW', min: 213.75, max: 236.25 },
    { name: 'WSW', min: 236.25, max: 258.75 },
    { name: 'W', min: 258.75, max: 281.25 },
    { name: 'WNW', min: 281.25, max: 303.75 },
    { name: 'NW', min: 303.75, max: 326.25 },
    { name: 'NNW', min: 326.25, max: 348.75 },
    { name: 'N', min: 348.75, max: 360 },
  ];

  const cardinalDirection = windAngleToString.filter(
    (direction) => angle >= direction.min && angle < direction.max
  );
  return cardinalDirection[0].name;
}
