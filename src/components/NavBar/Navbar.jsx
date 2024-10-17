import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-420px";
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', offset: document.getElementById('home').offsetTop },
                { id: 'about', offset: document.getElementById('about').offsetTop },
                { id: 'skills', offset: document.getElementById('skills').offsetTop },
                { id: 'projects', offset: document.getElementById('projects').offsetTop },
                { id: 'contact', offset: document.getElementById('contact').offsetTop }
            ]

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = 0; i < sections.length; i++) {
                if (
                    scrollPosition >= sections[i].offset &&
                    (i === sections.length - 1 || scrollPosition < sections[i + 1].offset)
                ) {
                    setMenu(sections[i].id);
                    break;
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const reload = () => {
        window.location.reload()
    }

    return (
        <div className='navbar'>
            <div className="nav-name" onClick={reload}>
                <h2>Kartik</h2>
                <img src={theme_pattern} alt="" />
            </div>
            <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
                <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ? <img src={underline} alt='' /> : <></>}</li>
                <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} alt='' /> : <></>}</li>
                <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
        </div>
    )
}

export default Navbar
