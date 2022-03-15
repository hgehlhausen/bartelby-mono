import React, { Fragment } from 'react';

import RichText from '../richtext/RichText';

import './Card.css';

export interface CardProps {
  title: string;
  rule: string;
  imageUrl?: string;
  bar?: string;
}

export default function Card(props: CardProps) {
  const {
    title,
    imageUrl = '',
    rule = '',
    bar = '',
  } = props;
  return (<Fragment>
    <div className="Card" style={{
      backgroundImage: `url(${imageUrl})`,
    }}>
      <div className="title"><RichText>{title}</RichText>
      </div>
      <div className="bar">
        <RichText>{bar}</RichText>
      </div>
      <div className="rule">
        <RichText>{rule}</RichText>
      </div>
    </div>
  </Fragment>)
}