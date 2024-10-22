import React, { useState } from 'react';
import './Work.css';

const projects = [
    { 
        id: 1, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728357085/Frame_2462_1_pfomv7.jpg', 
        category: 'Websites', 
        path: 'https://www.bsbtheagency.com/', 
        alt: 'BSBTheAgency',
        description: { p: 'BSB MANAGEMENT', span: 'Agency Website' },
        details: 'BSB is a top-tier agency providing management services to artists and music producers, focusing on fostering their growth and exposure.'
    },
    { 
        id: 2, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728899492/Frame_1707479689_1_vaz05m.jpg', 
        category: 'Websites', 
        path: 'https://www.devlender-saas.vercel.app/', 
        alt: 'devlender',
        description: { p: 'Devlender', span: 'Saas Landing Page' },
        details: 'Landing Page for a Saas Calendar app. Devlender streamlines your scheduling, ensuring you never miss an important date again.'
    },
    { 
        id: 5, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'Kuda',
        description: { p: 'TRAVELDEESTRO', span: 'Travel App Design' },
        details: 'TravelDeestro is a cutting-edge travel app designed to help users discover destinations and book seamless trips.'
    },
    { 
        id: 6, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'App Design', 
        path: '', 
        alt: 'MobileX',
        description: { p: 'COLLEC3DIBLES', span: 'Saas Design' },
        details: 'Collect3Dibles is a SaaS platform that enables users to create and manage digital collections of 3D assets and artworks.'
    },
    { 
        id: 9, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729621919/Frame_1707479724_1_t4zwaj.jpg', 
        category: 'Web apps', 
        path: 'https://transmoot.netlify.app/', 
        alt: 'Transmoot',
        description: { p: 'TRANSMOOT', span: 'Media Tool' },
        details: 'Transform your ideas into stunning visual content with Transmoot. Discover the ultimate media tool designed to amplify your creativity and craft compelling experiences effortlessly.'
    },
    { 
        id: 10, 
        src: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728354235/Frame_2462_1_nsg2va.jpg', 
        category: 'Web apps', 
        path: '', 
        alt: 'FIGMA PLUGIN',
        description: { p: 'FIGMA PLUGIN', span: 'Web App' },
        details: 'A Figma Plugin designed to enhance team collaboration by integrating web-based design elements directly into the interface.'
    }
];

function Work() {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='work'>
           <div className='work-con'>
             <h2 data-animation="paragraph">Selected Works (6)</h2>
             <h4>2022 - Till Date</h4>
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
                            <img src={project.src} alt={project.alt} loading="lazy" />
                            <div className='pro-con'>
                                <div className='pro-text'>
                                    <p>{project.description.p}</p>
                                </div>
                                <div className='view-project'>
                                    <span>{project.description.span}</span>
                                    <button onClick={() => openModal(project)}>
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.description.p}</h2>
                        <p>{selectedProject.details}</p>
                        {selectedProject.path ? (
                            <a href={selectedProject.path} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        ) : (
                            <p>Coming Soon</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
