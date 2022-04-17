import { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/upwork.png';
import Gamatechno from '../../img/gamatechno.jpeg';
import Bountie from '../../img/bountie.webp';
import Hiapp from '../../img/hiapp.svg';
import Accelbyte from '../../img/accelbyte.svg';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className={`works ${darkMode ? 'bg-white' : ''}`} id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            I work on many company for the past 9 years, and here is the recent company I work on.
            <br />
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Gamatechno} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bountie} alt="" />
          </div>{' '}
          <div className="w-secCircle">
            <img src={Hiapp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Accelbyte} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
