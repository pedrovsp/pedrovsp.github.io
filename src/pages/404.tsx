import React from "react"
import { useTranslation } from "react-i18next";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const { t, i18n } = useTranslation('404');

  return (
  <Layout>
    <SEO title="404: Not found" description="Fallback not found page" lang={i18n.language} />
    <h1>{t('title')}</h1>
    <p>{t('content')}</p>
  </Layout>)
}

export default NotFoundPage
