export async function getWeather(query = 'auto:ip') {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.APIKEY}&q=${query}&days=7`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error in fetching weather data!.', error);
    return error;
  }
}
