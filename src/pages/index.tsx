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
import { useTranslation } from "react-i18next";


const IndexPage = () => {
	const { t, i18n } = useTranslation('Index');

	return (
	<Layout>
		<SEO title="Pedro Vitorino Home page" description="Pedro vitorino personal home page" lang={i18n.language} />
		<section id="home">
			<H1 title={t('home.title')} emoji='👋' />
			<Par marginBottom={true}>
				{t('home.p1')}
			</Par>
			<div className='d-flex align-center mb-lg'>
				<Par>
					{t('home.p2')}
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
					{t('home.p3')}
				</Par>
			</div>
		</section>
		<section id="work">
			<div className='d-flex align-center mb-md'>
				<div className='fig-3'>
					<Geoform type={'pacman'} size={'lg'}></Geoform>
				</div>
				<H1 title={t('work.title')} emoji='💼' />
			</div>
			<Par marginBottom={true}>
				{t('work.p1.pt1')}<a href='https://socialbank.com.br' target="_blank" rel="noreferrer">Social Bank</a>{t('work.p1.pt2')}
			</Par>
			<div className="top-box-border" />
			<BoxList boxType='top'>
				<H2 title={t('work.l1.title')} emoji='🔧' />
				<H3 title='Frontend' />
				<ul>
					<li>Angular / Material / Angular Elements</li>
					<li>React / Styled Components / Gatsby</li>
					<li>Redux / RxJS</li>
					<li>Typescript / Javascript</li>
					<li>SASS / CSS / HTML</li>
				</ul>
				<H3 title='Backend' />
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
				<H2 title={t('work.l2.title')} emoji='🤔' />
				<p className='subtitle'>
				{t('work.l2.subtitle')}
				</p>
				<ul>
					<li>TDD / BDD</li>
					<li>Docker / Kubernets</li>
					<li>A11y</li>
					<li>Web components</li>
				</ul>
			</BoxList>
			<div className='fig-4'>
				<Geoform type={'circle'} size={'lg'}></Geoform>
			</div>
		</section>
		<section id="education">
			<H1 title={t('education.title')} emoji='🎓' />
			<Par marginBottom={true}>
				{t('education.p1')}
			</Par>
			<div className='d-flex align-center mb-lg'>
				<div className='fig-5'>
					<Geoform type={'triangle'} size={'sm'}></Geoform>
				</div>
				<Par>
				{t('education.p2.pt1')}<strong>Python</strong>{t('education.p2.pt2')}
				</Par>
			</div>
		</section>
		<section id="content">
			<H1 title={t('content.title')} emoji='💭' />
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
	</Layout>)
}

export default IndexPage
