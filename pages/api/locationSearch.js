export default async function handler(req, res) {
  const { city } = req.query;
  const locationsResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.GEOLOCATION_API_KEY}`
  );

  const locations = await locationsResponse.json();
  res.status(200).json(locations);
}
