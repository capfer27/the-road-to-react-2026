import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const welcome = {
  greeting: 'Hey',
  title : 'React'
}

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div >
      <h1>
        {welcome.greeting} {welcome.title}. {getTitle('This is a new custom title')}
      </h1>

      <label htmlFor="search"> Search: </label>
      <input type="text" id='search'/> 
    </div>
  );
}

export default App
