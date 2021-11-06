import React from 'react'
import { SiSwiggy } from 'react-icons/si'
import { FaFacebookF, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-pt2'>
                <div className='icon'><SiSwiggy /></div>
                <div className='swiggy-text'>Swigyy</div>
            </div>
            <div>
                © 2021 Swigyy
            </div>
            <div className='social'>
                <span><FaFacebookF/></span>
                <span><FaPinterest/></span>
                <span><FaInstagram/></span>
                <span><FaTwitter/></span>
            </div>
        </div>
    )
}

export default Footer
