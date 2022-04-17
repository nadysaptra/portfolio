import { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Blackbox from '../../img/blackbox.png';
import JRP from '../../img/JRP.png';
import KRS from '../../img/KRS.png';
import Bountie from '../../img/bountie.png';
import { themeContext } from '../../Context';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <img src={Blackbox} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JRP} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bountie} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KRS} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
