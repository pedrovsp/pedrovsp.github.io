import React from 'react'
import './title.scss'

interface TitleProps {
	title: string;
	emoji?: string;
}

export const H1 = (props: TitleProps) => {
	return (
		<h1 className='title'>
			<span className='text'>
				{props.title}
			</span>
			<span className='emoji'>
				{props.emoji}
			</span>
		</h1>
	)
}

export const H2 = (props: TitleProps) => {
	return (
		<h2 className='title'>
			<span className='text'>
				{props.title}
			</span>
			<span className='emoji'>
				{props.emoji}
			</span>
		</h2>
	)
}

export const H3 = (props: TitleProps) => {
	return (
		<h3 className='title'>
			<span className='text'>
				{props.title}
			</span>
			<span className='emoji'>
				{props.emoji}
			</span>
		</h3>
	)
}
