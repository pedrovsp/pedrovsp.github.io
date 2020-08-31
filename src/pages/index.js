import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { H1 } from '../components/title/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Pedro Vitorino" />
    <H1 title='Fala pessoal, blz?' emoji='👋'></H1>
  </Layout>
)

export default IndexPage
