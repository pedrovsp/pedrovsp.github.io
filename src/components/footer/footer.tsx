import React from "react"
import "./footer.scss"
import Github from "../../assets/icons/github.svg"
import Linkedin from "../../assets/icons/linkedin.svg"

const Footer = () => (
  <footer className='footer'>
    <a href="https://github.com/pedrovsp" target="_blank" rel="noreferrer" aria-label="Github Profile">
      <Github />
    </a>
    <a href="https://linkedin.com/in/pedrovsp" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
      <Linkedin />
    </a>
  </footer>
)

export default Footer
