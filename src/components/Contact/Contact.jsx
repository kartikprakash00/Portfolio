import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_white from '../../assets/linkedin_white.png'
import github_white from '../../assets/github_white.png'


const access_key = import.meta.env.VITE_ACCESS_KEY

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", access_key);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message);
            event.target.reset();
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to work and take on new projects. Feel free to contact me anytime.</p>
                    <div className="contact-details">
                        <a href="mailto:kartikprakash1@gmail.com"><div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>kartikprakash1@gmail.com</p>
                        </div></a>
                        <a href="tel:+917838415991"><div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91-7838415991</p>
                        </div></a>
                        <a href="https://www.linkedin.com/in/kartikprakash1" target='_blank'><div className="contact-detail">
                            <img className='linkedin' src={linkedin_white} alt="" />
                            <p>@kartikprakash1</p>
                        </div></a>
                        <a href="https://github.com/kartikprakash00" target='_blank'><div className="contact-detail">
                            <img className='linkedin' src={github_white} alt="" />
                            <p>@kartikprakash00</p>
                        </div></a>
                        <a href="https://maps.app.goo.gl/Wx6Auji2QCaQfaf56" target='_blank'><div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>New Delhi, India</p>
                        </div></a>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-form'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter you name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button className='contact-submit' type="submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
