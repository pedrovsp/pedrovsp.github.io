import React, { ReactPropTypes } from 'react'
import './paragraph.scss'

interface ParagraphProps {
}

export const Par: React.FunctionComponent<ParagraphProps> = (props) => {
	return (
		<p className='par'>
			{props.children}
		</p>
	)
}
