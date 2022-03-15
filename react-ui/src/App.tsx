import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './card/sword.jpg';

import Card from './card/Card';
import Preview from './preview/Preview';
import Editor from './editor/Editor';
import useStore, { useSelector } from './store/store';
import {
  selectActiveTitle,
  selectActiveRule,
  selectActiveBar,
  selectActiveImageUrl,
} from './store/selectors';

function App() {
  useStore();
  const title = useSelector(selectActiveTitle);
  const rule = useSelector(selectActiveRule);
  const bar = useSelector(selectActiveBar);
  const imageUrl = useSelector(selectActiveImageUrl);
  return (
    <div className="App">
      <Editor />
      <Card
        imageUrl={imageUrl}
        title={title}
        bar={bar}
        rule={rule}
      />
      <Preview />
    </div>
  );
}

export default App;
