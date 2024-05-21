import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Preloader from "./Components/Preloader/Preloader"; // Import the Preloader component
import Project from "./Pages/Project/Project";
import './App.css';
import scroll from "./Animations/Scroll";
import { split } from "./Animations/Text";

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
 
    ]
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePreloadComplete = () => {
      setLoading(false);
    };

    // Simulate loading time for demonstration purposes
    setTimeout(() => {
      handlePreloadComplete();
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader
          images={[          
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1712004456/2149272201_kr7xpt.jpg",
            // Add more Cloudinary image URLs as needed
          ]}
          onComplete={() => {}}
        />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
