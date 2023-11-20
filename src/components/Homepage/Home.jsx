import React from "react";
import './Home.css';
import settingbg from '../../images/homepageimg1.png';
import plantgif from '../../images/plantgif.gif';
import user from '../../images/user.png';
import { FiInstagram,FiFacebook,FiLinkedin} from 'react-icons/fi';
import {m1,m2,m3,m4,m5} from '../../images/image';

function Home(){
    return(
        <>
            <div className="main-section">
                <div className="container">
                    <div className="home-caption">
                        <div className="caption-text"><h3>"We have to handover the earth,<br/> the air, the land and the water to the children<br/> at least it was handed over to us"</h3></div>
                        <div className="boxes">
                            <div id="box1"><p>Waste Water Management</p></div>
                            <div id="box2"><p>Filtration Technology</p></div>
                            <div id="box3"><p>Water Quality Analysis</p></div>
                            <div id="box4"><p>Green Fuel Hydrogen Gas Production</p></div>
                            <div id="box5"><p>Food Preservation</p></div>
                        </div>
                    </div>
                    <div className="settingbg">
                        <img id="setting" src={settingbg} alt=""></img>
                    </div>
                </div>

                <div className="section-2">
                    <div className="about-section">
                        <div className="text-section">
                            <h1>Welcome to NeerTech</h1>
                            <p>Our company is a leading provider of water-based consultancy services, specializing in treating and managing wastewater/groundwater through innovative technologies. Our team of experts has extensive experience in the field and is committed to providing customized solutions to meet the specific needs of our clients.
                            </p>  
                        </div>
                        <div className="about-img">
                            <img src={plantgif} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className='partners-sec'>
                    <div className="partners-head"><h1>Our Partners</h1></div>
                    <div className="partners-details">
                        <div className="partner"><img src={m1} alt=""></img></div>
                        <div className="partner"><img src={m2} alt=""></img></div>
                        <div className="partner"><img src={m3} alt=""></img></div>
                        <div className="partner"><img src={m4} alt=""></img></div>
                        <div className="partner"><img src={m5} alt=""></img></div>
                    </div>
                </div>

                <div className="section-3">
                    <div className="head-sec3"><h1>Meet Our Team</h1></div>
                    <div className="team-frame">
                        <div className="frame1">
                            <div className="team-img1">
                                <img src={user} alt=""/>
                            </div>
                            <div className="team-del">
                                <h1>Dr. Somak</h1>
                                <h2>CEO & Founding Director</h2>
                                <div className='social-team'>
                                    <i><FiInstagram className='size'/></i>
                                    <i><FiFacebook className='size'/></i>
                                    <i><FiLinkedin className='size'/></i>
                                </div>
                            </div>
                        </div>
                        <div className="frame1">
                            <div className="team-img1">
                                <img src={user} alt=""/>
                            </div>
                            <div className="team-del">
                                <h1>Mr. Ankit Pal</h1>
                                <h2>Co-Director & CTO</h2>
                                <div className='social-team'>
                                    <i><FiInstagram className='size'/></i>
                                    <i><FiFacebook className='size'/></i>
                                    <i><FiLinkedin className='size'/></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-message">
                            <h3>Message:</h3>
                            <p>"At Neertech, we try to create innovative routes, yet simple and cost-effective, to provide solutions for some complex problems. The range of problems varies according to the customer's choice and the timelines expected. Here, we are committed to solving three basic crises of human life, i.e., water, energy and food." </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;