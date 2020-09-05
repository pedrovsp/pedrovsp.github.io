import React, { ReactPropTypes } from 'react'
import './paragraph.scss'

interface ParagraphProps {
	marginBottom?: boolean;
}

export const Par: React.FunctionComponent<ParagraphProps> = (props) => {
	const classList = ['par'];
	if (props.marginBottom) classList.push('mb-lg');
	return (
		<p className={classList.join(' ')}>
			{props.children}
		</p>
	)
}
