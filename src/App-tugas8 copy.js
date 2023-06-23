import logo from './logo.svg';
import './App.css';
import React from 'react';
import YellowBorder from './components/YellowBorder';
import Header from './components/Header';




function App() {

  const stories = [
    {
      title:"React",
      url:"www.react.com",
      author:"Mr.Z",
      num_comments:4,
      points:10,
      objectID:1
    },
    {
      title:"React",
      url:"www.redhat.com",
      author:"Mr.X",
      num_comments:24,
      points:20,
      objectID:2
    }
  ];

function List(props){
  return(
    <ul>
      {props.mylist.map(item =>{
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

  return (
    <div className="App" >
      <label>search</label>
      <input id="search" type='text' onChange=""></input>

      <List mylist={stories}></List>


      <YellowBorder color="yellow">
        <Header appTitle1="Koding Akademi"/>
      </YellowBorder>

    </div>
  );


}


export default App;
