import React from 'react'

import { FaRegCopyright } from 'react-icons/fa'
import {AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'


function Footer() {
    return (
        <div>
            <h6  className="  postion-realtive fixed shadow-lg p-5  mt-5 mb-0 container-fluid bg-dark text-center text-light"> <FaRegCopyright/> 2021 ThouhtBook WebSite Designed By ArpitBodana . <br/> Follow -<a href='https://github.com/ArpitBodana'><AiFillGithub size='5vh' /></a>  <a href='https://www.instagram.com/its_trick_master/'><AiOutlineInstagram size='5vh' /></a></h6>
            
        </div>
    )
}

export default Footer
