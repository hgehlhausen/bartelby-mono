import React from 'react';
import { selectCardQueue } from '../store/selectors';
import Card, { CardProps } from '../card/Card';
import { useSelector } from '../store/store'
import './Preview.css';

interface PreviewProps {}

export default function Preview(props: PreviewProps) {
  const queue = useSelector(selectCardQueue);
  return <div className="Preview">
    {queue.map((data: CardProps) => <Card {...data} removable />)}
  </div>;
}