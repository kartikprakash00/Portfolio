import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'
import html_logo from '../../assets/html_logo.svg'
import css_logo from '../../assets/css_logo.svg'
import javacript_logo from '../../assets/javascript_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import node_logo from '../../assets/node_logo.svg'
import mongo_logo from '../../assets/mongo_logo.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a fullstack developer, I thrive on the challenge of building dynamic and efficient web applications from the ground up.
                            I'm skilled in technologies like React, HTML, Express, MongoDB, and Node.js.</p>
                        <p>Every project is an opportunity for me to learn and grow, and I'm always looking for new technologies or frameworks to push my boundaries.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <img className='html' src={html_logo} alt="" />
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <img className='css' src={css_logo} alt="" />
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <img className='javascript' src={javacript_logo} alt="" />
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <img className='react' src={react_logo} alt="" />
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <img className='mongo' src={mongo_logo} alt="" />
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div> */}
        </div>
    )
}

export default About
