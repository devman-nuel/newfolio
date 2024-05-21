import React, { useState } from 'react';
import './Work.css';
import { Link } from 'react-router-dom';

function Work() {
    const [selectedImgWultz, setSelectedImgWultz] = useState(0);
    const [selectedImgFrontax, setSelectedImgFrontax] = useState(0);
    const [selectedImgTransmoot, setSelectedImgTransmoot] = useState(0);

    const images = [
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2465_dok56g.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207112/Frame_2481_dievfw.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2477_hxdsxs.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2480_riyhef.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207113/Frame_2478_ljpcq5.jpg"
    ];

    const Frontax = [
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406670/Frontax1_qvpugh.png",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406874/Frontax5_rzwkue.png",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406865/Frontax4_jk9m34.png",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406851/Frontax2_qj04u6.png",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406853/Frontax3_uynupr.png"
    ];

    const Transmoot = [
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207115/Frame_2461_y8q1pb.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207117/Frame_2462_o4xkq4.jpg",
        "https://res.cloudinary.com/dxnukbo0u/image/upload/v1716207116/Frame_2463_uqoavv.jpg",
        "",
        ""
    ];

    return (
        <div className='work'>
            <h2 data-animation="header">Selected Works(5)</h2>
            <h4>'22 - Till Date</h4>

            <div className='work-con'>
                <div className='work-box'>
                    <div className='work-text'>
                        <div>
                            <h2>WULTZ</h2>
                            <p>A Task Management Saas Product Website <br /> <br />
                                Design Tool : Figma <br /> <br />
                                Built with : React and GSAP for animations. <br /> <br />
                            </p>
                        </div>

                        <div className='credits'>
                            <span>Credits</span>
                            <div className='credits-con'>
                                <div>
                                    <h4>Design</h4>
                                    <p>DevMan_nuel</p>
                                </div>
                                <div>
                                    <h4>Development</h4>
                                    <p>DevMan_nuel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='work-img'>
                        <div className='primary-img'>
                            <img src={images[selectedImgWultz]} className="pry" alt="" />
                        </div>

                        <div className='secondary-img'>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    className="sec"
                                    alt=""
                                    onClick={() => setSelectedImgWultz(index)}
                                />
                            ))}
                            <button className='fliptext' data-hover="Visit Site">Visit Site</button>
                        </div>
                    </div>
                </div>

                <div className='work-box'>
                    <div className='work-text'>
                        <div>
                            <h2>Frontax</h2>
                            <p>A Web3 Ticketing Website. <br /> <br />
                                Design Tool : Figma <br /> <br />
                                Built with : React, MongoDB, Node JS and GSAP for animations. <br /> <br />
                                Features : User-Authentication, API Integration, Search & Filter.
                            </p>
                        </div>

                        <div className='credits'>
                            <span>Credits</span>
                            <div className='credits-con'>
                                <div>
                                    <h4>Design</h4>
                                    <p>David Alonge</p>
                                </div>
                                <div>
                                    <h4>Development</h4>
                                    <p>DevMan_nuel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='work-img'>
                        <div className='primary-img'>
                            <img src={Frontax[selectedImgFrontax]} className="pry" alt="" />
                        </div>

                        <div className='secondary-img'>
                            {Frontax.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    className="sec"
                                    alt=""
                                    onClick={() => setSelectedImgFrontax(index)}
                                />
                            ))}
                            <button className='fliptext' data-hover="Visit Site">Visit Site</button>
                        </div>
                    </div>
                </div>

                <div className='work-box'>
                    <div className='work-text'>
                        <div>
                            <h2>Transmoot- Dashboard</h2>
                            <p>Media Tool Designed To Create Compelling Visual Experience<br /> <br />
                                Design Tool : Figma <br /> <br />
                                Built with : React and GSAP for animations. <br /> <br />
                            </p>
                        </div>

                        <div className='credits'>
                            <span>Credits</span>
                            <div className='credits-con'>
                                <div>
                                    <h4>Design</h4>
                                    <p>DevMan_nuel</p>
                                </div>
                                <div>
                                    <h4>Development</h4>
                                    <p>DevMan_nuel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='work-img'>
                        <div className='primary-img'>
                            <img src={Transmoot[selectedImgTransmoot]} className="pry" alt="" />
                        </div>

                        <div className='secondary-img'>
                            {Transmoot.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    className="sec"
                                    alt=""
                                    onClick={() => setSelectedImgTransmoot(index)}
                                />
                            ))}
                            <button className='fliptext' data-hover="Visit Site">Visit Site</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='more-dir'>
                <Link className='nav-link' to="/project"><button>More Works</button></Link>
            </div>
        </div>
    );
}

export default Work;
