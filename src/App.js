import './App.css';
import Explore from './Components/Explore.js';
import Features from './Components/Features.js';
import Footer from './Components/Footer.js';
import Gallery from './Components/Gallery.js';
import Header from "./Components/Header.js";
import HomePage from './Components/HomePage.js';
// import Homeslider from './Components/Homeslider.js';
function App() {
  return (
    <>
      <HomePage />
      <Explore />
      <Features/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
