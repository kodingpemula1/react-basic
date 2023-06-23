import logo from './logo.svg';
import './App.css';
import MyButton from '../../MyButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css';
import Header from '../../Header';
import React from 'react';
import Car3 from '../../Car3';

function App() {
const title = "Koding Akademi"

const welcome = {
  greeting:"Selamat Datang",
  title: "Koding Akademi",
}

const myelement = <h1>React is {5-5} better than JSx</h1>

const mycar = (
  <ul>
  <li>Honda</li>
  <li>Yamaha</li>
  <li>Mitsu</li>
  </ul>
)

let x = 30;
let text = "Koding";
let text2 = "denpasar";
if(x < 20)
text = "hello";

function Car (){
  return <h3>ini mobil saya</h3>;
}

const Car2 = (props) => {
  return <h3>mobil saya warnanya {props.color}</h3>
}

const mylist = [
  {
    title:"react",
    url:"www.react.com",
    author:"Mr.x",
    num_comments:20,
    points:4,
    objectID:1
  },
  {
    title:"Redux",
    url:"www.redux.com",
    author:"Mr.y",
    num_comments:41,
    points:43,
    objectID:5
  }
];

  return (
    <div className="App" >

  <h1>{welcome.greeting} di {welcome.title}</h1>
  {myelement}
  <label htmlFor='search'> Search :</label>
  <input id="search" type='text'/>
  <div>
  {mycar}
  </div>

  <p>{text}</p> 

    <p>{x < 20 ? text2 : "lebih besar dari 20"}</p>

  <Car/>
  <Car2 color="kuning"/>
  <Car2 color="merah"/>
  <Car2 color="hijau"/>

  <Car3/>

  {
  mylist.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  })
}

    </div>
  );


}


export default App;
