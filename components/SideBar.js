import { useRecoilValue } from 'recoil';
import LocationForm from './LocationForm';
import TodayPanel from './TodayPanel';
import { showLocationFormAtom } from '../utils/recoilAtoms';

function SideBar() {
  const showLocationForm = useRecoilValue(showLocationFormAtom);
  return (
    <div id='side-panel' className='relative bg-sideBG md:w-[375px] shrink-0'>
      <TodayPanel />
      <LocationForm />
    </div>
  );
}

export default SideBar;
