import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'
import insta_icon from '../../assets/insta_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo">
                        <h2>Kartik Prakash</h2>
                        <img src={theme_pattern} alt="" />
                    </div>
                    <div className="footer-para">
                        <p>I'm an Electronics and Communication Engineer with exprience in building fullstack web development projects.</p>
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="footer-socials">
                        <h2>Socials</h2>
                        <div className='footer-icon'>
                            <a href="https://www.linkedin.com/in/kartikprakash1" target='_blank'><div className='footer-social'>
                                <img src={linkedin_icon} alt="" />
                            </div></a>
                            <a href='https://github.com/kartikprakash00' target='_blank'><div className='footer-social'>
                                <img src={github_icon} alt="" />
                            </div></a>
                            <a href='https://www.instagram.com/kartikprakash1/profilecard/?igsh=ZTNucmhzcGZyZXNx' target='_blank'><div className='footer-social'>
                                <img src={insta_icon} alt="" />
                            </div></a>
                            <a href='https://www.facebook.com/kartikprakash09' target='_blank'><div className='footer-social'>
                                <img src={facebook_icon} alt="" />
                            </div></a>
                            <a href="https://x.com/kartikprakash11" target='_blank'><div className='footer-social'>
                                <img src={twitter_icon} alt="" />
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© Made by <span>Kartik Prakash</span></p>
            </div>
        </div>
    )
}

export default Footer
