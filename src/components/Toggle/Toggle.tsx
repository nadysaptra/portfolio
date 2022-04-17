import './Toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="toggle flex cursor-pointer relative">
      <img src={Moon} alt="moon" />
      <img src={Sun} alt="sun" />
      <div
        className="t-button absolute"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
        onClick={() => theme.dispatch({ type: 'toggle' })}
      ></div>
    </div>
  );
};

export default Toggle;
