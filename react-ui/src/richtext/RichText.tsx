import React, { Fragment } from 'react';
import Icon from '../icon/Icon';


interface RichTextProps {
  children: string;
}

function parseIcons(text: string) {
  let isIcon : boolean = false;
  const [phrases, icons] = text?.split(/(\[|\])/).reduce((acc: Array<Array<string>>, token:string, index:number) => {
    const [phrases, icons] = acc;
    if (token === '[') {
      isIcon = true;
      return acc;
    }
    if (token === ']') {
      isIcon = false;
      return acc;
    }
    if (!isIcon) {
      return [[...phrases, token], icons];
    } else {
      return [phrases, [...icons, token]];
    }
  }, [[],[]]);
  return [phrases, icons];
}

export default function RichText(props: RichTextProps) {
  const [phrases, icons] = parseIcons(props.children);
  
  const output = phrases.reduce((acc:Array<any>, phrase:string, index) => {
    const {
      [index]: icon = null
    } = icons;
    if (!icon) {
      return [...acc, phrase];
    }
    return [...acc, phrase, <Icon name={icon} />];
  }, [])
  return (<Fragment>
    {output}
  </Fragment>)
}
