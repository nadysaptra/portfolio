import { createRef, useCallback, useContext, useEffect, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = createRef<HTMLFormElement>();
  const [done, setDone] = useState(false);
  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      console.log('sendEmail', e, form.current);
      if (!form.current) return;
      emailjs
        .sendForm('service_t0787bd', 'template_upnx4ys', form.current, 'MaJHkvJ-2foJBvy11')
        .then(
          (result) => {
            setDone(true);
            if (!form.current) return;
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
    },
    [form],
  );

  useEffect(() => {
    if (form.current) {
      form.current.focus();
    }
  }, [form]);

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blurDiv blurBlue" style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user" placeholder="Name" />
          <input type="email" name="reply_to" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for Contacting me'}</span>
          <div className="blurDiv c-blur1" style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
