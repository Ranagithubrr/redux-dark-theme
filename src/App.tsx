import LightIcon from '../src/assets/light.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { toggleDarkMode } from './redux/theme-slice';

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.mode);
  const dispatch = useDispatch();
  const ToggleTheme = () => {
    dispatch(toggleDarkMode());
  }
  return (
    <div className={darkMode}>
      <div className='flex justify-between px-10 bg-gray-100 py-5 dark:bg-gray-800'>
        <div>
          <h1 className='text-gray-900 font-bold text-lg dark:text-gray-300'>Redux Dark Theme</h1>
        </div>
        <div className='flex items-center'>
          <ul className='flex pr-5'>
            <li className='px-4 text-sm font-semibold dark:text-gray-300'><a href="#">Home</a></li>
            <li className='px-4 text-sm font-semibold dark:text-gray-300'><a href="#">About Us</a></li>
            <li className='px-4 text-sm font-semibold dark:text-gray-300'><a href="#">Contact Us</a></li>
            <li className='px-4 text-sm font-semibold dark:text-gray-300'><a href="#">Dashboard</a></li>
          </ul>
          <img src={LightIcon} className='h-7 w-7 cursor-pointer' alt="" onClick={ToggleTheme} />
        </div>
      </div>
      <div className='flex justify-center items-center h-screen dark:bg-gray-700'>
        <h1 className='font-bold text-5xl -mt-16 dark:text-gray-300'>NIFTY IT SOLUTION LTD</h1>
      </div>
    </div>
  )
}

export default App
