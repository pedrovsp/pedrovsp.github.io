/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from 'react-i18next';

import "../../assets/styles/styles.scss"
import "./layout.scss"
import "../../helpers/i18n"

import Header from "../header/header"
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import { LanguageSwitcher } from "../language-picker/language-picker";

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation('Layout');

  return (
    <React.Fragment>
      <Header siteTitle='PEDRO VITORINO' />
      <Navbar />
      <LanguageSwitcher />
      <main>
        {children}
      </main>
      <small>
        {t("footer")} <strong>Pedro Vitorino</strong>. 😀
      </small>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
