import React, { Fragment } from 'react';
import {v4 as uuid} from 'uuid';
import { useDispatch } from '../store/store';
import RichText from '../richtext/RichText';

import './Card.css';
import Icon from '../icon/Icon';

export interface CardProps {
  title: string;
  rule: string;
  imageUrl?: string;
  bar?: string;
  id?: string;
  removable?: boolean,
}

export default function Card(props: CardProps) {
  const {
    id = uuid(),
    removable = false,
    title,
    imageUrl = '',
    rule = '',
    bar = '',
  } = props;
  const dispatch = useDispatch();

  function removeCard() {
    dispatch({ type: 'removeCard', payload: id });
  }

  const x = '\u274C'
  
  return (<Fragment>
    <div className="Card" style={{
      backgroundImage: `url(${imageUrl})`,
    }}>
      { removable && (<a href="#" className={'topRightIcon'} onClick={removeCard}>{x}</a>)}
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