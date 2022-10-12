export function ResultItem({ city }) {
  return (
    <li
      onClick={() => setLocation({ lon: city.lon, lat: city.lat })}
      className='group cursor-pointer flex justify-between group pl-3 py-5 hover:border-[#616475] hover:border-[1px]'
    >
      <div className='flex items-center'>
        <p>{city.name}</p>
        <p className='pl-1 text-sm text-darkGreyFont'>{`,${city.country}`}</p>
      </div>
      <svg
        className='hidden group-hover:block group-hover:w-5 group-hover:text-[#616475] w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2.5'
        stroke='currentColor' // className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>
    </li>
  );
}

// TODO: refactor so that lonly location gets updated when changing location through gps and search, then a selector linked to location atom will hydrate UI with new weather data and close locationForm.
