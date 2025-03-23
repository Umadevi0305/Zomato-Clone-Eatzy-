import './Footer.css';
import React from 'react';
import { MdRestaurant } from 'react-icons/md';  // Importing restaurant icon
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { TfiFacebook } from 'react-icons/tfi';
import { TbBrandGithub } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <a href='/' className='footer-logo'>
                    <MdRestaurant className="logo-icon" />  {/* Added icon before Eatzy */}
                    <span className="logo-text">Eatzy</span>
                </a>

        
                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/dipayanmaji/' target='_blank'><ImLinkedin2 /></a>
                    <a href='https://github.com/dipayanmaji' target='_blank'><TbBrandGithub /></a>
                    <a href='https://twitter.com/dipayanmaji11' target='_blank'><BsTwitter /></a>
                    <a href='https://www.instagram.com/dipayan.maji/' target='_blank'><BsInstagram /></a>
                    <a href='https://www.facebook.com/dip.ayan.716' target='_blank'><TfiFacebook /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
