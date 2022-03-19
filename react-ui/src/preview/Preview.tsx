import React from 'react';
import { selectCardQueue } from '../store/selectors';
import Card, { CardProps } from '../card/Card';
import { useSelector } from '../store/store'

import './Preview.css';

interface PreviewProps {}

export default function Preview(props: PreviewProps) {
  const queue = useSelector(selectCardQueue);
  
  function print3x3(cards: Array<CardProps>) {
    const pages = [];
    for( let i = 0; i< cards.length; i+=9) {
      let children = cards.slice(i, i+9);
      pages.push(<div className="page">
        {children.map((data: CardProps) => <Card {...data} removable />)}
      </div>);
    }
    return pages;
  }

  return (<div className="Preview">
    {print3x3(queue)}
  </div>);
}