import React from "react"
import './index.scss';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { H1, H2, H3 } from '../components/title/title'
import { Par } from "../components/paragraph/paragraph"
import { BoxList } from '../components/box-list/box-list'
import { ContentBox } from '../components/content-box/content-box';
import { Geoform } from "../components/geoform/geoform";
import { contents } from "../helpers/contents";


const IndexPage = () => (
	<Layout>
		<SEO title="Pedro Vitorino" />
		<section id="home">
			<H1 title='Fala pessoal, blz?' emoji='👋' />
			<Par marginBottom={true}>
				Meu nome é Pedro Vitorino, sou programador e atuo principalmente com desenvolvimento front end. Entrei no mundo da tecnologia em 2009, ano em que tive meu primeiro contato com programação e comecei a me desenvolver na área.
			</Par>
			<div className='d-flex align-center mb-lg'>
				<Par>
					Sou um entusiasta do universo da programação, nos últimos anos tenho me especializado em desenvolvimento front end, mas matenho o hábito de explorar outras áreas, principalmente arquitetura de sistemas, design de código e DevOps.
				</Par>
				<div className='fig-1'>
					<Geoform type={'triangle'} size={'lg'}></Geoform>
				</div>
			</div>
			<div className='d-flex align-center mb-lg'>
				<div className='fig-2'>
					<Geoform type={'rectangle'} size={'sm'}></Geoform>
				</div>
				<Par>
					Acredito que as comunidades de tecnologia são um excelente espaço de colaboração e por isso participo ativamente de eventos e meetups. Recemente comecei a criar palestras e textos sobre tecnologias que utilizo.
				</Par>
			</div>
		</section>
		<section id="work">
			<div className='d-flex align-center mb-md'>
				<div className='fig-3'>
					<Geoform type={'pacman'} size={'lg'}></Geoform>
				</div>
				<H1 title='Com o que trabalho?' emoji='💼' />
			</div>
			<Par marginBottom={true}>
				Hoje atuo como desenvolvedor front end no <a href='https://socialbank.com.br' target="_blank" rel="noreferrer">Social Bank</a>. Nos últimos anos tenho trabalhado principalmente com o framework Angular, porém tenho interesse em todo ecossistema Javascript, e estudo outros frameworks e tecnologias, principalmente React.
			</Par>
			<div className="top-box-border" />
			<BoxList boxType='top'>
				<H2 title='Principais ferramentas' emoji='🔧' />
				<H3 title='Front end' />
				<ul>
					<li>Angular / Material / Angular Elements</li>
					<li>React / Styled Components / Gatsby</li>
					<li>Redux / RxJS</li>
					<li>Typescript / Javascript</li>
					<li>SASS / CSS / HTML</li>
				</ul>
				<H3 title='Back end' />
				<ul>
					<li>Java / Spring / Hibernate</li>
					<li>Relational DBs / DynamoDB / MongoDB</li>
				</ul>
				<H3 title='DevOps' />
				<ul>
					<li>AWS / EC2 / RDS / S3</li>
					<li>Azure pipelines / API Management</li>
					<li>Github / Git Actions</li>
				</ul>
			</BoxList>
			<BoxList boxType='bottom'>
				<H2 title='Áreas de interesse' emoji='🤔' />
				<p className='subtitle'>
					Tenho interesse de desenvolver mais algumas habilidades, dentre elas:
				</p>
				<ul>
					<li>TDD / BDD</li>
					<li>Docker / Kubernets</li>
					<li>Acessibilidade (a11y)</li>
					<li>Web components</li>
				</ul>
			</BoxList>
			<div className='fig-4'>
				<Geoform type={'circle'} size={'lg'}></Geoform>
			</div>
		</section>
		<section id="education">
			<H1 title='Formação acadêmica' emoji='🎓' />
			<Par marginBottom={true}>
				Especialista em Análise e Desenvolvimento de Sistemas para Gestão de Negócios pelo Instituto Federal do Triângulo Mineiro. Bacharel em Sistemas de Informação pela Universidade Federal de Uberlândia.
			</Par>
			<div className='d-flex align-center mb-lg'>
				<div className='fig-5'>
					<Geoform type={'triangle'} size={'sm'}></Geoform>
				</div>
				<Par>
					Como trabalho de conclusão da pós-graduação, utilizei <strong>Python</strong> e técnicas de análise de dados para traçar o perfil dos alunos que desistem de cursos computação no Brasil.
				</Par>
			</div>
		</section>
		<section id="content">
			<H1 title='Projetos pessoais' emoji='💭' />
			<div className='fig-6'>
				<Geoform type={'decagon'} size={'lg'}></Geoform>
			</div>
			{
				contents.map((content, i) =>
					(<ContentBox key={i}
						type={content.type}
						title={content.title}
						content={content.content}
						url={content.url} />))
			}
		</section>
	</Layout>
)

export default IndexPage
