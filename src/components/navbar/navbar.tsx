import { Link } from "gatsby"
import React from "react"
import "./navbar.scss"
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation('Navbar');
  return (<nav className='navbar'>
    <div>
      <Link to="#">
        <span className='emoji'>🏠</span>
        <span className='text'>{t('home')}</span>
      </Link>
      <Link to="#work">
        <span className='emoji'>💼</span>
        <span className='text'>{t('work')}</span>
      </Link>
      <Link to="#education">
        <span className='emoji'>🎓</span>
        <span className='text'>{t('education')}</span>
      </Link>
      <Link to="#content">
        <span className='emoji'>📖</span>
        <span className='text'>{t('content')}</span>
      </Link>

    </div>
  </nav>)
}

export default Navbar
