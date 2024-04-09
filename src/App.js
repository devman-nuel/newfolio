import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";


import Navbar from './Components/Navbar'
import Hr from './Components/Hr'
import ScrollTop from './Components/Scrolltop'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import { AnimatePresence } from 'framer-motion';

import { split } from "./Animations/Text";
import { useEffect } from "react";
import scroll from "./Animations/Scroll";

scroll();

function App() {

  const location = useLocation();

  useEffect(() => {
    split();
});


  return (
    <div className="App">
      <ScrollTop />
      <>
       <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>        
        </Routes>
      </AnimatePresence>
      <Hr />
      <Footer />
      </>
    </div>
  );
}

export default App;
