import { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { showLocationFormAtom } from '../utils/recoilAtoms';
import { searchLocation } from '../utils/utils';
import { ResultItem } from './ResultItem';

function LocationForm() {
  const inputRef = useRef();
  // const [position, setPosition] = useState();
  // const [windowWidth, setWindowWidth] = useState();

  const [searchResults, setSearchResults] = useState();
  const [showLocationForm, setShowLocationForm] =
    useRecoilState(showLocationFormAtom);

  const classes = `flex flex-col items-stretch bg-sideBG pt-4 px-3 text-paleGreyFont absolute inset-0 z-10 transition-all duration-500 origin-[15%_5%] ${
    showLocationForm ? 'scale-100' : 'scale-0'
  }
  }]`;

  const getResults = async (city) => {
    const res = await fetch(`/api/locationSearch?city=${city}`);
    const results = await res.json();

    setSearchResults(results);
  };

  // function resizeListener() {
  //   setShowLocationForm(false);
  //   const sidePanel = document.querySelector('#side-panel');
  //   setWindowWidth(sidePanel.offsetWidth.toString());
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', resizeListener);

  //   return () => {
  //     window.removeEventListener('resize', resizeListener);
  //   };
  // }, []);

  return (
    <section id='location-form' className={classes}>
      <div
        onClick={() => setShowLocationForm(false)}
        className='self-end cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            className='fill-current text-paleGreyFont'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>

      <div
        className='flex justify-between pt-8 '
        onClick={() => inputRef.current.focus()}
      >
        <div className='flex bg-transparent border-paleGreyFont border-[1px] p-3 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              className='text-[#616475]'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>

          <input
            ref={inputRef}
            onChange={() =>
              // searchLocation(inputRef.current.value, setSearchResults)
              getResults(inputRef.current.value)
            }
            className='placeholder:text-[#616475] bg-transparent pl-4 placeholder:font-medium focus:outline-none'
            type='text'
            name='location'
            id='location'
            placeholder='search location'
          />
        </div>
        <button className='bg-[#3C47E9] font-medium p-3 px-5 cursor-pointer'>
          Search
        </button>
      </div>

      <div id='search-results' className='flex flex-col pt-10'>
        <ul>
          {searchResults &&
            searchResults.map((result) => (
              <ResultItem city={result} key={result.name} />
            ))}
        </ul>
      </div>
    </section>
  );
}

export default LocationForm;
