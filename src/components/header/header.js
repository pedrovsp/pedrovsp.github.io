import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import Github from "../../assets/icons/github.svg"
import Linkedin from "../../assets/icons/linkedin.svg"

const Header = ({ siteTitle }) => (
  <header className='header'>
    <span className='title'>
      {siteTitle}
    </span>
    <div className='icons'>
      <Link to="https://github.com/pedrovsp" target="_blank">
        <Github />
      </Link>
      <Link to="https://linkedin.com/in/pedrovsp" target="_blank">
        <Linkedin />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
