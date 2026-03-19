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

const App = () => {

  const stories = [
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

  return (
    <div>
      <h1>My hacker Stories</h1>
      <Search /> 

        <hr />
      
      <List list={stories}/>
    </div>
  );
}

const Search = () => {
  // perform a task in between
  const handleChange = (event) => {
    event.preventDefault();
    console.log('Event:' + event);

    console.log('Event Target Value: ' + event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onClick={handleChange} type="text" id='search' />
    </div>
  );
}

const Item = (props) => {
  return (
      <li>
          <span>
            <a href={props.item.url}>{props.item.title}</a>
          </span>
          <span>{props.item.author}</span>
          <span>{props.item.num_comments}</span>
          <span>{props.item.points}</span>
      </li>
  )
}

const List = (props) => {
  return (
    <div>
        <ul>
          {props.list.map(item => (
              <Item key={item.objectID} item={item}/>
          ))}
        </ul>
    </div>
  );
  
}

export default App
