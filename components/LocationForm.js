import { useEffect, useState } from 'react';

function LocationForm() {
  const [position, setPosition] = useState();
  useEffect(() => {
    // console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position, 'lol');
        console.log(navigator);
        setPosition(position);
      },
      (err) => {
        console.log(err);
        setPosition(err);
      }
    );
  }, []);

  return <div>{`location: ${position}`}</div>;
}

export default LocationForm;
