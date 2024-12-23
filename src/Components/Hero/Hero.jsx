import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="profile-container">
          <img src={profile_img} alt="Profile" className="profile-img" />
          <div className="rotating-border">
        </div>
      </div>
      <h1>
        <span> I am Yutheshtrran,</span> a Computer Engineer based in Sri Lanka
      </h1>
      <p>
        Crafting innovative solutions with experience in 50+ projects spanning healthcare, social media, and software development.
      </p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
