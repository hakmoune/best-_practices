import React, { useState } from 'react';
import './App.css';
import Test from './test';

type TUser = {
  name: string;
  lastname: string;
};

export type TState = TUser[];

type TPost = {
  name: string;
  num: number;
}

function App() {
  const [state, setState] = useState<TState>([])
  const [post, setPost] = useState<TPost | null>(null)



  return (
    <div className="App">
      <Test state={state} />
      {state.map(s => <li>{s.name}</li>)}
      {post?.name}
      <Clicked />
    </div>
  );
}

export default App;

const Clicked = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  console.log("console", isClicked)

  return (
    <button onClick={() => setIsClicked(!isClicked)}>Click me!</button>
  )
}
