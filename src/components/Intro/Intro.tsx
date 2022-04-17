import './Intro.css';
import Github from '../../img/github.gif';
import Linkedin from '../../img/linkedin.gif';
import Instagram from '../../img/instagram.gif';
import BoyDev from '../../img/boy-developer.png';
import Rocket from '../../img/rocket.png';
import Coding from '../../img/coding.png';
import Mobile from '../../img/mobile.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro flex flex-col lg:flex-row lg:h-5/6 mt-24">
      <div className="i-left flex-1 flex relative flex-col gap-8">
        <div className="i-name flex flex-col">
          <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'} text-5xl`}>
            Hi I am
          </span>
          <span className="text-amber-500 font-bold text-3xl">Saputra Nady</span>
          <span className={`font-light text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Fullstack developer with high level of experience in web integration and mobile
            development. <br />
            Producing high quality code, ontime delivery, and dependable.
          </span>
        </div>
        <button className="button w-32 h-12">Hire me</button>
        <div className="i-icons mt-8 flex gap-4">
          <a href="https://github.com/nadysaptra" target={'_blank'} rel={'noreferrer'}>
            <img src={Github} alt="github" className="w-20 h-20 hover:cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/saputranady" target={'_blank'} rel={'noreferrer'}>
            <img src={Linkedin} alt="linkedin" className="w-20 h-20 hover:cursor-pointer" />
          </a>
          <a href="https://instagram.com/itsnadysaptra" target={'_blank'} rel={'noreferrer'}>
            <img src={Instagram} alt="instagram" className="w-20 h-20 hover:cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="i-right flex-1 flex ">
        <img className="boy-dev relative lg:absolute w-auto z-1" src={BoyDev} alt="boy-dev" />
        <motion.div
          initial={{ top: '-5%', left: '50%' }}
          whileInView={{ top: '-5%', left: '40%' }}
          transition={transition}
          className={'invisible lg:visible md:visible'}
        >
          <FloatingDiv img={Rocket} txt1={'Frontend'} txt2={'Engineer'} />
        </motion.div>
        <motion.div
          initial={{ top: '15%', left: '-24%' }}
          whileInView={{ top: '15%', left: '-10%' }}
          transition={transition}
          className={'invisible lg:visible md:visible'}
        >
          <FloatingDiv img={Coding} txt1={'Backend'} txt2={'Engineer'} />
        </motion.div>
        <motion.div
          initial={{ top: '40%', left: '20%' }}
          whileInView={{ top: '40%', left: '10%' }}
          transition={transition}
          className={'invisible lg:visible md:visible'}
        >
          <FloatingDiv img={Mobile} txt1={'Mobile'} txt2={'Engineer'} />
        </motion.div>

        <div className="blurDiv"></div>
        <div className="blurDiv blurBlue"></div>
      </div>
    </div>
  );
};

export default Intro;
