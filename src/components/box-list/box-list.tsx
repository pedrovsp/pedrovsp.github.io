import React from 'react';
import './box-list.scss';

interface BoxListProps {
  boxType: 'top' | 'bottom'
}

export const BoxList: React.FunctionComponent<BoxListProps> = (props) => {
  return (
    <div className={'boxList ' + props.boxType}>
      <div className={'boxList__content'}>
        {props.children}
      </div>
    </div>
  )
}
