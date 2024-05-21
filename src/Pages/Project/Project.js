import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css'; // Import the CSS file

const images = [
  { id: 1, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2465_dok56g.jpg', category: 'Web apps', path: '/details/1', alt: 'Web app design 1' },
  { id: 2, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406670/Frontax1_qvpugh.png', category: 'Websites', path: '/details/2', alt: 'Website design 2' },
  { id: 3, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716214199/Frame_2458_msjusw.jpg', category: 'App Design', path: '/details/3', alt: 'App design 3' },
  { id: 4, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207116/Frame_2463_uqoavv.jpg', category: 'Web apps', path: '/details/4', alt: 'Web app design 4' },
  { id: 5, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213665/Frame_2450_lsm4wz.jpg', category: 'Websites', path: '/details/5', alt: 'Website design 5' },
  { id: 6, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213924/Frame_2270_c0hcru.png', category: 'App Design', path: '/details/6', alt: 'App design 6' },
  { id: 7, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716214559/Frame_2482_frgsz9.jpg', category: 'Web apps', path: '/details/7', alt: 'Web app design 7' },
  { id: 8, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716213667/Frame_2440_n6o0x3.jpg', category: 'Websites', path: '/details/8', alt: 'Website design 8' },
  { id: 9, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716261171/Frame_2474_ape22u.jpg', category: 'App Design', path: '/details/9', alt: 'App design 9' },
  { id: 10, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716260467/Frame_2482_tpqrrg.jpg', category: 'Web apps', path: '/details/10', alt: 'Web app design 10' },
  { id: 11, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716261171/Frame_2475_gae97s.jpg', category: 'Websites', path: '/details/11', alt: 'Website design 11' },
  { id: 12, src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1716260862/Frame_2473_bqdr2j.jpg', category: 'Websites', path: '/details/12', alt: 'Website design 12' },
];

const Project = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? images : images.filter(image => image.category === filter);

  return (
    <div className='project-con'>

      <div className='project-header'>
        <h2> Work Gallery</h2>
      </div>

      <div className="filters">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'Web apps' ? 'active' : ''} onClick={() => setFilter('Web apps')}>Web apps</button>
        <button className={filter === 'Websites' ? 'active' : ''} onClick={() => setFilter('Websites')}>Websites</button>
        <button className={filter === 'App Design' ? 'active' : ''} onClick={() => setFilter('App Design')}>App Design</button>
      </div>
      <div className="grid">
        {filteredImages.map(image => (
          <div key={image.id} className="grid-item">
            <Link to={image.path}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="overlay">Click to see project info</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

