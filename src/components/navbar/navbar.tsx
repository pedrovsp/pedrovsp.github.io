import { Link } from "gatsby"
import React from "react"
import "./navbar.scss"

const Navbar = () => (
  <nav className='navbar'>
    <div>
      <Link to="#">
        <span className='emoji'>🏠</span>
        <span className='text'>início</span>
      </Link>
      <Link to="#work">
        <span className='emoji'>💼</span>
        <span className='text'>profissional</span>
      </Link>
      <Link to="#education">
        <span className='emoji'>🎓</span>
        <span className='text'>acadêmico</span>
      </Link>
      <Link to="#content">
        <span className='emoji'>📖</span>
        <span className='text'>conteúdos</span>
      </Link>

    </div>
  </nav>
)

export default Navbar
