import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Work.css';

const projects = [
    { 
        id: 1, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728357085/Frame_2462_1_pfomv7.jpg', 
        category: 'Websites', 
        path: '/smartwave', 
        alt: 'Wultz',
        description: { p: 'BSB MANAGEMENT', span: 'Top music,flim and business management agency ' }
    },
    { 
        id: 2, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Websites', 
        path: '', 
        alt: 'Stally',
        description: { p: 'Stally', span: 'A web agency management' }
    },
    { 
        id: 3, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Websites', 
        path: '', 
        alt: 'SitePro',
        description: { p: 'SitePro', span: 'Professional Web Design' }
    },
    { 
        id: 4, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Websites', 
        path: '', 
        alt: 'InnoWave',
        description: { p: 'InnoWave', span: 'Innovative Web Solutions' }
    },
    { 
        id: 5, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'Kuda',
        description: { p: 'Kuda', span: 'A web agency management' }
    },
    { 
        id: 6, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'MobileX',
        description: { p: 'MobileX', span: 'Next-gen Mobile Apps' }
    },
    { 
        id: 7, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'AppMaster',
        description: { p: 'AppMaster', span: 'Master App Development' }
    },
    { 
        id: 8, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'DesignFlow',
        description: { p: 'DesignFlow', span: 'Creative App Design' }
    },
    { 
        id: 9, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Web apps', 
        path: '', 
        alt: 'Webify',
        description: { p: 'Webify', span: 'Web App Development' }
    },
    { 
        id: 10, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Web apps', 
        path: '', 
        alt: 'AppHub',
        description: { p: 'AppHub', span: 'Hub for Developers' }
    },
    { 
        id: 11, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Web apps', 
        path: '', 
        alt: 'CodeStream',
        description: { p: 'CodeStream', span: 'Streaming Code Solutions' }
    },
    { 
        id: 12, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Web apps', 
        path: '', 
        alt: 'InnoApps',
        description: { p: 'InnoApps', span: 'Innovative App Development' }
    },
];

function Work() {
    const [filter, setFilter] = useState('All');
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    return (
        <div className='work'>
           <div className='work-con'>
             <h2 data-animation="paragraph">Selected Works (12)</h2>
            <h4>'2022 - Till Date</h4>
           </div>

            <div className='project-con'>
                <div className="filters">
                    <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
                    <button className={filter === 'Websites' ? 'active' : ''} onClick={() => setFilter('Websites')}>Websites</button>
                    <button className={filter === 'App Design' ? 'active' : ''} onClick={() => setFilter('App Design')}>App Design</button>
                    <button className={filter === 'Web apps' ? 'active' : ''} onClick={() => setFilter('Web apps')}>Web apps</button>
                </div>

                <div className='main-grid'>
                    {filteredProjects.map(project => (
                        <div key={project.id} className='grid-card'>
                            <Link to={project.path}>
                                <img src={project.src} alt={project.alt} loading="lazy" />
                            </Link>
                            <div className='pro-con'>
                                <div className='pro-text'>
                                    <p>{project.description.p}</p>
                                    <span>{project.description.span}</span>
                                </div>
                                <div className='pro-btn'>
                                    <button>Go</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
