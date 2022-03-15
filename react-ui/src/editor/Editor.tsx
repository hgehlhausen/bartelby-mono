import React from 'react';
import { useDispatch } from '../store/store';

interface EditorProps {}

export default function Editor(props: EditorProps) {
  const dispatch = useDispatch();
  
  function appendBody(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: 'pushCard' });
    return undefined;
  }
  
  return <form onSubmit={appendBody} className="Editor">
    <fieldset>
      <legend>Edit Card</legend>
      Title: <input type="string" name="title" id="editor-title"
        onChange={(e) => {
          dispatch({ type: 'setActiveTitle', payload: e.target.value})
        }}
      /><br />
      Bar: <input type="string" name="bar" id="editor-bar"
      onChange={(e) => {
        dispatch({ type: 'setActiveBar', payload: e.target.value})
      }}
       /><br />
      Rules: <textarea name="rules" id="editor-rules" 
      onChange={(e) => {
        dispatch({ type: 'setActiveRule', payload: e.target.value})
      }}
      /><br />
      Art URL: <input 
      onChange={(e) => {
        dispatch({ type: 'setActiveImageUrl', payload: e.target.value})
      }}
      type="string" name="url" /><br />
      <input type="submit" value="Add to Sheet" />
    </fieldset>
  </form>
}