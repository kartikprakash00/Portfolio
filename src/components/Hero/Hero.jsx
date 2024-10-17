import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Kartik Prakash.</span> <br />A Fullstack Developer</h1>
            <p>I'm a skilled fullstack developer with expertise in React, HTML, Express, MongoDB, and Node.js.</p>
            <div className='hero-action'>
                <AnchorLink className='anchor-link-hero' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
                <a className='download' href="https://drive.google.com/uc?export=download&id=1YkbNGnMBN1Aa7X6ljLwFwaDl6wUinmHa"><div className="hero-resume">My résumé</div></a>
            </div>
        </div>
    )
}

export default Hero
