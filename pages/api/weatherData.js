import { getWeather } from '../../utils/utils';

export default async function handler(req, res) {
  const { lat, lon } = req.query;

  if ('lat' in req.query && 'lon' in req.query) {
    const weatherData = await getWeather(lat, lon);
    res.status(200).json(weatherData);
  } else {
    const weatherData = await getWeather();
    res.status(200).json(weatherData);
  }
}
