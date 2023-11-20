import React from 'react';
import './About.css';
import ddd from '../../images/Treatment-Process.jpg';
import certificate from '../../images/certificate.png';

function About(){
    return (
        <>
            <div className='aboutus-section'>
                <div><img src={ddd}></img></div>
                <div className='main-aboutus'>
                    <p>In addition, we are also pioneers in the field of membrane technology and adsorbents. We offer a wide range of high-quality membranes and adsorbents for water treatment and desalination, providing efficient and effective solutions for clients in various industries.<br/>
                        We are also at the forefront of green fuel production, specifically hydrogen gas. Our cutting-edge technology allows us to produce hydrogen gas using renewable energy sources, making it a clean and sustainable option for use in various applications.</p>                
                </div>
                <div className='about-vision'>
                    <h2>Our Vision</h2>
                    <p>As Mahatma Gandhi said, "We have to handover the earth, the air, the land and the water to the children at least it was handed over to us", we have a small initiative to see that it is done so. Our company's vision is to produce sustainable and practical solutions for water management, filtration technologies, sensors, hydrogen gas production and food preservation. We aim to be at the forefront of innovation, utilizing cutting-edge technology to provide our clients with the same. <br/>
                        By working together with our clients and partners, we can positively impact the environment and the communities we serve. We are committed to creating a future where water is managed responsibly, where clean water is accessible to all, people can know the safety of the stream, where green fuel technology is widely adopted as a solution to reduce greenhouse gas emissions. Apart from that, we also look into preservation to ensure minimization of food loss.<br/>
                        We are trusted partner for our clients when it comes to providing expert advice, high-quality products with services and innovative solutions that make a positive impact on the world. We strive to create a work environment that is inclusive, supportive and encourages continuous learning and growth. We are dedicated to making a positive difference in the world through our work and we believe that together, we can create a sustainable future for all.
                    </p>
                </div>
                <div className='about-aim'>
                    <h2>Our Aim</h2>
                    <p>our goal is to provide our clients with the latest and most effective solutions in waste water management, membrane technology, and green fuel production. With our commitment to innovation and sustainability, we aim to make a positive impact on the environment and the communities we serve.</p>
                </div>
                <div className='about-message'>
                    <h2>Message from  Our Founding Director</h2>
                    <p>"At Neertech, we try to create innovative routes, yet simple and cost-effective, to provide solutions for some complex problems. The range of problems varies according to the customer's choice and the timelines expected. Here, we are committed to solving three basic crises of human life, i.e., water, energy and food." </p>
                </div>
                <div className='about-certificate'>
                    <h2>Certification</h2>
                    <p><i>"Our company is proud to have received recognition from the Government of India as a Startup India-certified company. This certification recognizes our innovative solutions in filtration technology, water quality sensors, green fuel hydrogen gas production and food preservations, highlighting our commitment to fostering entrepreneurship and driving sustainable growth."</i></p>
                    <img src={certificate}></img>
                </div>
            </div>
        </>
    );
}

export default About;