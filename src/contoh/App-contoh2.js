import logo from './logo.svg';
import './App.css';
import MyButton from '../../MyButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css';
import Header from '../../Header';
import React from 'react';
import Car3 from '../../Car3';
import Card from '../Card';
import MyForm from '../MyForm';



function App() {

  // const handleChange = (event) =>{
  //   console.log(event.target.value);

  // }

  // const handleClick = (event) =>{
  //   console.log(event.target.value);

  // }

  // const showAlertName = (name,addr) => {
  //   alert(`My Name is ${name} and addr: ${addr}`);
  // }

  return (
    <div className="App" >

    {/* <div>
      <label>Search : </label>
      <input id="searh" type="text" onChange={handleChange}></input>
      <button id="mybutton" name="btn-search" onClick={handleClick}>Search Now</button>
      <button onClick={()=> showAlertName("andrew","jln.Tukad")}>Tampilkan Alert</button>
      <MyForm/>
    </div> */}

<Card/>
    </div>
  );


}


export default App;
