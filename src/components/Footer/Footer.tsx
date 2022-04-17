import './Footer.css';
import Wave from '../../img/wave.svg';

const Footer = () => {
  return (
    <div className="footer">
      <p className="absolute copyright">All rights reserved. Copyright &copy; 2022</p>
      <img src={Wave} alt="" style={{ width: '100%' }} />
    </div>
  );
};

export default Footer;
