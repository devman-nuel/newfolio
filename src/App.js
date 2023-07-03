import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <>
       <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/project' element={<Project />}></Route>        
        </Routes>
      </AnimatePresence>
      </>
    </div>
  );
}

export default App;
