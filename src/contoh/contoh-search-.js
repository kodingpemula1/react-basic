import './App.css';
import React, { useState } from 'react';
import MotorBike from '../components/MotorBikes';




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
      title:"Redux",
      url:"www.redux.com",
      author:"Mr.X",
      num_comments:24,
      points:20,
      objectID:2
    }
  ];

const [searchTerm2,setSearchTerm2] = useState("");

const handleSearch2 = (event)=>{
  setSearchTerm2(event.target.value);
}

const filterResult = stories.filter((item) =>{
  return item.title.toLowerCase().includes(searchTerm2.toLowerCase())
})

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
      <input id="search" type='text' onChange={handleSearch2}></input>

      <List mylist={filterResult}/>


<MotorBike/>
    </div>
  );


}


export default App;
