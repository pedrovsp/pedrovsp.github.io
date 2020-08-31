import { Link } from "gatsby"
import React from "react"
import "./navbar.scss"

const Navbar = () => (
  <nav className='navbar'>
      <Link to="#home" target="_blank">
        <span className='emoji'>🏠</span>
        <span className='text'>início</span>
      </Link>
      <Link to="https://linkedin.com/in/pedrovsp" target="_blank">
        <span className='emoji'>💼</span>
        <span className='text'>profissional</span>
      </Link>
      <Link to="https://linkedin.com/in/pedrovsp" target="_blank">
        <span className='emoji'>🎓</span>
        <span className='text'>acadêmico</span>
      </Link>
      <Link to="https://linkedin.com/in/pedrovsp" target="_blank">
        <span className='emoji'>📖</span>
        <span className='text'>conteúdos</span>
      </Link>
  </nav>
)

export default Navbar
