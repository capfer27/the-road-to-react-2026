import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const numbers = [1, 2 , 3, 4, 5];

const exponentialNumbers = numbers.map(number => {
    return number * number;
});

// console.log(exponentialNumbers)

const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My hacker Stories</h1>
      <Search /> 

        <hr />
      
      <List />
    </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id='search' />
    </div>
  );
}

function List() {
  return (
    <div>
        <ul>
          {list.map(item => {
            return (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li>
            );
          })}
        </ul>
    </div>
  );
  
}

export default App
