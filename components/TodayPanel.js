import { useSetRecoilState } from 'recoil';
import { showLocationFormAtom } from '../utils/recoilAtoms';

function TodayPanel() {
  const setShowLocationForm = useSetRecoilState(showLocationFormAtom);

  return (
    <section
      id='today-data'
      className='relative flex flex-col items-center w-full px-3 py-5 bg-no-repeat text-greyFont overflow-clip'
    >
      <img
        className='absolute scale-[165%] top-32 opacity-10'
        src='/Cloud-background.png'
        alt=''
      />

      <div className='flex justify-between w-full'>
        <button
          onClick={() => setShowLocationForm(true)}
          className='text-paleGreyFont z-10 cursor-pointer bg-[#6E707A] px-5'
        >
          Search for places
        </button>
        <button className='bg-[#6E707A] rounded-full p-2 cursor-pointer'>
          <svg className='w-6 h-6 text-paleGreyFont' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z'
            />
          </svg>
        </button>
      </div>
      <img
        className='pt-20 w-36'
        src='/shower.png'
        alt='weather status image'
      />

      <p className='text-[144px] text-paleGreyFont font-semibold'>
        15<span className='text-6xl font-medium text-greyFont '>&#186;C</span>
      </p>

      <p className='pt-6 text-4xl font-semibold'>Shower</p>

      <div className='flex gap-4 pt-12 '>
        <p>Today</p>
        <p>&#8226;</p>
        <p>Fri, 5 Jun</p>
      </div>

      <div className='flex items-center gap-2 pt-8 pb-24 text-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          class='w-5 h-5'
        >
          <path
            fill-rule='evenodd'
            d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
            clip-rule='evenodd'
          />
        </svg>
        <p className='text-lg font-semibold'>Helsinki</p>
      </div>
    </section>
  );
}

export default TodayPanel;
