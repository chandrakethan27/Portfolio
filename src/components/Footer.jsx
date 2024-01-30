import React from 'react';
import {
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram
  } from 'react-icons/fa';
import { FaMedium} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    
<div className='bg-[#0a192f]  w-full '>
<hr className="border-t border-white " />
    <div className='flex gap-4 lg:gap-12 text-white text-3xl justify-center pb-10 pt-7 '>
      <a
              className='hover:text-purple-600'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/chandrakethan-sivarathri-a90924219/'
        >
        <FaLinkedin />
        </a>
        <a    className='hover:text-purple-600'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/chandrakethan27'>
        <FaGithub />
        </a>
        <a    className='hover:text-purple-600'
              target='_blank'
              rel='noopener noreferrer'
              href='https://medium.com/@s.chandrakethan9'>
        <FaMedium />
        </a>
        <a className='hover:text-purple-600'
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/chandrakethan27'> 
            <BsTwitterX />
        </a>
        <a className='hover:text-purple-600'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/decode_with_kethan/'> 
            <FaInstagram />
        </a>
    </div>
    <div className='text-white flex justify-center pb-10'>
    © 2023 - present Chandrakethan Sivarathri
    </div>
</div>
  );
};

export default Footer;
