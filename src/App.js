import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Project from "./Pages/Project/Project";
import './App.css';
import scroll from "./Animations/Scroll";
import { split } from "./Animations/Text";
import Smartwave from "./Pages/Smartwave/Smartwave";

scroll();

const Layout = () => {
  useEffect(() => {
    split(); // Initialize split text animation
  }, []);

  return (
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }, 
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/smartwave",
        element: <Smartwave />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
