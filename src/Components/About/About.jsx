import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <hi>About me</hi>
        <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
            <img src={profile_img} alt="" style={{ width: "350px", height: "auto" }} />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>"As a Computer Engineer, I specialize in software development, system architecture, and emerging technologies like computer vision and machine learning. With expertise in languages such as Python, C/C++, and JavaScript, I am passionate about solving complex problems and creating innovative solutions."</p>
                    <p>"As a Computer Engineer, I am dedicated to leveraging my skills in software development and cutting-edge technologies to create impactful solutions and drive innovation."</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & </p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>React JS</p> <hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Java</p> <hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>Next JS</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
         </div>
         <div className='about-achievements'>
          <div className='about-achievement'>
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className='about-achievement'>
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className='about-achievement'>
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
         </div>
    </div>
  )
}

export default About
