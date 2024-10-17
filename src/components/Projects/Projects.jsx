import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="proj-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="proj-container">
                {
                    mywork_data.map((work, index) => {
                        return (
                            <div className='proj-image' key={index} onClick={() => work.w_url && window.open(work.w_url, '_blank')}>
                                <img className='image' src={work.w_img} alt="" />
                                <div className='proj-details'>
                                    <h3>{work.w_name}</h3>
                                    <p>{work.w_desc}</p>
                                    <div className="tech-images">
                                        {Object.keys(work.w_tech).map((tech, techIndex) => (
                                            <img key={techIndex} src={work.w_tech[tech]} alt={tech} />
                                        ))}
                                    </div>
                                    {work.w_code && (
                                        <button
                                            className="source-code-button"
                                            onClick={() => window.open(work.w_code, '_blank')}>
                                            Source Code
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
