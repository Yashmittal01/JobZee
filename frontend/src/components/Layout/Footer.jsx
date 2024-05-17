import React, { useContext } from 'react'
import {Context} from '../../main'
import { Link } from 'react-router-dom'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  const {isAuthorized} = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
     <div>&copy; All Rights Reserved By Yash Mittal</div>
      <div>
     <Link to={'https://github.com/'} target='_blank'><FaGithub/></Link>
     <Link to={'https://www.linkedin.com/in/yash-mittal-0b2181229/'} target='_blank'><FaLinkedin/></Link>
     <Link to={'https://www.instagram.com/_yash_mittal._/'} target='_blank'><RiInstagramFill/></Link>
      </div>
    </footer>
  )
}

export default Footer
