import React from 'react';
import './App.css';

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
      <div className="controls">
      <Editor />
      <div className="activeCard">
      <Card
        imageUrl={imageUrl}
        title={title}
        bar={bar}
        rule={rule}
      />
      </div>
      </div>
      <div className="content"><Preview /></div>
    </div>
  );
}

export default App;
