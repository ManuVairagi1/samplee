import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Our_team from './components/Our_team';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Header from './components/Header';
import Solutions from './components/Solutions';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import MyHeader from './components/MyHeader';
import Features from './components/Features';
// import Section3 from './components/Section3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <MyHeader/>
      <Features/>
      <Experience/>
      <Header/>
      <Solutions/>
      <Home/>
      {/* <Section/> */}
      <Newsletter/>
      <Contact/>
      <Our_team/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
