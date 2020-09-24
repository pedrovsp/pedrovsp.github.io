import React from 'react'
import { useTranslation } from 'react-i18next';
import './content-box.scss'
interface ContentBoxProps {
  title: string;
  type: 'article' | 'talk' | 'project';
  content: string;
  url: string;
}

export const ContentBox = (props: ContentBoxProps) => {

	const { t, i18n } = useTranslation('Contents');

  const navigateToURL = (): void => {
    window.open(props.url);
  }

  const getEmoji = (): string => {
    switch(props.type) {
      case 'article': return '📝';
      case 'project': return '⚗';
      case 'talk': return '💬';
      default: return '';
    }
  }

  return (
    <div className='contentBox' onClick={() => navigateToURL()}>
      <div className='contentBox__Title'>
        <span>{t(props.title)}</span>
        <span className='contentBox__Title_emoji'>{getEmoji()}</span>
      </div>
      <div className='contentBox__Content'>
        <span>{t(props.content)}</span>
      </div>
    </div>
  )
}
