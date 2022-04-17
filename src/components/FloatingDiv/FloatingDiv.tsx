import { useContext } from 'react';
import { themeContext } from '../../Context';
import './FloatingDiv.css';

const FloatingDiv = ({ img, txt1, txt2 }: { img: string; txt1: string; txt2: string }) => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={`floatingDiv justify-around flex bg-white transition ease-in-out shadow-md hover:shadow-2xl rounded p-4 items-center ${
        darkMode ? 'text-slate-500' : 'text-grey-700'
      } `}
    >
      <img className="flex-0" src={img} alt={`${txt1} ${txt2}`} />
      <span className="flex-1 ml-3 font-bold">
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
