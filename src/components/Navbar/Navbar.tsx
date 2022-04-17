import { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import Scroll, { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  var scroll = Scroll.animateScroll;
  return (
    <>
      <div className="n-wrapper w-full lg:flex md:flex justify-between lg:mb-8 md:mb-8 top-0 navbar">
        <div className="left flex-1 items-center content-left gap-8 flex">
          <div className="text-xl font-bold">Nady</div>
          <Toggle />
          <div
            className="flex-1 lg:invisible md:invisible text-right"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </div>
        </div>
        <div className="right flex-1 flex items-center content-center invisible lg:visible md:visible duration-500">
          <div className="n-list flex-10 ">
            <div className="flex gap-8 mr-16">
              <Link spy={true} to="Navbar" smooth={true} activeClass={'active'}>
                Home
              </Link>
              <Link spy={true} to="Services" smooth={true}>
                Services
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                Experience
              </Link>
              <Link spy={true} to="Portfolio" smooth={true}>
                Portfolio
              </Link>
            </div>
          </div>
          <button className="button n-button flex-2">Contact Us</button>
        </div>
      </div>
      {showMenu && (
        <div className={`flex flex-col items-left content-center gap-4`}>
          <div className="n-list flex-10 flex gap-8 mr-16 flex-col w-full">
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass={'active'}
              className={'text-center'}
            >
              Home
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass={'active'}
              className={'text-center'}
            >
              Services
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass={'active'}
              className={'text-center'}
            >
              Experience
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass={'active'}
              className={'text-center'}
            >
              Portfolio
            </Link>
          </div>
          <button onClick={() => scroll.scrollToBottom()} className="button n-button flex-2">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
