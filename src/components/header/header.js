import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import Github from "../../assets/icons/github.svg"
import Linkedin from "../../assets/icons/linkedin.svg"

const Header = ({ siteTitle }) => (
  <header className='header'>
    <span className='header__title'>
      {siteTitle}
    </span>
    <div className='header__icons'>
      <a href="https://github.com/pedrovsp" target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a href="https://linkedin.com/in/pedrovsp" target="_blank" rel="noreferrer">
        <Linkedin />
      </a>
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
