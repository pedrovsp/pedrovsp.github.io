import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { H1 } from '../components/title/title'
import { Par } from "../components/paragraph/paragraph"
import { Link } from "gatsby"

const IndexPage = () => (
	<Layout>
		<SEO title="Pedro Vitorino" />
    <section id="home">
      <H1 title='Fala pessoal, blz?' emoji='👋' />
      <Par>
        Meu nome e Pedro e sou desenvolvedor frontend. Estou no mundo da tencologia desde 2009, e mais recentemente tenho me aprofundado no universo frontend.
      </Par>
      <Par>
        Sou entusiasta do universo da programaçao, e nos ultimos anos tenho desenvolvido grande interesse por arquitetura front end e design de codigo.
      </Par>
      <Par>
        Tenho muito interesse nas comunidades e participo ativamente de eventos, meetups e outra atividades. Tenho escrevido palestras sobre minhas experiencias
      </Par>
    </section>
    <section id="work">
      <H1 title='Com o que trabalho' emoji='💼' />
      <Par>
        Hoje atuo como desenvolvedor frontend no <Link to='https://socialbank.com.br'>Social Bank</Link>. Trabalho principalmente com o framework Angular. Tambem ja atuei com desenvolvimento backend com a linguagem Java e C#. Alem disso ja trabalhei
      </Par>
    </section>
	</Layout>
)

export default IndexPage
