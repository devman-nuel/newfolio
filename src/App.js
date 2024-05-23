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
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716277829/17534_d5qgup.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716278034/zgc1993-Fk9RSVdJ6Q8-unsplash_j6yfxk.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2465_dok56g.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207112/Frame_2481_dievfw.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2477_hxdsxs.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2480_riyhef.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2478_ljpcq5.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406670/Frontax1_qvpugh.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406874/Frontax5_rzwkue.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406865/Frontax4_jk9m34.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406851/Frontax2_qj04u6.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406853/Frontax3_uynupr.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207115/Frame_2461_y8q1pb.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207117/Frame_2462_o4xkq4.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207116/Frame_2463_uqoavv.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2465_dok56g.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406670/Frontax1_qvpugh.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716214199/Frame_2458_msjusw.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207116/Frame_2463_uqoavv.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213665/Frame_2450_lsm4wz.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213924/Frame_2270_c0hcru.png",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716214559/Frame_2482_frgsz9.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213667/Frame_2440_n6o0x3.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716261171/Frame_2474_ape22u.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716260467/Frame_2482_tpqrrg.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716261171/Frame_2475_gae97s.jpg",
            "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716260862/Frame_2473_bqdr2j.jpg",
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
