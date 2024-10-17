import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-sections">
                <div className="skills-left">
                    <div className="skill_image">
                        <img src="https://img.shields.io/badge/React%20-61DBFB?style=for-the-badge&logo=react&logoColor=black" alt="" />
                        <img src="https://img.shields.io/badge/Node%20JS%20-5cac47?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/express%20js-black?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="" />
                        <img src="https://img.shields.io/badge/TypeScript%20-3077C4?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Angular%20-E23236?style=for-the-badge&logo=angular&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/MongoDB%20-3e9c38?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/PYTHON-yellow?style=for-the-badge&logo=python&logoColor=%230A9DBE" alt="" />
                        <img src="https://img.shields.io/badge/Jupyter-%23eaeaea?style=for-the-badge&logo=jupyter" alt="" />
                        <img src="https://img.shields.io/badge/language-lightblue?style=for-the-badge&logo=c&logoColor=%2301549E" alt="" />
                        <img src="https://img.shields.io/badge/C%2B%2B-lightblue?style=for-the-badge&logo=cplusplus&logoColor=%2301549E" alt="" />
                        <img src="https://img.shields.io/badge/MySQL%20-5382a0?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/GIT%20-f04f30?style=for-the-badge&logo=git&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/GitHub%20-011d35?style=for-the-badge&logo=github&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/TAILWINDCSS-gray?style=for-the-badge&logo=tailwindcss" alt="" />
                        <img src="https://img.shields.io/badge/bootstrap-%236E2CF4?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Postman%20-FF6C38?style=for-the-badge&logo=postman&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Figma%20-a159ff.svg?style=for-the-badge&logo=figma&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Visual%20Studio%20Code%20-198ad2?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/scilab-black?style=for-the-badge&logo=scilab" alt="" />
                        <img src="https://img.shields.io/badge/Adobe%20Premier%20Pro%20-00005a?style=for-the-badge&logo=adobepremierepro&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Adobe%20Photoshop%20-011d35?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/Adobe%20Illustrator%20-fe9a00?style=for-the-badge&logo=adobeillustrator&logoColor=white" alt="" />
                    </div>
                </div>
                <div className='skills-right'>
                    <p>As a full stack web developer, I bring a diverse skill set that enables me to efficiently build, manage, and deploy a wide range of web applications.</p>
                    <p>I have experience working with databases like MySQL and MongoDB, where I write queries to efficiently retrieve and store data.
                        I'm well-versed in the full development and deployment process, utilizing tools like Git for version control and platforms
                        like Netlify or Vercel for smooth deployment of applications.</p>
                    <p>I recognize the significance of user experience in web design and follow best practices like mobile-first and responsive design.
                        I've worked on projects involving API development and integration, along with building user authentication and authorization systems for secure access control.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
