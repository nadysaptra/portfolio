import { useContext } from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import { themeContext } from './Context';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyA5sDkZi9yFZ907PtW4aQQOb10FsS6WSw4',
    authDomain: 'personal-website-19016.firebaseapp.com',
    projectId: 'personal-website-19016',
    storageBucket: 'personal-website-19016.appspot.com',
    messagingSenderId: '127933360772',
    appId: '1:127933360772:web:1c5952d21d222aa537f0d1',
    measurementId: 'G-YNFKJ90N9G'
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black'
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
