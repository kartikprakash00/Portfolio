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
                <a className='download' href="https://drive.google.com/file/d/1-EIv_CG_5mBE9z-FsW8FtTQIbMkHXvPd/view?usp=share_link" target='_blank'><div className="hero-resume">My résumé</div></a>
            </div>
        </div>
    )
}

export default Hero
