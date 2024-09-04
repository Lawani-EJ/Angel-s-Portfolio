// import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbsr.jsx"
import HeroSection from "./components/HeroSection.jsx"
import FeaturesSection from './components/Features.jsx';
// import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Example from './components/Example.jsx';

function App() {
  return (
    <div className="App">
      <Example/>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <HeroSection/>
      <FeaturesSection/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
