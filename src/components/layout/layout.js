/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../../assets/styles/styles.scss"
import "./layout.scss"

import Header from "../header/header"
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
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
