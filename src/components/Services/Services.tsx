import { useContext } from 'react';
import './Services.css';
import Card from '../Card/Card';
import Cube from '../../img/cube.gif';
import HappyHacker from '../../img/happy-hacker.gif';
import FingerPrint from '../../img/finger-print-fail.gif';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import Resume from './RESUME.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div
      className="services gap-64 flex-col sm:flex sm:flex-row p-0 sm:px-12 mt-36 sm:mt-60 mb-32 sm:mb-60"
      id="Services"
    >
      <div className="awesome-service flex flex-row lg:flex-none mb-8">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span className={`${darkMode ? 'text-white' : 'text-black'}`}>
          Here is my awesome service for all tech needs.
          <br />
          Fell the power with customizable needs.
        </span>
        <a href={Resume} download>
          <button className="button mt-8">Download CV</button>
        </a>
        <div className="blurDiv blurBlue s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      <div className="cards flex sm:relative gap-6 lg:gap-64 lg:flex-1">
        <motion.div
          initial={{ right: '40%' }}
          whileInView={{ right: '45%' }}
          transition={transition}
          className={'relative sm:absolute w-full lg:w-1/3 z-10'}
        >
          <Card emoji={Cube} heading={'Styling'} detail={'Tailwind, Bootstrap, Material Design'} />
        </motion.div>
        <motion.div
          initial={{ left: '-15rem', top: '12rem' }}
          whileInView={{ left: '-11rem', zIndex: 1 }}
          transition={transition}
          className={'relative sm:absolute w-full lg:w-1/3 z-10'}
        >
          <Card
            emoji={HappyHacker}
            heading={'Developer'}
            detail={'JavaScript, Typescript, React, Nodejs, Express, Angular, Python'}
          />
        </motion.div>
        <motion.div
          initial={{ top: '23rem', left: '25%' }}
          whileInView={{ left: '50%', zIndex: 1 }}
          transition={transition}
          className={'relative sm:absolute w-full lg:w-1/3 z-10'}
        >
          <Card
            emoji={FingerPrint}
            heading={'DevOps'}
            detail={'Jenkins, Github Action, Docker, Kubernetes'}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blurDiv s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  );
};

export default Services;
