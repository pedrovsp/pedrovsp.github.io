import React from "react"
import "./footer.scss"
import Github from "../assets/icons/github.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import { Link } from 'gatsby'

const Footer = () => (
  <footer className='footer'>
    <Link to="https://github.com/pedrovsp" target="_blank">
      <Github />
    </Link>
    <Link to="https://linkedin.com/in/pedrovsp" target="_blank">
      <Linkedin />
    </Link>
  </footer>
)

export default Footer
