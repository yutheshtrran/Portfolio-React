import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <img src={footer_logo} alt="Logo" style={{ width: "150px", height: "auto" }}/>
            <p>I am a computer enginner from srilanka with many experience</p>
          </div>
          <div className='footer-top-right'>
          <div className='footer-email-input'>
               <img src={user_icon} alt='User Icon' />
                  <input type='email' placeholder='Enter your email' />
              </div>
            <div className='footer-subscribe'>Subscribe</div>
          </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>2024 YS creations. All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
