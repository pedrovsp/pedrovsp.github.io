import React from 'react'
import './geoform.scss';

interface GeoformProps {
  type: 'triangle' | 'circle' | 'pacman' | 'hexagon' | 'rectangle';
  size: 'sm' | 'md' | 'lg';
}

export const Geoform = (props: GeoformProps) => {

  const classes = ['geoform', props.size, props.type].join(' ')

  return (
    <div className={classes}  />
  )
}
