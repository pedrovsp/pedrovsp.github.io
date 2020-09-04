import React from "react"
import './index.scss';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { H1, H2, H3 } from '../components/title/title'
import { Par } from "../components/paragraph/paragraph"
import { BoxList } from '../components/box-list/box-list'
import { ContentBox } from '../components/content-box/content-box';

const contents: {  title: string; type: 'article' | 'talk' | 'project'; content: string; url: string;}[] = [
  { type: 'article', title: 'O minimo sobre Git', url:'https://www.google.com', content:'sometings'},
  { type: 'article', title: 'O minimo sobre Git', url:'https://www.google.com', content:'sometings'},
  { type: 'article', title: 'O minimo sobre Git', url:'https://www.google.com', content:'sometings'},
];

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
        Hoje atuo como desenvolvedor frontend no <a href='https://socialbank.com.br' target="_blanck" rel="noreferrer">Social Bank</a>. Trabalho principalmente com o framework Angular. Tambem ja atuei com desenvolvimento backend com a linguagem Java e C#. Alem disso ja trabalhei
      </Par>
      <BoxList boxType='top'>
        <H2 title='Principais ferramentas' emoji='🔧' />
        <H3 title='Front end' />
        <ul>
          <li>Angular / Material / Angular Elements</li>
          <li>Micro front ends</li>
          <li>Typescript / Javascript / RxJS</li>
          <li>SASS / CSS</li>
          <li>HTML</li>
          <li>React / Styled Components / Redux</li>
        </ul>
        <H3 title='Back end' />
        <ul>
          <li>Angular / Material / Angular Elements</li>
          <li>Micro front ends</li>
          <li>Typescript / Javascript / RxJS</li>
        </ul>
        <H3 title='Infra' />
        <ul>
          <li>Angular / Material / Angular Elements</li>
          <li>Micro front ends</li>
          <li>Typescript / Javascript / RxJS</li>
        </ul>
      </BoxList>
      <BoxList boxType='bottom'>
        <H2 title='Areas de interesse' emoji='🤔' />
        <p className='subtitle'>
          Tenho interesse de trabalhar mais algumas habilidades, dentre elas:
        </p>
        <ul>
          <li>Angular / Material / Angular Elements</li>
          <li>Micro front ends</li>
          <li>Typescript / Javascript / RxJS</li>
          <li>Typescript / Javascript / RxJS</li>
        </ul>
      </BoxList>
    </section>
    <section id="education">
      <H1 title='Formacao academica' emoji='🎓' />
      <Par>
        Especialista em Analise e Desenvolvimento de Sistemas para Gestao de Negocios pelo Instituto Federal do Triangulo Mineiro. Alem disso sou bacharel em Sistemas de Informaçao pela Universidade Federal de Uberlandia.
      </Par>
      <Par>
      Como trabalho de conclusao da pos graduacao utilizei <strong>Python</strong> e tecnicas de analise de dados para gerar um perfil de reprovacao dos alunos de computacao do Brasil.
      </Par>
    </section>
    <section id="contents">
      <H1 title='Projetos pessoais' emoji='💭' />
      {
        contents.map((content, i) => 
          (<ContentBox key={i} type={content.type} title={content.title} content={content.content} url={content.url}/>))
      }
    </section>
	</Layout>
)

export default IndexPage
