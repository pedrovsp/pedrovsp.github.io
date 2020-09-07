/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import "./layout.scss"
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import "../../assets/styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header siteTitle='PEDRO VITORINO' />
      <Navbar />
      <main>
        {children}
      </main>
        <small>
          Desenvolvindo por <strong>Pedro Vitorino</strong>. 😀
        </small>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
