import React from 'react';
import './style.css';

interface IconProps {
  name: string;
}

export default function Icon(props: IconProps) {
  return <span className={`icon icon-${props.name}`} />
}
